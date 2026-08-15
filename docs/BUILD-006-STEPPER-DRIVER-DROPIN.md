# Build 006 – Stepper Driver Library Extension

**Produktversion:** 0.2.1  
**Typ:** Drop-in-Erweiterung für Build 006

## Ziel

Das Werkzeug **Motor & Treiber** soll nicht nur externe Digitaltreiber abdecken, sondern auch die in Hobby-CNCs und 3D-Druckern verbreiteten Stecktreiber.

## Neue Referenzprofile

### DRV8825 – Pololu High Current Carrier

- Referenz: TI DRV8825 + Pololu Carrier
- Versorgung: 8,2–45 V
- Pololu nennt ca. 1,5 A/Phase ohne Kühlkörper oder Zwangsluft
- bis 2,2 A/Spule bei ausreichender zusätzlicher Kühlung
- VREF-Hilfe verfügbar, da Pololu die Sense-Widerstände des konkreten Carriers dokumentiert

### A4988 – Pololu Standard Carrier

- Referenz: Allegro A4988 + Pololu Standard Carrier
- Versorgung: 8–35 V
- ca. 1,0 A/Phase ohne Zusatzkühlung
- bis 2,0 A/Spule nur mit ausreichender zusätzlicher Kühlung
- VREF-Hilfe für den dokumentierten 0,05-Ω-Carrier

### A4988 – Pololu Black Edition

- ca. 1,2 A/Phase ohne Zusatzkühlung
- Pololu berichtet ca. 1,4 A/Phase mit Luftstrom in eigenen Tests
- aktueller Carrier: 0,068-Ω-Sense-Widerstände
- VREF-Hilfe berücksichtigt diese konkrete Carrier-Version

### TMC2208 / TMC2209

Die TMC-Profile sind bewusst als **ADI/TRINAMIC-Referenz** gekennzeichnet. StepStick-Module unterschiedlicher Hersteller können bei Kühlung, Sense-Widerständen und Stromkonfiguration deutlich abweichen.

- TMC2208-EVAL: 1,35 A RMS / 2 A Peak laut ADI
- TMC2209-EVAL: 1,7 A RMS / 2,4 A Peak laut ADI

Für generische TMC-StepSticks wird deshalb keine pauschale VREF-Berechnung behauptet.

## Kühlung

Für Stecktreiber kann die Betriebsbedingung gewählt werden:

- **Keine** – verifizierte Grenze ohne Zusatzkühlung, sofern für den Carrier dokumentiert
- **Kühlkörper** – konservativ; ohne belastbare Herstellerangabe wird der Strom nicht automatisch angehoben
- **Aktiv** – nur dort höherer Referenzwert, wo der Carrier-Hersteller eine belastbare Angabe bzw. einen eigenen Test nennt

Damit vermeidet die App, den maximalen Chipstrom fälschlich als sicheren Dauerstrom eines beliebigen StepStick-Moduls auszugeben.

## Bewertung

PASS/WARN/FAIL bleibt unverändert:

- **PASS** – sinnvoller Strombereich nahe dem Motor-Nennstrom
- **WARN** – technisch betreibbar, aber reduziert oder nicht empfehlenswert
- **FAIL** – keine sichere Einstellung im angegebenen Bereich

Bei Stecktreibern wird zusätzlich die thermisch nutzbare Carrier-Grenze berücksichtigt.

## Sicherheitsprinzip

Ein IC-Datenblatt beschreibt nicht automatisch die thermische Dauerstromfähigkeit eines kleinen Carrier-Boards. Clone-Boards können andere Sense-Widerstände, Kupferflächen und Bauteile besitzen. Das konkrete Board-Datenblatt hat immer Vorrang.
