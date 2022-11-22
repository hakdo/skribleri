---
tittel: Blokkere utgående trafikk til gitt domene eller ip på Windows
beskrivelse: Hvordan blokkere utgående trafikk til et gitt domene eller IP på en Windows-maskin - kan brukes til å stoppe C2-kommunikasjon fra skadevare
tags: 
 - post
date: 2022-08-17
layout: layouts/post.njk
---
Skadevare har ofte behov for å kommunisere med infrastruktur på 
internett for å fungere. For sikkerhet kan det være at du trenger å  blokkere slik trafikk. 

Tanken her er at du har tilgang til å kjøre PowerShell-kommandoer som administrator og skal stoppe pågående infiltrasjon. Begge metodene vist under krever at du har 
et administratorvindu åpent.

## Blokkere domener med hosts-fila
Windows har en hosts-fil på `c:\Windows\System32\Drivers\etc\hosts`. Denne kan brukes som et 
lokalt "DNS-synkehull" for å stoppe trafikk til et gitt domene 
hvor trafikken bruker DNS-oppslag. Man legger til en linje per 
ip-adresse man ønsker å assosiere med et domene. For å unngå 
rapportering til C2-infrastruktur kan vi da legge inn at 
domenet er knyttet til localhost: 

For å legge til en blokkering til et domene i hosts-fila kan vi

```
echo "127.0.0.1 www.eksempel.no" >> C:\Windows\System32\drivers\etc\hosts
```

Resultatet er følgende på siste linje i hosts-fila:

```
127.0.0.1 www.eksempel.no
```

Merk at noen programmer har intern cache (mellomlager) som 
inneholder ip-addressen etter at første DNS-oppslag er gjort. 
For eksempel om man legger inn en blokk av dagbladet.no i 
hosts-fila, men har allerede besøkt dagbladet.no i nettleseren, 
vil nettleseren fortsatt finne riktig side i en periode. 

## Blokkere utgående trafikk til gitt ip-adresse via brannmur
For å blokkere trafikk direkte til en ip-adresse kan vi bruke 
Windows-brannmuren. Du finner [dokumentasjon fra Microsoft](https://docs.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule?view=windowsserver2022-ps) for hvordan du bruker New-NetFirewallRule. 

Her er hvordan man blokkerer utgående trafikk til en gitt ip-adresse: 

```
New-NetFirewallrule -DisplayName <Navn-på-regel> -RemoteAdress <ip-du-vil-blokkere> -RemotePort Any -Direction Outbound
```
Om du skal blokke flere ip-addresser tar du de med i kommandoen over, separert av komma. 
For å blokkere et domene, sørg for at du får med adresser med både versjon 6 og versjon 4 (AA + AAA-records i DNS). Vi kan bruke `nslookup` for å finne ip-addressene for et gitt domene. 

For å fjerne regelen igjen kan du bruke

```
Remove-NetFirewallrule -DisplayName <Navn-på-regel>
```