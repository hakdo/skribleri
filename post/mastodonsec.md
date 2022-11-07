---
tittel: Hvordan er basissikkerheten på Mastodon?
beskrivelse: Mastodon er blitt en frihavn for folk som er skeptiske til utviklingen av Twitter etter Elon Musk tok over. Vi ser på sikkerheten til plattformen.
tags: post
date: 2022-11-07
layout: layouts/post.njk
---
# Trusselmodellen for en vanlig bruker
Mastodon er en sosiale medier-plattform. Vi tar utgangspunkt i at man er en vanlig bruker som ønsker: 

- Å publisere mikroblogger/poster som inneholder tekst, bilder, video, etc. 
- At innholdet som publiseres er ment å bli spredt og har lave eller ingen krav til konfidensialitet

Kontoer på sosiale medier kan være attraktive mål for trusselaktører som ønsker å bruke disse til å spre ondsinnet innhold, som for eksempel svindelinnhold eller utgi seg for å være eieren av kontoen. 
For brukere som benytter sosiale medier til å kommunisere privat innhold via direktemeldlinger, kan også tilgang til slik konfidensiell informasjon være et mål for trusselaktøren. 

Forventede trusselscenarier kan være: 

1. Phishing/sosial manipulasjon for å stjele påloggingsinformasjon som passord og evt. OTP-koder
2. Direkteangrep via automatisert passordgjetting
3. Utnyttelse av sårbarheter i plattformen for å stjele informasjonskapser e.l. 
4. Gjenbruk av passord fra andre tjenester som er blitt kompromitterte 
5. Innsideaktør fra plattformtilbyder eller server-administrator som skaffer seg tilgang til private meldinger

I tillegg til dette, ønsker man ikke at passordet skal bli kjent om serveren blir hacket, selv om det ofte betyr at alt innhold er tilgjengeliggjort for angriperen.
Årsaken til det er at folk gjenbruker passord på tvers av tjenester (dårlig idé!), og at tilgang til passord gir angriperen mulighet for å stjele identiteten til 
brukeren på plattformen på en enklere måte.

De fleste brukere vil være opptatt av at scenario 1-4 ikke skjer. Scenario 4) kan være relevant, men her er ikke plattformene bygget for å være sikre kommunikasjonsløsninger. Man bør med andre ord velge andre løsninger for konfidensiell kommunikasjon. [Signal](https://signal.org/nb/) er et godt valg.

# Beskyttelse av brukerkonto mot angrep
Det finnes mye god praksis for å beskytte brukerkontoer mot innbrudd. Tilgangskontroll består både av autentisering (hver mer du) og autorisasjon (hva har du lov til). Vi ser her først og fremst på autentisering.
OWASP har laget en nyttig [sjekkliste for god autentiseringspraksis](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) som kan brukes til å vurdere en applikasjon. Vi vil ikke gå gjennom
alle disse, men et lite utvalg: 

- Bruk kun sterke passord som er vanskelige å gjette/knekke
- Etabler en sikker mekanisme for å resette passord om det er glemt
- Man skal ikke lekke sensitiv informasjon i feilmeldinger, som for eksempel kan gjøre det mulige å identifisere brukerkontoer
- Direkteangrep mot passord skal ikke være mulig, feks ved ratebegrensning, midlertidig utestenging e.l. Tofaktorautentisering er også effektivt mot slike angrep.
- Tjenesten bør nekte bruk av passord som er inkluderte i kjente lekkasjer/passordlister
- Tjeneste bør logge alle feilede innloggingsforsøk

Passordfrie innloggingsløsninger og maskinvarebaserte tokens (FIDO) er gode løsninger, men som vi ikke i dag kan forvente rulles ut/påkreves brukt av alle brukere.

## Passordpolicy
La oss teste passord-policy ved å registrere en ny konto. Vi bruker den mest populære norske Mastodon-serveren, [snabelen.no](https://snabelen.no).
Vi forsøker å lage oss en brukerkonto med brukernavnet *passord@snabelen.no* og passordet *password*. 

Registreringsprosessen krever at du verifiserer en e-postadresse. Dessverre godtar den at man bruker "bruk-og-kast-adresser", så det fungerer ikke særlig til brukerverifikasjon.

Passordet *password* ble også godtatt uten videre. Det er dermed ikke en sterk passordpolicy satt opp for systemet. 

<div class="notification is-danger">
<p class="title">Passordpolicy: svak</p>
<p>Mastodon-serveren snabelen.no tillater svært svake passord. Brukere bør likevel velge sterke passord og bruke en passord-manager. </p>
</div>

## Gjenoppretting av passord
Ved å trykke resett passord, får man først en melding om at du vil få en e-post dersom brukerkontoen eksisterer. Dette er bra. Når eposten kommer har den en reset-lenke med et token som virker å være tilfeldig og vanskelig å gjette: 

*https://snabelen.no/auth/password/edit?reset_password_token=n27cd2FyQ-JQULshL1ok*

Når du så oppdaterer passordet får du også tilsendt en epost med beskjed om at dette er gjort. Det er veldig bra! 

Når vi så prøver "glemt passord" igjen, får vi en ny lenke, med et nytt token: 

*https://snabelen.no/auth/password/edit?reset_password_token=wvzD8mgSwvzeFv4c2Dv7*

Om vi prøver å gjenbruke det gamle tokenet, får vi beskjed om at tokenet er ugyldig eller utløpt. 

<div class="notification is-success">
<p class="title">Gjenopprettingsrutine: sterk</p>
<p>Mastodon-serveren følger god praksis for gjenopprettingslinker for glemt passord.</p>
</div>
Vi har ikke gjort noen inngående sjekk av sikkerheten her, men funksjonaliteten er god og ikke enkel å utnytte for en trusselaktør.

## Feilmeldinger
Ingen videre tester gjort, men ut fra meldingene som er kommet under testing av passord-reset, ser det ut som det er god praksis på dette!

## Direkteangrep mot passord
Her finnes det mange mulige angrepsmetoder. Det er åpenbart at tjenesten ikke 
beskytter mot gjenbruk av passord, i og med at *password* er et godkjent passord. 
Vi tester om vi kan gjøre et enkelt direkteangrep ved å forsøke å logge inn 15 ganger på rad på svært kort tid, hvor passord 1-14 er feil, og passord 15 er riktig. Planen er å bruke OWASP ZAP som verktøy for å gjøre angrepet.

Vi ser først på en enkel innlogging i nettleseren. Den gjør en POST-forespørsel til endepunktet */sign_in*. Dataene som sende inkluderer

- authenticity_token
- user[email]
- user[password]

Tokenet som sendes med er et engangstoken som genreres når du går inn på 
innloggingssiden. Dermed kan man ikke gjenbruke dette tokenet i mange forepørsler. 
Dette begrenser en del verktøy fra å forsøke å logge inn mange ganger på rad, da 
verktøyene ofte ikke har støtte for å hente nye tokens. Dette gjelder også ZAP. Er vi da trygge? Ikke helt, vi kan jo skrive vårt eget angrepsverktøy.

Innloggingsskjemaet har et skjult input-felt for et slikt token, som settes fra 
serveren når nettsiden oppdateres.

![skjermdump av innlogging med dev tools som viser behov for token](/img/authtoken_signin.png).

Angrepsmetoden vår må altså se slik ut: 

1. Gå til https://snabelen.no/auth/sign_in og ekstraher authentication_token fra skjemaet
2. Gjør en POST_forespørsel med strukturen over
3. Hvis innloggingen ikke var vellykket, gjenta med neste passord

Vi tester statuskoder først. Ved feilet innlogging får vi statuskode 200 OK. Ved riktig innlogging får vi statuskode 302 Found, som betyr at du blir omdirigert etter vellykket innlogging. Først feilet denne tilnærmingen, men når vi satte en session-cookie for alle innloggingsforsøkene fungerete det. Med 15 innlogginsforsøk fungerer det fint, men om vi gjentar angrepet flere ganger 
får vi etter hvert responskode 429 (Too many requests). Mastodon har altså 
implementert begrensning i antall forsøk man kan gjøre på å logge inn med feil passord.

<div class="notification is-success">
<p class="title">Ratebegrensning: OK</p>
<p>Mastodon har implementert begrensning i antall innloggingsforsøk på rad fra 
samme bruker.</p>
</div>

*Oppvask*: Brukerkontoen i denne testen er nå slettet. 

# Oppsummert
1. Sikkerheten er rimelig bra. I tillegg til det vi har sett på, brukes for eksempel content security policy (CSP) og subresource integrity (SRI) for å hindre injeksjon av skadelige script i frontend. 
2. Passordsikkerheten er god - med unntak av en viktig ting: styrken på passordene som brukes. Her kan du som bruker velge å bruke et sterkt passord - og det bør du! Det er likevel bedre om applikasjonen ikke godtar veldig svake passord. 
3. Støtte for 2FA/MFA. Mastodon støtter 2FA, men gir ikke informasjon om dette ved registrering av brukerkonto. Sørg for å skru det på!
4. Husk at meldinger på Mastodon ikke er krypterte, og at administratoren har teknisk sett mulighet til å se alt du skriver. Bruk en annen meldingstjeneste for konfidensielle meldinger! Dette gjelder forøvrig de fleste plattformer for sosiale medier. 

