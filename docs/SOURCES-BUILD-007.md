# Quellen – Build 007 / Estlcam Essentials

## Primäre / produktnahe Quellen

### Estlcam – Steuerungseinstellungen

https://www.estlcam.de/ll.php

Relevanz:
- Grundeinstellungen der CNC-Steuerung
- Änderungen an Grundeinstellungen müssen mit **„Steuerung programmieren“** übernommen werden.

### Estlcam Klemmenadapter M – Benutzerhandbuch

https://www.rocketronics.de/download/datasheet/estlcam/Estlcam_KA_M_RevA.pdf

Relevanz:
- nennt für die Achsen ausdrücklich **Schritte / Umdrehung** und **Weg je Umdrehung** als Grundparameter
- bestätigt die Notwendigkeit von „Steuerung programmieren“ nach Änderungen.

### Sorotec – Schnellstart Estlcam

https://www.upload.sorotec.de/doku/manuals/Schnellstart_Estlcam.pdf

Relevanz:
- Screenshot einer Estlcam-11-Steuerungskonfiguration
- sichtbare Felder **„Schritte je Umdrehung“** und **„Weg je Umdrehung“** für X/Y/Z.

## Ergänzende Plausibilitätsquelle

### Estlcam: Weg und Schritte je Umdrehung

https://www.youtube.com/watch?v=16--MsPnvZo

Relevanz:
- erläutert die praktische Herleitung der beiden Estlcam-Parameter.

## Implementierungsregel

Build 007 übernimmt nur die fachlich belegbaren Estlcam-Achsparameter. Maximalvorschub, Trägheit, Beschleunigungsweg und weitere Steuerungsparameter sind ausdrücklich **nicht** Teil dieser Berechnung und werden nicht aus generischen Annahmen abgeleitet.
