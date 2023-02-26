---
tittel: Håndtering av angrep i skyen
beskrivelse: Nesten alle digitale tjenster lever i dag i skyen, eller avhengig av skytjenester. Hvordan håndterer vi dataangrep mot skytjenester? 
tags:
 - post
 - front
date: 2023-02-25
layout: layouts/post.njk
bilde: /img/skyangrep.gif
---
Hverdagen vår avhenger av nettskyen, og særlig av 3 store amerikanske leverandører av skytjenester: Microsoft, Amazon og Google. Ofte ser vi et godt gjennomtygd meme som hever at det ikke finnes noen sky, bare 
datamaskiner som tilhører noen andre. Selv om det er en viss grad av sannhet i dette (tjenestene vi kjører 
i skyen, _kjører på datamaskiner som tilhører noen andre_.) Sannheten er nok (heldigvis) litt mer omfattende. 

## Hva er så skyen? 
NIST har laget en [definisjon av skytjenester](https://www.nist.gov/publications/nist-definition-cloud-computing) som dekker det viktigste: 

- Konfigurerbart
- Øyeblikkelig tilgjengelig via nettverk
- Veldig skalerbart
- Moderate forvaltningsbehov

Dette har betydning for sikkerhet. Hvis en angriper kan ta kontroll over konfigurasjonen av skyressurser, har angriperen potensielt mulighet til å fullstendig kompromittere alt som kjører i skymiljøet, samt etablere egen infrastruktur i offerets skymiljø.

Det finnes 3 modeller for hvordan tjenester tilbys som skytjenester. 

- Infrastruktur som tjeneste (IaaS - Infrastructure as a Service)
- Plattform som tjeneste (PaaS - Platform as a Service)
- Programvare som tjeneste (SaaS - Software as a Service)

Avhengig av hvilken modell tjeneste du bruker tilbys som, deler du på ansvaret for sikkerhet med skyleverandøren. Med IaaS tar du størst del av ansvaret selv, men med SaaS er det skyleverandøren som bærer mest ansvar. Eksempler på dette er at du lager en webapplikasjon som du kjører på en virtuell maskin i AWS (IaaS), mot at du bruker Microsoft Word Online til å skrive noe (SaaS). Når du bruker IaaS-tjeneste er du selv ansvarlig for sikkerhetsoppdateringer, sårbarhetshåndtering - og også hendelseshåndtering. Bruker du en SaaS-tjeneste er du i hovedsak ansvarlig for å sikre brukerkontoen din, som at du skrur på totrinnsverifikasjon og bruker et sterkt passord. 

Selve kontrollen over skyressursene i en konto kan vi kalle _styringsnivået_ (på engelsk - management plane). Dersom en angriper tar kontroll over styringsnivået, kan det sammenliknes med en angriper som har blitt domeneadministrator i et typisk Windows-nettverk. 

## Typiske angrep mot skyressurser
Skyressurser er utsatt for angrep, som i stor grad speiler 
trusler mot tradisjonelle IT-ressurser. Cloud Security Alliance har publisert en rapport i 2022 som omtaler 11 
trusler, basert på en rundspørring blant 700 eksperter. 
[Rapporten kan lastes ned her](https://cloudsecurityalliance.org/research/working-groups/top-threats/). Vi kan vel kanskje 
bedre definere disse som risikofaktorer: 

1. Mangelfull kontroll på IAM
2. Usikre grensesnitt og API-er
3. Feilkonfigurasjon og svak endringsstyring
4. Manglende sikkerhetsarkitektur og strategi for sky
5. Usikker programvareutvikling
6. Usikrede tredjepartsressurser
7. Sårbarheter på systemnivå
8. Tilfeldige lekkasjer av data
9. Feilkonfigurering og utnyttelse av tjenester som kjører som basert på serverless-teknologi og konteinere
10. Organisert kriminalitet/hackere/APT-er
11. Eksfiltrering av data fra skylagring

CSA-rapporten gir gode råd om hvordan man kan herde skyressurser for å unngå disse 11 sårbarhetene. Det skjer jevnlig dataangrep som lykkes fordi disse sårbarhetene eksisterer, så det er et godt utgangspunkt. 

Om vi ser på faktiske angrep mot skyressurer, har vi en god oversikt gjennom [MITRE ATT&CK for Cloud](https://attack.mitre.org/matrices/enterprise/cloud/), som viser teknikker bruke i forskjellige faser av angrep. Svært mye av dette finner vi igjen i tradisjonelle IT-systemer. 

- Initiell tilgang: Angrep mot brukerkontoer, utnytte sårbare applikasjoenr
- Kjøring av kode: via kompromitterte kontoer med tilgang på styringsnivå, og ved brukerutførign
- Persistent tilgang: kontomanipulering, planlagte kjøringer
- Eskalering av rettigheter: gyldige kontoer, utnytte sårbare planlagte prosesser som kjører med høyere privilegier
- Unngå å bli oppdaget: endre logging, slette logger, endre på infrastruktur, bruke alternative regioner, gyldige kontoer
- Tilgang via IAM: brute-force, MFA-trøtthet, tokentyveri, usikrede data
- Eksfiltrering: overføring til andre skyressurser
- Impact: tjenestenekt, ressurstyveri

For mange virksomheter er det særlig følgende 3 angrep som vil ha betydning for sikring av skyressurser: 

1. Løsepengevirus som også sprer seg til skyressurser
2. Tyveri av data lagret i skyen - for eksempel i "buckets"
3. Misbruk av infrastruktur (til kryptomining, eller til å angripe andre)

## Respons i skyen
For å kunne håndtere hendelser i skymiljøer trenger vi først 3 ting: 

- Tilgang med tilstrekkelige rettigheter til å kunne isolere trusselen og deretter fjerne den. 
- Evne til å detektere hendelsen
- En plan for hva som skal gjøres ved en deteksjon

### Eksempel: kompromittert VM
Vi kjører bruker Google's Compute Engine-tjeneste til å 
kjøre en applikasjon. Denne er ikke eksponert direkte mot 
internett, men kjører med standard servicekonto. VM-en er 
satt opp med full tilgang til Google's Cloud API. Utvikleren har tilgang til VM-en via SSH fra sin PC. 

En angriper ønsker å stjele data fra dette selskapet relatert til 
en oppsetning av Sibelius Finlandia på neste års klassiskfestival i Andeby, 
og har lyktes å få fjerntilgang til utviklerens PC etter 
et vellykket phishing-angrep. Ved å benytte SSH fra 
utviklerens PC, får angriperen tilgang til VM-en. 
Angriperen bruker _gcloud_ på VM-en til å liste alle ressurser som kjører i 
GCP-prosjektet, og finner deretter en interessant Cloud Bucket som heter 
Finlandia. Angriperen bruker så _gcloud_ til å gjøre Finlandia-bucket'en 
åpent tilgjengelig fra nettet, og laster så ned alle de hemmelige 
dokumentene fra denne. 

![Finlandia-angrepet](/img/finlandia-angrepet.jpg)
Angriperen har ganske kort vei fra tilgang til utviklerens PC til 
full tilgang til skymiljøet via gcloud som er installert på VM-en. 

### Deteksjon
La oss lage en kort liste over deteksjoner som er tilgjengelige
for oss i skymiljøet uten særlig mye forhåndskonfigurering: 

- SSH-login til VM: tilgjengelig på VM
- Bruk av gcloud/kall til Cloud API

Dersom utvikleren jevnlig logger på denne VM-en med SSH, 
er ikke det en nyttig deteksjon. Men dersom kall til Cloud API 
er uvanlig, er dette mulig å bruke til deteksjon her. 

Dersom vi antar at angriperen vil endre på IAM-policy for en eller flere buckets, kan vi søke etter følgende i "Log Explorer": 

```
resource.type="gcs_bucket" AND protoPayload.methodName = "storage.setIamPermissions"
```
Det kan jo være at en administrator endrer dette direkte. Men kanskje vi vil se om dette skjer kun fra en service-konto? 

```
resource.type="gcs_bucket"
AND protoPayload.methodName = "storage.setIamPermissions"
AND protoPayload.authenticationInfo.principalEmail = "<projectnumber>-compute@developer.gserviceaccount.com"
```

Ved treff på denne vet vi at noen har brukt en standard service-konto fra en skyressurs. Dette kan tyde på at ressursen er misbrukt og at vi bør ha en alarm på hendelsen. Dette er enkelt å sette opp i Google Cloud Console, og kan konfigureres for en rekke måter å sende alerts på, feks e-post, integrasjon med PagerDuty, eller via Webhooks. 

![log explorer alert setup](/img/log_alert_google.png).

### Analyse
La oss si vi får en slik alarm. Hva er så neste steg? Vi må 
undersøke hendelseforløpet og finne ut om hendelsen er en korrekt 
deteksjon, eller en falsk alarm, for eksempel på grunn av en administrators handlinger. 
Ofte vil den initielle undersøkelsen se omtrent slik ut: 

1. Undersøk loggene for å få mer detaljer om hendelsen
2. Sjekk flere logger - for eksempel lokalt på den aktuelle VM-en
3. Sjekk om det er endringer i filer på aktuelle buckets
4. Snakk med evt administratorer/systemeiere for å avklare

Først, ved å se nærmere på metadata i forespørselen til Cloud API, kan vi se hvor denne kommer fra, 
og at dette er interaktiv bruk på kommandolinja ved hjelp av gcloud. 

```
callerIp: "34.88.244.55"
callerNetwork: "//compute.googleapis.com/projects/security-experiments-338619/global/networks/__unknown__"
callerSuppliedUserAgent: "google-cloud-sdk gcloud/419.0.0 command/gcloud.storage.buckets.add-iam-policy-binding invocation-id/1f03cb4d2f264765ba82bad2f989db6b environment/GCE environment-version/None interactive/True from-script/False python/3.9.16 term/xterm-256color (Linux 4.19.0-23-cloud-amd64),gzip(gfe)"
```
Ved hjelp av public ip-adresse som er inkludert her, kan vi 
identifisere hvilken VM dette kommer fra. En mulig måte å sjekke ut hva som har skjedd på denne VM-en er å logge på med SSH, og sjekke siste pålogginger, prosesser som kjører o.l. Det vil også være interessant å se på bash_history, siden vi vet gcloud be kjørt fra kommandolinja. 

Vi bruker kommandoen `history`-kommandoen, og finner følgende linjer: 

```
 762  gcloud storage buckets add-iam-policy-binding gs://finlandia-bucket --memmber=allUsers --role=roles/storage.objectViewer
  763  gcloud storage buckets add-iam-policy-binding gs://finlandia-bucket --member=allUsers --role=roles/storage.objectViewer
  764  gcloud storage buckets --help
  765  gcloud storage buckets describe gs://finlandia-bucket
```
Dermed har vi funnet ut hva som skjedde her. Ved å ta en telefon til utvikleren som er ansvarlig for tjenesten, får vi bekreftet at dette ikke er gjort av vedkommende, og ikke er noe som skulle ha skjedd. 

### Isolering og håndtering
Tjenesten er ikke en kritisk tjeneste. Nå gjelder det å isolere hendelsen, og gjenopprette tjenesten med en sikker konfigurasjon. Her er planen: 

1. Hent ut bevis om nødvendig (snapshot, minnedump)
2. Steng ned VM-en
3. Blokker alle pålogginger med SSH i brannmuren til VPC-nettverket
4. Rett opp tilgangene på Cloud Storage Bucket-en
5. Endre tilganger for VM-en (blokker skrivetilgang til Cloud API)
6. Endre instansen til å kjøre med en mer [begrenset service-konto](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances)
7. Start opp tjenesten igjen
8. Håndter utviklerens kompromitterte endepunkt

### Litt etterpåklokskap
Etter en hendelse er det alltid lurt å tenke seg om og gjøre en 
_post mortem_. 

- Hvorfor skjedde dette?
- Hva gikk bra?
- Hva gikk ikke så bra? 
- Hvilke endringer trenger vi? 

Dette skjedde fordi en angriper ønsket å skaffe seg tilgang, 
kombinert med at systemet var svært sårbart. Dette hadde vært 
enkelt å oppdage med en gjennomgang av arkitektur og praksis. 
Bruk av en CSPM (cloud security posture management) ville også 
automatisk ha oppdaget service-kontoen med alt for mye 
rettigheter.

Det vi også ser, er at vi ikke får alarmer om slik misbruk 
automatisk. De må konfigureres. Derfor er det en god idé 
å sette opp en trusselmodell og planlegge deteksjoner og 
håndteringssteg. 

Det som ikke gikk så bra, var jo at trusselaktøren lyktes med 
å stjele data fra en bucket. Dette kan vi unngå for 
fremtiden ved bedre herding. Å respondere raskt nok til 
å unngå nedlasting av data er vanskelig, om man ikke har 
en automatisert respons - men da har man vel gjerne også 
gjennomført herding. 

## Oppsummering av skyrespons
For å respondere i skyen, er tankegangen veldig lik tradisjonell
håndtering i et stedfast IT-miljø. Man må sette opp deteksjoner, 
sørge for å ha en håndteringsplan, og også ha tilganger 
klare for å kunne gripe inn. 

For større miljøer er det fornuftig å bruke skalerbare
sikkerhetsløsninger også i skyen: 

- Agentbasert sårbarhetshåndtering
- Endepunktesbeskyttelse på VM-er
- Sende logger til en SIEM og sette opp deteksjoner der
- Bruke en løsning for å sjekke sikkerhetstatus som kan avdekke konfigurasjonsfeil (CSPM)

