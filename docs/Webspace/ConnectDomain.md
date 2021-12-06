---
id: ConnectDomain
title: Domain Verbinden
---


## Wie kann ich eine Domain zu meine Website hinzufügen? 


> Schritt 1

Melde dich in Plesk an und Klicke auf "Domain hinzufügen"
![](https://screen.magic-pics.tk/FOku9/doJOROlU31.png/raw)

> Schritt 2

Gebe bei "Domainname" deine Domain an.
![](https://screen.magic-pics.tk/FOku9/lEtEpOcA24.png/raw)

> Schritt 3

Drücke auf "OK"

> Schritt 4

Geh zu deinen DNS Anbieter und setze folgende Einträge, damit man deine Website mit deiner Domain aufrufen kann.
![](https://screen.magic-pics.tk/FOku9/hasaRoHE78.png/raw)

> Schritt 5

Füge nun folgende Einträge hinzu:

|Record|Name|IPv4|
| ------------- | :-----------: | :-----------:|
|A|@| IPv4 des Webhostes|
|A|*|IPv4 des Webhostes|
|A|www| IPv4 des Webhostes|

#### oder

|Record|Name|IPv6|
|:----:|:----:|:----:|
|AAAA|@|IPv6 des Webhostes|
|AAAA|*|IPv6 des Webhostes|
|AAAA|www|IPv6 des Webhostes|


> Fertig! deine Website sollte in den nächsten Minuten erreichbar sein. Es kann allerdings bis zu 24 Stunden dauern, bis die Website über deine Domain erreichbar ist.

<br/>



<br/>

---
<br/>






<br/>



| Webhost | IPv4/v6 |
| ------------- | :-----------: |
| Webhost-01 | 37.114.32.201 / 2a0f:5707:aaef:6000::1 |
| Webhost-03 | 37.114.32.203 / 2a0f:5707:aaef:6000::3 |
| Webhost-04 | 37.114.32.204 / 2a0f:5707:aaef:6000::4 |
| Webhost-05 | 37.114.32.205 / 2a0f:5707:aaef:6000::5 |
