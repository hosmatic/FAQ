---
id: Webmail
title: Webmail hinzufügen
---

> Schritt 1

Gehe in deine DNS einstellungen deiner Domain und füge folgende einträge hinzu.

|Record|Name|Inhalt|Priorität|
|:----:|:----:|:------:|:----:|
|A|mail|IPv4 des Webhostes|
|A|webmail|IPv4 des Webhostes||
|MX|@|mail.DEINE.DOMAIN|1|

Wichtig ist hierbei, dass du bei dem A Record die Wolke auf grau hast.

> Schritt 2

Überprüfe, ob du im Browser Webmail abrufen kannst
![](https://screen.magic-pics.tk/FOku9/LeNahugi08.png/raw)

> Fertig!