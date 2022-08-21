---
tittel: Publisere Eleventy-sider via Azure DevOps og Pipelines
beskrivelse: Hvordan publisere til et webhotell viaSSH ved å bruke Azure DevOps
tags: post
date: 2022-08-16
layout: layouts/post.njk
---
Jeg har lenge eid et domene kjøpt på one.com - hvor jeg nå 
har publisert disse korte postene. Hensikten med å sette opp
denne siden var først og fremst for å teste publisering til 
et webhotell fra en statisk sidegenerator. Vi har satt opp dette 
via Azure Pipelines, som publiserer til siden basert på 
et Github-repo. Mekanismen krever altså: 

- Eleventy: en statisk sidegenerator skrevet i NodeJs
- Github-repo
- Azure DevOps/Azure Pipelines
- SSH-tilgang til webhotellet

Det første vi gjorde var å sette opp en enkel 
[Eleventy](https://www.11ty.dev/)-side. Deretter pushet vi 
koden til [Github.com](https://github.com/hakdo/skribleri).

Vi opprettet så et prosjekt i Azure DevOps. Der kunne vi koble 
til repoet vårt ved å følge en veiviser. Vi lager til slutt 
en Pipeline definert med en [YAML-fil](https://raw.githubusercontent.com/hakdo/skribleri/main/azure-pipelines.yml).

11ty bygger statiske filer for web. Disse publiserer vi ved å 
kopiere til webhotellet med en SSH-tunnel. Det er en ferdig 
*task* vi kan bruke i Azure Pipelines for dette, 
[dokumentert her](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/copy-files-over-ssh?view=azure-devops). 

For å kunne koble til med SSH må vi lage en service-kobling i 
Azure DevOps-prosjektet. Vi går da inn i prosjektinnstillingene, 
og legger til "service connection". 

Når alt dette er satt opp, kan vi publisere til bloggen ganske 
enkelt ved å oppdatere "main"-grenen på Github. 

