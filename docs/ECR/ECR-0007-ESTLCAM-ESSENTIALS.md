# ECR-0007 – Estlcam Essentials

## Entscheidung

Estlcam wird als eigenständiges Werkzeug umgesetzt und nicht länger als bloßes Ausgabeprofil der allgemeinen Achsskalierung behandelt.

## Begründung

Estlcam verwendet für die Achsgrundkonfiguration die Parameter **„Schritte je Umdrehung“** und **„Weg je Umdrehung“**. GRBL/grblHAL und LinuxCNC arbeiten in der vorhandenen Maker-Tools-Oberfläche dagegen primär mit Steps/mm bzw. Skalierungswerten. Eine gemeinsame Oberfläche würde technisch unterschiedliche Bedienmodelle unnötig vermischen.

## Umfang Build 007

- Schritte je Umdrehung
- Weg je Umdrehung
- Zahnriemen und Spindel
- X/Y/Z
- Kontrollwert Steps/mm
- Verfahrweg-Kalibrierung
- Estlcam-Eingabehilfe
- Hinweis „Steuerung programmieren“

## Nicht enthalten

- automatische Wahl von Maximalvorschub
- Trägheit
- Beschleunigungsweg
- Startvorschub
- Endstufen-/Pinbelegung

Diese Parameter hängen stärker von Maschine und Steuerung ab und werden nicht aus unzureichenden Annahmen erzeugt.
