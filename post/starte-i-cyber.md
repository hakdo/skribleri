---
tittel: Hvordan endre karriere til cybersikkerhet?
beskrivelse: En tok kontakt med meg på LinkedIn, og spurte hvordan man kan skifte karriere og komme seg inn i cybersikkerhet. Dette er mitt svar, som ble litt for langt til å skrive som en chat-melding.
tags:
 - post
 - front
date: 2023-01-29
layout: layouts/post.njk
bilde: /img/phisherman.jpg
---


Jeg er tidvis ganske aktiv på [LinkedIn](https://www.linkedin.com/in/hakondo/). En av mine kontakter sendte meg
i helga følgende DM:


> Hei Håkon!
 Har noen spørsmål angående hva som trengs for å starte i Cybersecurity yrket med null erfaring. Er interessert i å bytte yrket og lurer på hva som trengs i praksis.
>
> 1. Hva slags ferdigheter trengs for yrket?
> 2. Hva slags sertifikater er viktig og lurt å ta?


Denne posten er et ganske langt svar på disse to spørsmålene. Den korte oppsummeringen er at
hvilke ferdigheter du trenger, kommer til dels an på hva du vil jobbe med innen fagområdet.
Sikker utvikling krever andre kunnskaper og evner enn strategi og sikkerhetsledelse. Når det gjelder
sertifiseringer o.l., avhenger dette også av hva man ønsker å jobbe med. Det kan med andre ord lønne
seg å tenke gjennom hvor man har tenkt seg, før man velger et gitt sertifiseringsløp.


Dette spørsmålet om "hvordan begynner jeg i cyber" får nok mange som jobber innen sikkerhet, og som er synlige på
sosiale medier. En av de mer kjente personene i
fagfeltet som er veldig aktiv på sosiale medier er Leslie Carhart, kjent på Twitter og etter hvert Mastodon som
[@hacks4pancakes@infosec.exchange](https://infosec.exchange/@hacks4pancakes). Hun skrev tilbake i 2015 en utførlig guide
som svar på dette spørsmålet i en mer amerikansk kontekst. Dette svaret er fortsatt veldig relevant, og informativt.
Her finner du Leslies [Megamix for Starting an Infosec Career](https://tisiphone.net/2015/10/12/starting-an-infosec-career-the-megamix-chapters-1-3/).


Jeg skal prøve å gi litt kortere svar, i en mer norsk kontekst, som jeg håper vil være nyttig for folk som
ønsker å endre karriere til å jobbe "innen informasjonssikkerhet".


## Det store spørsmålet: hva kan du gjøre innen cybersikkerhet?
Informasjonssikkerhet er et veldig stort arbeidsfelt, og rommer veldig mye. Det er nok ingen
som er eksperter i hele fagområdet. Dette betyr også, at fagbakgrunnen og kunnskapene du
har fra før vil sannsynligvis være relevante innen enkelte områder i informasjonssikkerhet,
mens de vil gi deg mindre startfart i andre underområder i faget.  For enkelhets skyld kan
vi grovt dele fagfeltet i 4 undergrupper:


1. Sikkerhetsledelse: styringssystemer, risikostyring, strategi, ledelsespraksis, kompetansestyring.
2. Utvikling: utvikle sikre systemer og arkitekturer.
3. Cyberforsvar: beskytte systemer og organisasjoner mot angrep
4. Sikkerhetstesting: etisk hacking, penetrasjonstesting, verifikasjon


Dette er en ganske grov inndeling. En etter hvert ganske kjent oversikt laget på LinkedIn i 2017 gir
et mer nyansert bilde: [Henry Jiang's cybescurity domains mindmap 2.0](https://www.linkedin.com/pulse/map-cybersecurity-domains-version-20-henry-jiang-ciso-cissp/).
Hvis du er i startfasen og prøver å finne
ut hva du er interessert i er dette en interessant ressurs!




## Skaff deg kunnskaper og evner
For å lykkes med cybersikkerhet, er det nødvendig å ha noen fundamentale kunnskaper på plass.
Det finnes jobber som ikke er veldig tekniske, men uansett vil det være en stor fordel å
ha en grunnleggende forståelse av teknologiene du jobber med. Alle trenger ikke å kunne skrive egen
kode, eller være dypt nede i nettverksprotokoller, men noen ting er avgjørende for å kunne
jobbe effektivt med andre innen fagfeltet. Det er også viktig å ha grunnkunnskaper om
det tekniske på plass
for å kunne kommunisere effektivt med andre interessenter som bedriftsledere, styremedlemmer og
HR-ansatte, på en slik måte at det man sier er forståelig i konteksten man jobber i.


En måte å skaffe seg slik kompetanse på om man ikke allerede besitter den fra praksis, er å ta en
formell utdanning, for eksempel en Bachelorgrad innen IT. Dette er ikke absolutt nødvendig,
og man kan komme langt på andre måter, for eksempel gjennom egenstudier, kurs og arbeidspraksis.
Følgende liste er vel det vi kan anse som et forsøk på å liste "det mest fundamentale":




### Pre-sikkerhet: generell IT-kunnskap man bør ha for å jobbe innen informasjonssikkerhet
- Hvordan datamaskiner virker (operativsystem, maskinvare, minne, nettverkskort, osv)
- Hvordan Windows + Linux fungerer (filsystem, tilgangskontroll, sikkerhetsverktøy, applikasjoner, administrator)
- Hvordan nettverk fungerer, og kunne forstå modeller for protokoll-stack: [OSI](https://no.wikipedia.org/wiki/OSI-modellen) + [TCP/IP](https://snl.no/TCP/IP)
- Hvordan web'en fungerer (DNS, HTTP, TLS, servere, HTML, CSS, JavaScript, nettlesere, cookies)


### Grunnleggende teknisk informasjonssikkerhet: generelle temaer man bør ha litt oversikt over
- Sårbarheter: kategorier, risiko, CVSS-rating, CWE
- Vedlikehold: oppdateringer, prioritering av sårbarheter, inventarlister (programvare + maskinvare)
- Viktige lovkrav (personvern, bransjespesifikke krav) og standarder
- Logger og logganalyse
- Skadevare: hvordan fungerer det
- Trusselforståelse: hvordan utføres dataangrep, av hvem, hvorfor. [MITRE ATT&CK](https://attack.mitre.org/) er en god ressurs.
- Herding av systemer
- Avveining mellom sikkerhet og brukervennlighet
- Menneskelige faktorer og behov for rutiner og opplæring
- Cyberrisiko i tekniske systemer: sårbarheter + systemverdi + trusselaktør
- Sky: delt ansvarsmodell, elastisitet, utrullingsmodeller, etc.
- Sikkerhetsteknologier og begreper: antivirus, EDR/XDR, SIEM
- Trusseletterretning: hvordan samles og brukes informasjon til å bedre sikkerheten


### Grunnleggende praktiske evner
I tillegg til å ha bakgrunnskunnskaper er det en stor fordel å ha litt fingerferdighet og erfaring med
datasystemer og nettverk. Det er kjekt å kunne bruke kommandolinjen på vanlige operativsystemer, og
kjenne til hvordan man endrer instillinger, finner logger, administrerer brukerkontoer og liknende.
En god måte å lære på, er å prøve og feile.


### Typiske evner/kunnskaper man ønsker for forskjellige underområder av faget


*Sikkerhetsledelse*: God forretningsforståelse og organisasjonsforståelse. Være systematisk. Kunne kommunisere godt
skriftlig og muntlig. Kunne sette seg inn i regelverk og standarder og omsette til praksis. Forstå kompetansebehov
og opplæring.


*Utvikling*: Meget god teknologiforståelse. Forstå trusler mot tekniske systemer på detaljert nivå. Kjenne praksis
for DevOps, SDLC. Kunne skrive kode, tester. Forstå nettverksarkitektur. Samhandling med driftssiden, inkludert
identifikasjon og implementering av deteksjon basert på trusselmodeller. Kjenne til sikkerhetstesting for programvare og kunne bruke disse (SCA, SAST, DAST, etc).


*Cyberforsvar*: analytisk sterk. God teknisk trusselforståelse. Forstå rollefordeling i hendelseshåndtering.
God kjennskap til deteksjonsteknologi. Dokumentasjon, bevishåndtering. Systematisk arbeid. Jobbe under høyt press
når angrep skjer.


*Sikkerhetstesting*: kreativ, god teknisk forståelse. Kunne utvikle angrepsmetoder, forstå hvordan
forsvarere tenker. Kunne bruke tekniske verktøy. Kunne utarbeide god dokumentasjon, forbedringer.


Tenk gjennom hva du er interessert i, hva du kan fra før, og hvilke erfaringer du har fra tidligere
karriere når du prøver å lande hvilken retning du vil gå i.


### En liten digresjon om OT
Vi har så , snakket mest om IT. Skal du jobbe i et industrielt miljø, er fokus ofte på OT. Her har
folk som har bakgrunn fra industri, særlig som prosessoperatør, automasjonstekniker e.l. en klar fordel:
forståelse av de fysiske systemene IT-komponentene samvirker med - i tillegg til de begrensninger
systemer i OT-verdenen har sammenliknet med et typisk IT-system. En PLS eller en HMI fungerer
annerledes enn en laptop brukt av kontoransatte - og har ikke de samme sikringsmulighetene.


## Bruk tid på det menneskelige nettverket ditt
Ingen skaffer seg en ny karriere alene. Bruk nettverket ditt, og utvid nettverket til å inkludere
mennesker du kommer til å jobbe med i den nye karrieren din.


- Vurder medlemskap i interesseorganisasjoner som [Dataforeningen](https://www.dataforeningen.no/), [ISACA](https://www.isaca.org/) og [OWASP](https://owasp.org/)
- Følg sikkerhetsfolk på sosiale medier. Mange var tidligere aktive på Twitter, men har nå flyttet til
Mastodon-instansen [infosec.exchange](https://infosec.exchange).
- Snakk med folk du kjenner om karriereveien du går - jo flere som kjenner til hva du driver med, jo større sjanse for interessante innspill og tips
- Om du har mulighet, bli gjerne med på relevante møter og konferanser. I Norge er det noen få jevnlige arrangementer som Sikkerhetsfestivalen, NSM-konferansen, Paranoia-konferansen og Sikkerhet og sårbarhet.
- Del egen kunnskap ofte - det du lærer er det flere som har behov for. Skriv en blogg, lag konseptkode, del på sosiale medier. Dette blir ofte lagt merke til, og skaffer deg flere faglige kontakter!




## Utdanning og bevis på hva du kan
Kunnskaper og evner er vel og bra, men skal du komme gjennom nåløyet i en jobbsøkerprosess er
dokumentasjon på hva du kan gull verdt. Her hjelper det såklart om du skilte med en akademisk grad,
men sertifiseringer er også attraktive. Noen av disse har krav til erfaring, mens andre har det ikke.
Noen er mer relevante for noen underområder, mens andre er mer generelle. Her er noen sertifiseringer
som både kan hjelpe deg å lære, og komme gjennom HR-nåløyet:


- CISSP: generell sertifisering, dekker fagfeltet bredt. Omfattende pensum og test.
- GIAC-sertifiseringer: svært ettertraktet. Kursene fra SANS er dyre, men gode. Mer spesifikke sertifiseringer.
- Certified Ethical Hacker: kan hjelpe å skaffe deg en penetrasjonstesterjobb
- OSCP: høyt respektert, svært arbeidskrevende.
- Diverse leverandørspesifikke sertifiseringer: nyttig for å vise kunnskap innen spesifikke teknologier, kan lande deg en jobb hvor disse er viktig. For eksempel fokuserer SC-200 fra Microsoft på kunnskap om Microsofts sikkerhetsprodukter som en analytiker kan bruke i en SOC som bruker disse verktøyene. På samme måte har andre selskaper sertifiseringer på egen teknologi, som er nyttig om man vil jobbe med disse. På nettverk er Cisco-sertifiseringer ettertraktet.


Utover rene sertifiseringer kan det også hjelp med kursbevis, eller sertifikater from diverse online-plattformer.
Relevante online-kurs finnes hos TryHackMe.com, letsdefend.io, Coursera og Udemy, for å nevne noen.


## Finn en jobb
Så var det å finne seg en jobb da. Her kan man selvsagt bruke det offentlige jobbmarkedet som finn.no, men
mange finner nok sikkerhetsjobben gjennom nettverket sitt - så da er man tilbake på å pleie sitt menneskelige
nettverk. Noen generelle tips kan vel være:


- Gjør det kjent at du er på utkikk etter jobb
- Vær åpen for å starte i en "nesten-sikkerhetsjobb", som for eksempel IT-support eller sys.admin-jobber
- Delta gjerne på fagmøter og konferanser for å finne relevante jobbkontakter
- Lag deg en god LinkedIn-side, blogg, online CV eller liknende du enkelt kan dele


Lykke til!

