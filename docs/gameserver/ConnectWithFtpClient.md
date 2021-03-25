---
id: ConnectWithFtpClient
title: Wie verbinde ich mit einem FTP Client zu meinem Gameserver?
---


> Schritt 1

Lade dir einen FTP Client herunter z.b. [WinSCP](https://winscp.net/eng/download.php)

> Schritt 2

Geh ins Gameserver auf den Punkt Settings. Nun sieht ihr im Bereich "SFTP Details" die notwendigen Daten zur herstellen einer SFTP Verbindung zum Server.

*PS. Wenn ihr einen Standard Client für ftp Aktionen hinterlegt habt könnt ihr einfach auf "Launch SFTP" klicken und schon seit ihr drinnen nachdem ihr euer Kennwort eingegeben hat.*
![](https://puhscreen.de/1e2bb/kAFoRAfe47.png/raw)

> Schritt 3

Nun öffnen wir WinSCP und geben nun folgende Daten ein.

| Feld        |      Beispielwert      |
| ------------- | :-----------: |
| Übertragungsprotokoll      |   SFTP    |
| Serveradresse      | games-03.my-host.network |
| Portnummer      |   2022    |
| Benutzername |   alex.e0a44e1f    |
| Kennwort |   Kennwort vom Gamespanel    |
**Bitte durch die eigenen Daten ersetzen die in den "SFTP Details" zu finden sind!**

![](https://puhscreen.de/1e2bb/vURIPodI01.png/raw)

> Schritt 4

Wenn die korrekten Daten angegeben wurden, dann haben wir nun eine Verbindung zum FTP Server und können nun darüber hochladen / bearbeiten etc.
![](https://puhscreen.de/1e2bb/VuFeLEWI34.png/raw)