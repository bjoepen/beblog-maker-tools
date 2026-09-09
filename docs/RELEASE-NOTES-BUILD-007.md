# Release Notes – BeBlog Maker Tools 0.2.2 / Build 007

## Estlcam Essentials

Build 007 ergänzt ein eigenständiges Werkzeug für die Estlcam-Achsgrundkonfiguration.

### Neu

- „Estlcam Achsberechnung“ unter CNC
- „Schritte je Umdrehung“
- „Weg je Umdrehung“
- Zahnriemen- und Spindelantrieb
- X/Y/Z-Auswahl
- Steps/mm als Kontrollwert
- optionale Verfahrweg-Kalibrierung
- konkrete Eintragungshilfe für Estlcam 11

### Bereinigt

Der alte Estlcam-Platzhalter im allgemeinen Achsskalierungswerkzeug wurde entfernt. Die allgemeine Achsskalierung ist jetzt eindeutig GRBL/grblHAL/LinuxCNC zugeordnet.

### Plattformen

- macOS
- Android

Beide bestehenden GitHub-Actions-Pipelines bleiben erhalten und erzeugen nach Merge die Build-007-Artefakte.
