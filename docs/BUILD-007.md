# Build 007 – Estlcam Essentials

**Produkt:** BeBlog Maker Tools  
**Version:** 0.2.2  
**Build:** 007  
**Status:** Implementiert – lokale und CI-Validierung durch Anwender ausstehend

## Ziel

Estlcam wird nicht länger als ungeprüftes Ausgabeprofil der allgemeinen Achsskalierung behandelt. Build 007 führt ein eigenes Werkzeug **„Estlcam Achsberechnung“** ein, das die in Estlcam 11 tatsächlich verwendeten Achsparameter abbildet.

## Verifizierte Estlcam-Felder

Für jede Achse verwendet Estlcam in den CNC-Steuerungs-Grundeinstellungen unter anderem:

- **Schritte je Umdrehung**
- **Weg je Umdrehung**

Diese Feldbezeichnungen sind in einer Estlcam-11-Schnellstartdokumentation mit Screenshot der Steuerungseinstellungen sowie im aktuellen Handbuch des Estlcam Klemmenadapters dokumentiert.

## Rechenlogik

### Schritte je Umdrehung

```text
Schritte je Umdrehung = Vollschritte des Motors je Umdrehung × Microstepping
```

Beispiel: 200 Vollschritte und 1/16 Microstepping ergeben 3200 Schritte je Umdrehung.

### Weg je Umdrehung

Spindelantrieb:

```text
Weg je Umdrehung = Spindelsteigung
```

Zahnriemen:

```text
Weg je Umdrehung = Zahnteilung × Zähnezahl der Riemenscheibe
```

Beispiel GT3 / 20 Zähne: 3 mm × 20 = 60 mm je Umdrehung.

### Kontrollwert

Zusätzlich zeigt das Werkzeug Steps/mm zur Plausibilitätskontrolle:

```text
Steps/mm = Schritte je Umdrehung ÷ Weg je Umdrehung
```

Dieser Wert ist bewusst als **Kontrollwert** gekennzeichnet. Für die Estlcam-Achsgrundkonfiguration werden die beiden obigen Estlcam-Felder ausgegeben.

## Verfahrweg-Kalibrierung

Optional kann ein gemessener Verfahrfehler korrigiert werden, ohne „Schritte je Umdrehung“ zu verändern:

```text
neuer Weg je Umdrehung = aktueller Weg je Umdrehung × Istweg ÷ Sollweg
```

Beispiel:

- aktueller Weg je Umdrehung: 5,000 mm
- Sollweg: 100,000 mm
- gemessener Istweg: 98,700 mm
- neuer Wert: 4,935 mm/U

Für die Kalibrierung sollte ein möglichst langer, sicher messbarer Verfahrweg verwendet werden.

## Bedienablauf in Estlcam 11

1. `Einstellungen → CNC Steuerung → Steuerung` öffnen.
2. Werte für die gewünschte X-, Y- oder Z-Achse eintragen.
3. **„Steuerung programmieren“** anklicken.
4. Verfahrweg prüfen.
5. Falls nötig Kalibrierung in Maker Tools verwenden und den neuen Wert erneut übernehmen.

Estlcam weist ausdrücklich darauf hin, dass Änderungen im Bereich Grundeinstellungen erst nach **„Steuerung programmieren“** übernommen werden.

## Abgrenzung zur allgemeinen Achsskalierung

Die bestehende **Achsskalierung** bleibt für GRBL, grblHAL und LinuxCNC zuständig. Der bisherige Estlcam-Platzhalter wurde entfernt. Damit folgt die UI der Produktregel: technisch unterschiedliche Zielsysteme werden nicht nur optisch als gleich behandelt.

## Erhaltene Build-006-Funktionen

- Motor-&-Treiber-Kompatibilität
- Stecktreiber-Erweiterung
- Android GitHub Actions
- macOS GitHub Actions
- einmalige Versionsanzeige
- Footer „Entwickelt mit ❤️ für Maker“
- rsync-Upgrade-Standard
