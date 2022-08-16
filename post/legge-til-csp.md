---
tittel: Legge til CSP-header med .htaccess
beskrivelse: Med en CSP-header kan vi stoppe flere typer angrep. Her er hvordan du kan sette headeren i .htaccess på Apache.
tags: post
dato: 2022-08-16
layout: layouts/post.njk
---
For en god oversikt over CSP, se [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). 

Slik kan vi sette en header for å legge til CSP: 

```
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self' cdn.jsdelivr.net"
</IfModule>
```

Her har vi lagt til en header som kun tillater innhold fra eget
domene, samt fra CDN-tjenesten cdn.jsdeliver.net. 
Dette gjør blandt annet at forsøk på direkte injeksjon av 
JavaScript for å trigge en XSS-sårbarhet (cross-site scripting)
vil bli blokkert av nettleseren.