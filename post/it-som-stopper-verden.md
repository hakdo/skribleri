---
tittel: IT som stopper verden
beskrivelse: Vår fysiske verden er i dag avhengig av IT-systemer i så stor grad, at når systemene ikke virker, kan vi ikke handle i butikken, ta fly, eller produsere varer. Hva betyd dette for hvordan vi tenker på sikkerhet?
tags:
 - post
 - front
date: 2023-02-19
layout: layouts/post.njk
bilde: /img/shipping-containers-in-yard.jpg
---
Siden verden er så sammenkoblet, er vi som samfunn mer sårbare for dataangrep enn før. 
I tillegg til dette har vi "vanlige feil" som skyldes uhell, kvalitetsproblemer og liknende, 
som også kan forårsake betydelige utfordringer. 

Dette har allerede gitt seg utslag i problemer gjennom de siste 5-10 årene. Her er et knippe relativt 
nylige eksempler: 

- [Adressa: Helseplattformen ved St. Olavs: rapport hevder den er svært farlig](https://www.adressa.no/nyheter/trondelag/i/pQrO81/knusende-rapport-om-helseplattformen-svaert-farlig)
- [NRK: Løsepengevirus fører til store kostnader - og produksjonsstans](https://nrkbeta.no/2022/01/11/losepengevirus-koster-norske-virksomheter-dyrt/)
- [Mærsk: Tapte 2,5 milliarder på NotPetya](https://www.cw.no/cyberangrep-datasikkerhet/tapte-naer-25-milliarder-pa-cyberangrep/759024)
- [Nettavisen: Lufthansas problemer skyldtes skade på kabel under graving](https://www.nettavisen.no/nyheter/lufthansa-kaoset-anleggsarbeid-pa-jernbanelinje-far-skylden/s/5-95-917480)

Helseplattformen: Statens Helsetilsyn mener det nye journalsystemet fører til dårligere behandling
og setter liv i fare. Løsepengevirus rammer bedrifter jevnlig, og fører til produksjonsstans i 
industribedrifter, selv om kontrollsystemene som styrer maskinene i fabrikkene ikke nødvendigvis blir 
direkte rammet. Med produksjonsstrategier som forsøker å effektivisere og minimere mellomlagring, 
blir integrasjonen mellom produksjon og planlegging enda tettere - og da fungerer det ikke når 
IT-systemene er nede. I 2017 ble Mærsk rammet av et angrep mot det ukrainske samfunnet, som førte 
til månedsvis med problemer innen global shipping med stengte havner og til dels varemangel enkelte 
steder. I forrige uke ble tusenvis av passasjerer påvirket av at Lufthansa innstilte alle avganger - 
på grunn av et uhell ved anleggsarbeid på jernbanen i nærheten av flyplassen i Frankfurt. Alle disse 
eksemplene er IT-relaterte hendelser, både angrep og andre, som har rammet vår fysiske verden. Dette 
er i dag vanlig - angrep mot IT-systemene til en bedrift, rammer hele virksomheten. Når verdikjedene 
er tett sammenkoblede rammer slike problemer også andre virksomheter. 

Denne skjørheten i samfunnet som er drevet frem av digitaliseringen, er uakseptabel. Ikke bare fører 
den masse vidtrekkende problemer med seg, som koster mye penger og tid, men det påvirker også 
hvordan vi føler oss. Digitaliseringen fjerner barrierer for aktivitet - når den virker. Vi kan i 
dag på 30 sekunder utføre oppgaver via smarttelefonen, som før krevde fysisk oppmøte eller brevskriving, 
og kunne ta flere dager, eller til og med flere uker å gjennomføre. Samtidig er systemene vi bruker 
så sammenknyttet, og så skjøre, at når noe går galt med dem, blir vi fullstendig ute av stand til å 
utføre oppgavene våre. 

Problemer i den digitale verden fører til utfordringer for vår mentale helse. Når systemene ikke 
virker, fører de naturlig nok til mer stress. Vi kan bli bekymret for at vi ikke overholder 
avtaler, eller at informasjon forsvinner. Vi ser også et avhengighetsaspekt i den digitale sfæren, 
særlig drevet av sosiale medier, hvor mange ikke klarer å gi slipp på smarttelefonens stadige 
strøm av stimuli. En slik avhengighetstilstand øker også risikoen for at man gjør mer risikable 
digital valg - man blir rett og slett mer impulsiv og mindre kildekritisk i en slik situasjon. 
Dette er en fordel for de som ønsker å hacke seg inn i bedriften gjennom sosial manipulering. 
Angst drevet av upålitelige systemer, og avhengighet drevet av sosiale medier og overarbeid, 
er altså angripernes beste venner. 

## Hva med angrep direkte mot operasjonelle teknologier? 
Vi ser jevnlig at produksjonssystemer stopper på grunn av IKT-hendelser. Men hva med angrep 
direkte mot kontrollsystemer som styrer de industrielle prosessene? Disse er heldigvis 
sjeldnere, men ikke helt fraværende. Det er definitivt sårbarheter i industrielle kontrollsystemer, 
og spørreundersøkelser blant ledere og teknisk ansatte viser at operatørene selv forventer 
flere angrep i årene som kommer, se [the Cyber Priority fra DNV](https://www.dnv.com/cybersecurity/cyber-insights/thecyberpriority.html) (*red.anm: undertegnede jobber hos DNV, men har ikke vært involvert i å lage denne rapporten*).

Disse systemene er som regel segregert fra kontornettene, men det betyr ikke at angripere ikke 
kan komme seg inn. De vanligste måtene en angriper kan komme seg inn i industrinettet på, er ved å 
hacke PC-en til en ansatt som har fjerntilgang for eksempel via VPN inn i industrinettet, og å bruke 
denne til å etablere en bakdør i industrisystemene. Alternativt kommer de seg inn ved bruk av USB-minnepinner 
og bærbare PC-er som brukes til å konfigurere IT-systemer. 

Det finnes trusselaktører som har utført angrep mot industrielle systemer. Disse pleier å være såkalte 
APT-grupper, som jobber for en nasjonalstat, eller i det minste med en stats velsignelse. Her har vi 
for eksempel Sandworm, som hører til den russiske militære etterretningstjenesten GRU, og som stod bak 
NotPetya-angrepet som rammet Mærsk og mange flere i 2017.

## Kan enkeltbedrifter bidra til et tryggere digitalt samfunn?
I forrige uke, hadde jeg gleden av å holde et foredrag sammen med et eminent knippe av 
innledere. Her bidra Maria Bartnes, forskningssjef hos SINTEF, med et innlegg om hvordan 
det vil hjelpe oss alle om bedrifter bare gjør *litt mer* for digital sikring, enn det de 
gjør i dag. Etter seminaret postet hun en fin oppsummering på [LinkedIn](https://www.linkedin.com/posts/arne-maria-bartnes-7744272_hvordan-kan-vi-hjelpe-sm%C3%A5-bedrifter-til-activity-7029347229278584832-GTU_).

Sett fra enkeltbedriftens ståsted, oppsummerer Bartnes situasjonen i tre viktige og veldig gode råd: 

- Du kan gjøre mye godt sikkerhetsarbeid uten å være IT-ekspert
- Grunnleggende sikkerhetstiltak er enkle og rimelige (og effektive - red.anm.)
- Det finnes mange dyktige eksperter som kan hjelpe, gi råd og være sparringspartner

God operasjonell cybersikkerhet krever aktiviteter gjennom hele livssyklusen til 
informasjonen vi behandler, og systemene vi bruker til dette. Nasjonal sikkerhetsmyndighet
har laget en oversikt over god praksis og publisert [Grunnprinsipper for IKT-sikkerhet 2.0](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/introduksjon-1/). 
Grunnprinsippene gir konkrete aktiviteter som bør inngå i virksomhetens sikkerhetsstyring på 
tvers av 4 kategorier: 

1. Identifisere og kartlegge
2. Beskytte og opprettholde
3. Oppdage
4. Håndtere og gjenopprette

Enkeltbedriftene kan med andre ord gjøre en hel del for å bedre egen sikkerhet. Dette hjelper 
samfunnet som helhet, fordi bedrifter som har tatt grep om egen sikkerhet blir ikke rammet like ofte, 
og like hardt. Da bremser vi hastigheten store angrep sprer seg med, og vi reduserer konsekvensene 
av angrepene når de kommer seg på innsiden. 

Likevel kan ikke enkeltbedriftene løse problemene alene. Når cyberangrep rammer virksomheter og 
tjenester som hele samfunn har behov for, utnyttes ikke bare sikkerhetshull og svakheter i 
de enkelte tjenestene. Den største svakheten er kanskje kompleksiteten som oppstår med mange 
systemer som er innbyrdes avhengige av hverandre, uten at dette nødvendigvis er veldig synlig 
før det har resultert i alvorlige problemer. 

### Verdikjeden som svakt punkt
Vi tilbyr og kjøper varer og tjenester i dag som består av delleveranser fra mange forskjellige 
leverandører. Dette innebærer mange avhengigheter. Se for deg for eksempel en app til smarttelefonen 
for å kjøpe bussbiletter. Aktivieten denne app'en brukes til vil typisk være kjøp av billetter, 
informasjon om rutetabeller, søk etter beste rute mellom to punkter, rapportering av klimapåvirkning fra 
reisen, bilettkontroll og muligens også andre ting som integrasjon med mikromobilitetsløsninger eller 
rene underholdningstjenester. Dette betyr at bilettapp'en nok snakker med mange API-er for å 
tilby alle disse funksjonene. Bak hvert API står det en organisasjon, som igjen bruker tjenester 
fra mange leverandører, både av teknologi og andre tjenester. Hvor programvarekomponent har 
mange tekniske avhengigheter. 

<div class="columns is-centered mt-3 mb-3">
<div class="card is-centered column is-half">
    <div class="card-image">
        <figure class="image is-16by9">
        <img src="/img/bussapp.jpg" alt="Avhengigheter i bussapp (håndtegnet)">
        </figure>
    </div>
    <div class="card-content">
    En hvilken som helst app eller tjeneste i dag vil vanligvis ha mange organisatoriske og tekniske avhengigheter.
    </div>
</div>
</div>

> Hvordan håndterer du at tjenesten din avhenger av tusenvis av biblioteker, hundrevis av organisasjoner og 
> flere mennesker enn innbyggere i en typisk norsk by? Det er mildt sagt en utfordring.

Å holde den enkelte bedriften ansvarlig for hele verdikjeden er nok dessverre ren ønsketenkning. Verdikjedene er 
i dag så dype og komplekse at å kunne verifisere alle ledd vil være en ren Sysifosjobb. Enkeltbedrifter kan gjøre 
mye gjennom god sikkerhetspraksis, og særlig ved å innføre tenkning som en ["tillitsfri sikkerhetsmodell"](https://no.wikipedia.org/wiki/Tillitsl%C3%B8s_sikkerhetsmodell) vil redusere sårbarheten og skjørheten i verdikjedene. 


### Manglende prioritering som akilleshæl
Fortsatt er det mange bedrifter som ikke behandler IKT-sikkerhet som en del av virksomhetens 
risikostyring. For svært mange er IKT ikke lenger verkøty for å støtte virksomheten - det er der virksomheten er. 
Da holder det ikke å anse sikkerhet som et problem som bor i IT-avdelingen, eller som kan settes ut til 
en driftsleverandør. God sikkerhet krever prioritering og investering - og synliggjøring. Dette gjør sikkerheten
til et ledelsestema. IKT-sikkerhet må være på agendaen til daglig leder, og til styret. 

Virksomheter som anser IKT-sikkerhet som et rent teknologianliggende, vil neppe bidra til bedre samfunssikkerhet. 
God sikkerhet oppnår vi gjennom samhandling, og integrert fokus på organisasjon, prosess og teknologi. Heldigvis 
er denne erkjennelsen stadig vanligere i virksomhetene - også de mindre. 

Svaret på overskriftens spørsmål - *kan enkeltbedrifter bidra til et tryggere digitalt samfunn* - er definitivt 
"ja", men enkeltbedrifter kan ikke stå alene i stormen. Vi kommer mye lengre med samarbeid og koordinering. 

## En dytt fra oven: den digitale skjørheten er uakseptabel
Samfunnet trenger felles normer for å fungere - og særlig i omgang med betydelig kompleksitet. 
Kompleksitet er kanskje selve hovedproblemet når det gjelder pålitelighet og sikkerhet i 
digitale systemer - og uten noen felles normer for hvordan vi skal håndtere denne kompleksiteten
blir samhandling utfordrende. 

Dette har vi sakte men sikkert begynt å innse. I starten var lover og regelverk relatert til IKT-sikkerhet 
fokusert på å definere datainnbrudd som en ulovlig aktivitet. I Norge reguleres dette i 
[Straffelovens kapittel 21](https://lovdata.no/dokument/NL/lov/2005-05-20-28/KAPITTEL_2-6#KAPITTEL_2-6).
Her defineres det for eksempel straff for følgende aktiviteter: 

- Uberettighet å skaffe seg tilgang til passord eller annen tilgangsinformasjon (1 år i fengsel)
- Fremskaffe skadevare, enten man har forsett om å bruke den til straffbare handlinger eller ikke (også 1 år i fengsel)
- Skaffe seg uberettiget tilgang til et datasystem (2 år i fengsel)
- Utfører handlinger som fører til tjenestenekt (2 år i fengsel)

At disse handlingene er definert med mulige fengselsstraffer gjør neppe noe særlig for å redusere 
problemet med datakriminalitet. Men det er flere andre regelverk som begynner å ha betydning for 
hvordan enkeltvirksomheter ansvarliggjøres for egen sikkerhet: 

- GDPR: stiller krav til fornuftig behandling av personlige data, inkludert sikkerhet
- Sikkerhetsloven: stiller krav til virksomehter som behandler "skjermingsverdig informasjon"
- Normen: krav til informasjonssikkerhet i helsesektoren
- Retningslinje 104 fra Offshore Norway: inforamasjonssikkerhetskrav behandlet som obligatoriske for å 
tilfredsstille kravene i Innretningsforskriften fra Petroleumstilsynet

Forskjellen på disse regelverkene og lovene, og Straffeloven, er at de sistnevnte stiller 
tydelige krav til virksomheten om hva de skal foreta seg. Dette har typisk større effekt 
på modning av sikkerhetsarbeidet enn straffebestemmelser for enkeltpersoner - særlig med tanke 
på at de som utfører de kriminelle handlingene typisk befinner seg i utlandet og er vanskelig 
å straffeforfølge. 

### NIS 2
EU er en sterk pådriver for mer regulering som påvirker cybersikkerhet. I år trådte NIS2-direktivet 
i kraft. Dette stiller tydelige krav til leverandører "vesentlige tjenester" og kritisk infrastruktur 
om sikkerhet, med krav om rapportering til myndighetene innen 24 timer og mulige administrative bøter 
på opp til 2% av virksomhetens årsomsetning. NIS2-direktivet er foreløbig ikke en del av EØS-avtalen, 
men dette kan vi regne med blir gjennomført ut fra 
[ordlyden i Regjeringens beskrivelse fra mai 2022](https://www.stortinget.no/no/Hva-skjer-pa-Stortinget/EU-EOS-informasjon/EU-EOS-nytt/2022/eueos-nytt---25.-mai-2022/enighet-om-nytt-cybersikkerhetsdirektiv-nis-2/).

Noen høydepunkter fra regelverket: 

- Omfanget av hvilke virksomheter som er omfattet er betydelig utvidet. Direktivet oprerer med to kategorier: "essensielle virksomheter" og "viktige virksomheter". Disse inkluderer transportsektor, drikkevann og liknende (som i NIS 1), men utvider også til digital infrastruktur og skytjenester, sosiale nettverk, matproduksjon og mange flere. Direktivet innser at samfunnet i dag er digitalt avhengig av svært mange sektorer. 
- Økte krav til dokumentasjon og gjennomføring av risikovurderinger
- Konkretisering av krav til håndtering av inventar, livssyklusstyring, bruk av kryptering, tilgangsstyring, identifikasjon av sårbarheter og å oppdage hendelser. 
- Krav til kapasitet for å oppdage og håndtere dataangrep
- Krav til god praksis for sårbarhetshåndtering 

For en god oversikt over regelverksendringene, se [bloggpost fra Rapid7 her (på engelsk)](https://www.rapid7.com/blog/post/2021/04/20/overview-of-the-eus-draft-nis-2-directive/). Enisas sider om NIS-direktivet har mer 
informasjon om man ønsker en mer [formell vri](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive-new).

EU er aktiv i reguleringsarbeid, og har også andre pågående arbeider om nye regelverk. 
Et svært omfattende forslag som nå er til behandling er [Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act), 
som vil stille strenge krav til utvikling og bruk av alle typer komponenter som inneholder programvare, 
enten det er industrielle kontrollsystemer eller smarte lyspærer. 

Felles for utviklingen av lovverk, regelverk og standarder, er at fokuset på koordinering er økende.
Disse regelverkene ansvarliggjør virksomhetene i større grad, og tvinger ledelsen til å ta grep for 
at sikkerheten skal bli bedre. 

## Hvordan kan vi herde skjøre verdikjeder?
Til slutt tenkte jeg oppsummer noen tanker om hvordan vi kan gjøre samfunnet mindre skjørt. 
Når vi snakker om sikkerhet for datamaskiner, snakker vi gjerne om herding. Dette går ut på å 
redusere angriperens muligheter til å finne utnyttbare sårbarheter. Denne tankegangen tror jeg 
det er fornuftig å løfte opp til systemnivå, hvor vi forsøker å herde verdikjedene for å gjøre 
samfunnet mindre skjørt. Dataangrep vil fortsatt skje, etter at vi alle har tatt i bruk NSMs grunnprinsipper,
og etter at de første NIS 2-bøtene har skapt avisoverskrifter - men med en felles innsats, 
kan vi kanskje redusere skadevirkningene fra digitale problemer. Her er 6 ting vi kan gjøre 
sammen for å digitalt herde samfunnet.

1. Vi må samarbeide mer. Når vi kjøper inn tjenester, bør kunde og leverandør samarbeide om å skape en god tjeneste som også tar med sikkerhetsaspekter. En klassisk kravbasert struktur kan virke mot sin hensikt her, og drive leverandøren til minimumsløsninger med fokus på å holde kostnader nede eller skaffe til veie endringsordrer for å møte krav som kommer inn etter kontraktssigneringen.
2. Bedre kontrakter: vi må få livssyklusen inn i kontrakter, slik at ettersalgsstøtte inkluderer vedlikehold og oppdateringer. Kontrakten bør inneholde beskrivelse av støtte og samhandling under håndtering av hendelser. 
3. Mer åpenhet! Mange lever fortsatt i den tro at kundene vil forlate et offer for datakriminalitet like fort som rotter forlater et synkende skip. Realiteten er at åpenhet lønner seg og skaper tillit. Gjennom åpenhet kan vi lære av hverandre. Dårlig omdømme kommer ikke av at man blir offer for kriminalitet, men av dårlig håndtering av en slik hendelse - særlig det å legge lokk på, eller prøve å lyve om hva som har skjedd.
4. Vi må bygge systemer som lar seg forsvare. Når en komponent er kompromittert, må den kunne isoleres uten at hele korthuset ramler sammen. Derfor må vi tenke robusthet når vi bygger systemene våre - gjennom temaene prosess, organisasjon og teknologi. 
5. Vi må tenke digital risiko på samme måte som annen virksomhetsrisiko. De reelle konsekvensene er at tjenester ikke virker, eller at vi ikke kan stole på transaksjoner, eller at et industrisystem eksploderer eller slipper ut miljøgifter. Vi må beskrive risikoer med reelle konsekvenser om vi ønsker at virksomheten skal kunne ta eierskap til risikoene. En rent teknisk beskrivelse av en sårbarhet gir ikke denne typen forståelse. 
6. Vi må bygge sikkerhet inn i måten vi driver virksomhtene på. Det må være en del av virksomhetsstyringen, på lik linje med økonomistyring, HMS og bærekraft. Om vi delegerer eierskapet for sikkerheten til IT-avdelingen, vil vi fortsette å slite med fragmenterte verdikjeder og uhåndterbare systemrisikoer til evig tid. 



