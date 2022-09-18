---
tittel: Hvordan kan vi oppdage hacking?
beskrivelse: Hvordan kan vi oppdage at en hacker har tatt over PC-en?
tags: post
date: 2022-09-18
layout: layouts/post.njk
---
Hacking går stort sett ut på at kriminelle får kontroll 
over en brukerkonto, en datamaskin, eller maskinvare. 
Anta at en hacker har tatt kontroll over din PC. 
Hvordan kan vi oppdage dette, slik at vi kan sette en 
stopper for det?

Plan A er som regel at antivirusprogrammet vil oppdage det og 
fikse problemet for deg. I mange tilfeller fungerer dette også 
godt. Likevel finnes det en del tilfeller hvor antivirus ikke 
klarer å oppdage ting. Hva kan vi da gjøre?

Vi kan tenke gjennom hvordan en angriper får tilgang til 
maskinen. Det er mange måter dette kan skje på, men i praksis
er det et ganske lite utvalg av metoder som often benyttes. 
Hvis vi kan forstå hvordan kriminelle skaffer seg tilgang, 
kan vi planlegge hvordan vi kan oppdage datainnbruddet. 

<table class="table">
    <thead>
        <tr>
            <th>Rekognosering</th>
            <th>Armering</th>
            <th>Leveranse</th>
            <th>Utnyttelse</th>
            <th>Installasjon</th>
            <th>Kommando og kontroll</th>
            <th>Målhandlinger</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Hente info fra åpne kilder</td>
            <td>Dokument med ondsinnet makro</th>
            <td>Phishing-epost</td>
            <td>Bruker aktiverer makroer</td>
            <td>Laster ned skadevare og etablerer automatisk oppstart</td>
            <td>Kommando og kontroll til server på internett med fast frekvens</td>
            <td>Tyveri av data ved opplasting til skytjeneste</td>
        </tr>
    </tbody>
</table>

<p class="has-text-centered">En mulig fasemodell for et vellykket dataangrep</p>

Her er det flere muligheter for å kunne oppdage angrepet: 

- Phishing: spamfilter kan oppdage det, eller en bruker kan 
oppdage angrepet og rapportere det.
- Aktivering av makro: antivirusprogram kan oppdage dette, eller brukeren forstå i etterkant at dette var et angrep og rapporterer det.
- Nedlasting og opprettelse av ny autostart i Windows. Kan oppdages ved nedlasting om skadevaren er kjent (feks ved bruk av antivirus), eller ved overvåkning av nye oppstartsprogrammer.
- Kommando og kontroll: kan oppdages ved analyse av utgående nettverkstrafikk.
- Målhandlinger: kan oppdages ved analyse av utgående nettverkstrafikk. 

Jo flere metoder vi bruker for å oppdage et angrep, jo større 
sjanse har vi til å avdekke angrepet. Samtidig er det bedre å 
oppdage det tidligere i hendelseskjenden, for å redusere 
skadevirkninger. 

# Oppdage nedlasting og installasjon av skadevare
Alle nedlastede filer vil bli sjekket av antivirusprogrammet. 
Antivirus er ofte god på å oppdage vanlige typer skadevare, 
men feiler typisk om nedlastingen ikke treffer på kjente typer
skadevare, eller har typiske gjenkjennbare trekk ved skadevare. 

Mange typer skadevare forsøker å legge til automatisk oppstart 
av programmet for å kunen overleve en omstart på PC-en. En god 
strategi kan derfor være å overvåke opprettelsen av nye 
oppstartsprogrammer. Det er flere måter å gjøre dette på, 
en metode som gir nøyaktige resultater er gjennom [autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns) fra sysinternals.

Et annet aleternativ er ganske enkelt å bruke PowerShell til å
sjekke om det har blitt lagt til nye registry-oppføringer 
som kjører programmer ved oppstart, eller om programmer er
lagt til i "startup"-folderen i Windows. Dette kan vi gjøre 
med følgende PowerShell-kommando: 

```
Get-CimInstance Win32_StartupCommand | Select-Object Command, Location
```
Ved å lagre resutatene fra en kjøring, kan vi sammenlikne 
med forrige kjøring for å oppdage endringer i resultatene. 
Sammenlikningen kan gjøres med `Compare-Object`.

Dersom man velger å bruke lokal deteksjon som indikator, 
må resultatene sendes et sted slik at noen kan ta tak i 
problemet. Her kan man bruke en SIEM, eller ganske enkelt sende en e-post til den som kan gripe inn og gjøre noe med situasjonen.

## Hva gjør vi når alarmen går? 
Hva vi foretar oss når alarmen går avhenger nok av 
hvor mye det har å si at denne maskinen er hacket. Generelt
vil man nok først forsikre seg om at alarmen er en ekte alarm, 
for eksempel ved å snakke med den som bruker datamaskinen om den 
er en laptop eller arbeidsstasjon. Om man tenker at maskinen 
faktisk er kompromittert, blir neste steg typisk å samle 
bevis for å forstå hva som faktisk har skjedd, samt isolere 
den fra andre maskiner i nettet for å unngå spredning av 
skadevare. Brukerkontoer må bytte passord, og ofte vil det 
være behov for å reinstallere operativsystemet og gjenopprette 
data fra backup. 
