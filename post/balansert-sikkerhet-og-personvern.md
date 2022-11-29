---
tittel: Hvordan kan vi balansere sikkerhet og personvern?
beskrivelse: Sikkerhetsbehov blir ofte prioritert så høyt at andre behov ikke kommer til sin rett. Men trenger det å være slik for at vi skal oppnå akseptabel risiko?
tags: 
 - post
 - front
date: 2022-11-29
bilde: /img/kontorams.jpg
layout: layouts/post.njk
---
Innen informasjonssikkerhet er vi ofte blinde for negative bivirkninger av medisinen vi 
deler ut. Et typisk eksempel er overvåkning av IT-systemer for å oppdage dataangrep, 
men hvor overvåkningen er så inngripende at den går utover personvernet på helt urimelige 
måter. 

Av sikkerhetshensyn er virksomheter et helt legitimt behov for å logge en del 
sikkerhetskritiske hendelser, og kunne reagere på disse. De har også behov for 
å kunne sjekke om sikkerheten på en telefon eller datamaskin er god nok til å 
tillate tilkobling til bedriftens ressurser, for eksempel en VPN-tjeneste. 
Dette er stort sett forholdsmessig og innenfor det man kan forvente på 
en arbeidsplass. 

<div class="columns is-centered">
    <div class="column is-half">
    <img src="/img/kontorams.jpg" alt="Utsikt ut av vinduet fra lobby i kontorbygg">
    <p class="has-text-centered">Sikkerhet krever innsyn og overvåkning - men er vi gode nok til å balansere 
    sikkerhetsbehovene med personvern og åpenhetsprinsipper?</p>
    </div>
</div>

## Eksempler på overvåkningspraksiser som kan true personvernet
Typiske overvåkningspraksiser som kan true personvernet er følgende: 

- Systemer for deteksjon av innsidetrusler
- Svært detaljert logging på sluttbrukeres maskiner
- Bruk av maskinlæring og AI til å bygge personprofiler

Microsoft lager produkter som brukes i de fleste bedrifter, og om man kjøper 
lisenser for produktene beregnet på store selskaper (E5), følger det med mye
sikkerhetsfunksjonalitet. Et av disse produktene heter [Purview](https://learn.microsoft.com/en-us/purview/purview). 
Dette er programvare laget for å hindre misbruk av sensitive data og kombinerer 
"Compliance"-funksjonalitet med "Data loss protection"-funksjoner. Mye av funksjonaliteten
her dreier seg om merking av data med merkelapper som "konfidensielt" eller "åpen", og
automatisk sikring av disse dataene med tilgangskontroll og liknende. Dette er stort sett
uproblematisk. Systemet har også en modul for 
[Insider Risk Management](https://learn.microsoft.com/en-us/microsoft-365/compliance/insider-risk-management?view=o365-worldwide). Dette produktet gir deg mulighet til 
å se detaljert hva en bruker har foretatt seg i systemet, hvilke filer som er. 
Man kan også konfigurere systemet til å foreta automatisk detaljert overvåkning
når en risikofaktor oppdages, slik som å skru på keylogging og opptak av bevegelser 
med musepekeren. Det er riktignok kontroller for autorisasjon for bruk av slik 
funksjonalitet, men dette er ganske inngripende kontroller - bare det at muligheten 
eksisterer kan sies å utfordre tilliten mellom ansatte og virksomheten de jobber for.

### Altfor detaljert logging
Operativsystemer og applikasjoner har mulighet for å logge brukernes handlinger. 
Her er det mulig for en organisasjon å skru på svært detaljert logging på 
operativsystem-nivå. Dette gjør det enklere å oppdage uønsket aktivitet, men 
samtidig gjør det misbruk og overvåkning også mulig. Svært detaljert logging
kan være helt greit på en server som brukes til kontrollsystemet for strømnettet, 
mens man bør la være på laptop'en til den enkelte ansatte. Noen eksempler på
logging som er veldig nyttig for sikkerhet, men som også kan virke negativt 
inn på personvernet inkluderer: 

- Alle filoperasjoner
- Brekke TLS for å inspisere trafikkdata: vanlig praksis for sikkerhet, men 
gjør også at kredittkortnummer og chat-beskjeder kan sees av selskapet om ikke ende-til-ende-kryptert.
- Alle prosesser på PC-en (kan i teorien overvåke hva du gjør gjennom dagen)
- Logge alle websider brukeren besøker via proxy-server

I tillegg til disse eksemplene har mange organisasjoner kommunikasjonsløsninger som 
Teams eller Zoom, som også tilbyr detaljert logging av hva brukerne foretar seg. 
Zoom tilbyr for eksempel funksjonalitet for å [avlytte en samtale](https://support.zoom.us/hc/en-us/articles/4406598849933-Using-call-monitoring) uten at brukerne 
i møtet er klar over dette. Tidligere nevnte Purview har også funksjonalitet for 
å overvåke Teams, inkludert å lage alerts om spesielle ord etc nevnes i en chat, 
eller å søke i innhold på tvers av alle samtaler i Teams - inkludert 1:1-samtaler. 

### UEBA: profilering og Judge Dredd på kontoret
UEBA står for "User Entity Behavioral Analytics", og går ganske enkelt ut 
på å samle enorme mengder data om brukernes aktiviteter, og analysere dette datasettet
for å finne mistenkelig oppførsel i beste Judge Dredd-stil. Dette kan være 
effektivt for å oppdage om en bruker har fått sin konto hacket, og at kontoen blir 
misbrukt til ondskapsfulle hackeraktiviteter. Samtidig er jo dette basert på 
overvåkning og profilering, og det har jo også sine problematiske sider. 

Dette kan implementeres på forskjellige måter, og noen er nok mer invaderende enn andre. 
Der enkelte produkter vil forsøke å detekere høyst uvanlige hendelser, som samtidig kan 
knyttes til typiske angrepsscenarier, vil andre være mindre målrettede. 

Kan vi for eksempel
korrelere pauser i tastaturtrykking med data om kaffeforbruk og dobesøk til å predikere 
alkoholmisbruk, som igjen øker risikoen for innsidetrusler? Det er nok ingen(?) produkter
som markedsfører seg slik i dag, men mulighetene til å gjøre slike ting eksisterer. 

## Hva så?
Alle metodene diskutert over er utvilsomt nyttige for sikkerhet, men bare fordi 
noe kan gi bedre sikkerhet, er det ikke sikkert det er fornuftig eller lovlig 
å bruke det. Vi vil for eksempel få mindre lommetyverier om vi innfører 
portforbud etter klokken 17 og før 7 om morgenen hver dag, og setter opp 
flere overvåkningskameraer per kvadratmeter enn de har i Kina, men de fleste 
vil nok ikke synes dette er særlig fornuftig - eller forholdsmessig. 

Denne vurderingen 
av forholdsmessighet er det nok mange virksomheter og sikkerhetsorganisasjoner som 
er for dårlige på. I tillegg er sikkerhet ofte som fagfelt inntyllet i hemmlighold, 
gjerne med den begrunnelse at alt som har med IT-sikkerhet å gjøre må være hemmelig 
for at ikke hackere skal utnytte det. Det er langt fra alt som trenger å være 
hemmelig, og her må man også balansere behovet for åpenhet som tillitspremiss til egne 
ansatte, med det reelle behovet for å holde særlig sensitiv informasjon hemmelig. 

Så til meg selv og andre sikkerhetsfolk: vi må bli flinkere til å tenke gjennom 
forholdsmessigheten i sikkerhetsstrategiene våre - og sørge for å involvere 
de riktige instansene i disse vurderingene, slik som personvernombud, arbeidsmiljøutvalg, verneombud og tillitsvalgte. På den måten kan vi oppnå et mer balansert arbeidsliv som 
ivaretar behovet for personvern og tillit på den ene siden, med god evne til å 
oppdage og håndtere datainnbrudd og sikkerhetshendelser på den andre siden. 
