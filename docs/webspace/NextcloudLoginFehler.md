---
id: NextcloudLoginFehler
title: Nextcloud Login Fehler beheben
---

> Schritt 1

Erstelle einen Ordner namens **phpsessions** auserhalb des Nextcloud Ordner

> Schritt 2

Gehe dann bei deiner Nextcloud in Plesk auf **PHP-Einstellungen**

> Schritt 3

Suche den Parameter **session.save_path** und gebe folgendes ein und klicke anschließen auf OK:
/var/www/vhosts/HAUPTDOMAIN/phpsessions

> Schritt 4

Nun warte ein paar Minuten und dann sollte der Nextcloud Login funktionieren.

> Fertig!
