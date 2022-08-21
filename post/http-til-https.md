---
tittel: Sette opp http til https med .htaccess
beskrivelse: Hvordan sette opp .htaccess for https-videredirigering enkelt
tags: post
date: 2022-08-16
layout: layouts/post.njk
---

For å sette opp omdirigering til https med Apache, kan du bruke 
en `.htaccess`-fil. Du må da skrive om alle `http`-URL'er til 
`https`. Dette kan gjøre slik: 

```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
Da vil alle besøk bli omdirigert til https.