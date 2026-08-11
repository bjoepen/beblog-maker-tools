# Build 006 – Motor & Treiber

**Version:** 0.2.1  
**Status:** umgesetzt  
**Zielplattformen:** macOS und Android

## Ziel

Build 006 erweitert BeBlog Maker Tools um das neue CNC-Werkzeug **„Motor & Treiber“** und übernimmt zugleich die freigegebenen UI- und Workflow-Verbesserungen nach dem erfolgreichen Android-Meilenstein aus Build 005.

## Neu: Motor & Treiber

Das Werkzeug beantwortet die Werkstattfrage: **Passt der eingestellte Treiberstrom zum Nennstrom des Schrittmotors?**

Eingaben:
- Motor-Nennstrom pro Phase
- Treiberprofil oder eigener Treiber
- kleinster und größter Treiberstrom
- RMS- oder Peak-Angabe
- tatsächlich gewählte Stromstufe

Ausgaben:
- normalisierter RMS-Wert
- empfohlener Zielwert
- sicherer Strombereich
- Auslastung bezogen auf den Motor-Nennstrom
- verständliche Kompatibilitätsbewertung

### Bewertungsstufen

- **PASS** – passende, sichere Einstellung nahe am Motor-Nennstrom.
- **WARN** – funktioniert grundsätzlich, ist aber nicht optimal, z. B. deutliche Unterbestromung oder eine gewählte Stufe oberhalb des Motor-Nennstroms, obwohl eine niedrigere sichere Einstellung möglich ist.
- **FAIL** – schon der kleinste einstellbare Treiberstrom liegt über dem Motor-Nennstrom; im angegebenen Bereich existiert damit keine sichere Stromstufe.

Die PASS/WARN/FAIL-Logik ist eine praxisorientierte BeBlog-Bewertung und keine normative elektrische Freigabe.

## Verifizierte Treiberprofile

Build 006 enthält Herstellerbereiche für folgende STEPPERONLINE-Profile:

- DM320T
- DM332T
- DM422T
- DM420Y
- DM542T
- DM542Y
- DM556T
- DM556Y

Die Profile hinterlegen RMS-/Peak-Strombereiche und Versorgungsspannungsbereiche. Die Werte stammen aus den aktuellen STEPPERONLINE-Unterlagen; für andere oder abweichende Hardware bleibt das Datenblatt des konkreten Treibers maßgeblich.

## UI-Refinement

Genehmigte Bereinigung der Produktoberfläche:

- Versionsinformation nur noch **einmal** sichtbar: `Version 0.2.1` im Bereich „Über BeBlog Maker Tools“.
- Buildnummern werden nicht mehr mehrfach in Sidebar und Footer wiederholt.
- neuer ruhiger Footer:

> **Entwickelt mit ❤️ für Maker**

## Android-Validierung Build 005

Der Android-Meilenstein wurde am 11.08.2026 praktisch bestätigt:

- [x] APK über GitHub Actions erzeugt
- [x] Installation auf realem Android-Gerät
- [x] App startet fehlerfrei
- [x] Werkzeuge bedienbar
- [x] Tablet-Layout visuell geprüft
- [x] Responsive Navigation funktioniert

Build 005 ist damit **GO / praktisch validiert**.

## Definition of Done

- [x] neues Werkzeug in Tool Registry integriert
- [x] mobile und Desktop-Navigation integriert
- [x] Rechenlogik vom UI getrennt
- [x] Unit-Tests für PASS/WARN/FAIL und Peak/RMS-Konvertierung ergänzt
- [x] Herstellerprofile klar als solche gekennzeichnet
- [x] UI-Version bereinigt
- [x] Footer umgesetzt
- [x] rsync-Upgrade-Workflow mit verbindlichen lokalen Pfaden dokumentiert
- [x] Build-005-Android-Validierung dokumentiert
- [x] Produktversion auf 0.2.1 angehoben
