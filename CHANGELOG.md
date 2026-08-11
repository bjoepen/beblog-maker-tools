# Changelog

## [0.2.1] – Build 006 – Motor & Treiber

### Added
- neues CNC-Werkzeug „Motor & Treiber“
- PASS/WARN/FAIL-Kompatibilitätsbewertung
- RMS-/Peak-Normalisierung und Herstellerprofile für ausgewählte STEPPERONLINE-DM-Treiber
- Unit-Tests und Build-006-Dokumentation

### Changed
- Versionsangabe nur noch einmal in der Oberfläche
- Footer auf „Entwickelt mit ❤️ für Maker“ umgestellt
- rsync als verbindlicher Upgrade-Standard dokumentiert
- Build 005 nach erfolgreichem Android-/Tablet-Praxistest als GO dokumentiert

## [0.2.0] – Build 005 – Android Foundation

### Added

- Android als zweite Zielplattform
- responsive mobile App-Shell mit Werkzeug-Drawer
- Touch- und Safe-Area-Optimierungen
- Android-Paketkennung `de.beblog.makertools`
- Tauri Mobile Entry Point
- GitHub-Actions-Workflow für ein installierbares Debug-APK
- Android-/CI-/Git-Dokumentation für Build 005

### Changed

- Produktversion auf 0.2.0 angehoben
- App-Beschreibung auf macOS und Android erweitert

### Preserved

- alle neun Rechner und deren fachliche Logik aus Build 004
- Desktop-Sidebar und BeBlog-Branding

## [0.1.2] – Build 004 – Workshop Essentials

### Added

- neue Kategorie `Werkstatt`
- Schrauben- & Schlüsselweiten-Finder für metrische Größen M3–M16
- ISO-4014/4017-Sechskantwerte und ISO-4762-Innensechskantwerte
- Gewinde-/Bohrungs-Nachschlagewerk mit Kernloch sowie feinen, normalen und groben Durchgangsbohrungen
- Lochkreisrechner mit Startwinkel, Mittelpunktversatz und vollständiger X/Y-Koordinatentabelle
- Unit Tests für Referenzdaten und Lochkreisgeometrie
- verbindlicher Git-Workflow für Build 004

### Changed

- Produktversion auf 0.1.2 angehoben
- Tool Registry und Sidebar um `Werkstatt` erweitert


Alle relevanten Änderungen an BeBlog Maker Tools werden hier dokumentiert.

## [0.1.1] – Build 003 – 3D Printing Essentials

### Added

- neue Kategorie `3D-Druck`
- Volumenstrom-Rechner mit Limitbewertung und Rückrechnung der maximalen Geschwindigkeit
- Filament-&-Kosten-Rechner mit Länge-/Gewicht-Umrechnung und editierbaren Materialdichten
- Maßkorrektur für X/Y/Z
- Unit Tests für alle drei neuen Berechnungsmodule
- verbindlicher, detaillierter Git-Workflow für Build 003
- ECR-0003 und Upgrade-Dokumentation

### Changed

- Produktversion auf 0.1.1 angehoben
- Sidebar um `3D-Druck` erweitert
- About-Text um 3D-Druck ergänzt

### Preserved

- Build-002-UI-Refinement
- offizielle BeBlog-SVG aus Build 002.1
- bestehende CNC- und Antriebsrechner

## [0.1.0] – Build 002.1 – Official Blog Logo Alignment

### Changed

- bisherige stilisierte Markenmarke durch die originale SVG-Marke aus dem Blog ersetzt
- BrandMark-Komponente auf das offizielle SVG unter `src/assets/beblog-mark.svg` umgestellt
- Darstellung des Logos damit 1:1 an den BeBlog-Auftritt angeglichen

### Preserved

- App-Struktur, Rechenlogik und UI-Refinement aus Build 002 unverändert beibehalten

## [0.1.0] – Build 002 – UI Refinement

### Changed

- App-Shell an die freigegebene Gestaltung von Bernds Maker Blog angepasst
- warme helle Flächen und BeBlog-Blau als gezielten Akzent eingeführt
- Sidebar vollständig überarbeitet
- stilisiertes `b` als kompakte Markenmarke integriert
- technische SVG-Icons für Navigation, Eingaben und Ergebnisse ergänzt
- Tool-Header und Ergebnisdarstellung vereinheitlicht
- Berechnungsgrundlagen zu einer breiten Disclosure-Komponente ausgebaut
- Website-Verweis auf `https://blog.beblog.de/` korrigiert

### Added

- Zurücksetzen-Funktion für alle drei Werkzeuge
- gemeinsame `FieldRow`-Komponente
- gemeinsame Icon-Komponenten
- freigegebene UI-Referenz unter `docs/assets/`
- `@types/node` und explizite Node-Typen für Vite-Konfiguration
- Build-002-Dokumentation und ECR-0002

### Preserved

- Rechenlogik aus Build 001
- Unit-Test-Struktur
- getrenntes Estlcam-Zielprofil ohne ungesicherte Feldzuordnung

## [0.1.0] – Build 001 – Foundation

### Added

- Tauri-2-/Svelte-5-App-Shell für macOS
- Tool Registry und Sidebar-Navigation
- Zahnriemen-Modul
- Achsskalierungs-Modul für Zahnriemen und Spindel
- GRBL/grblHAL- und LinuxCNC-Ausgabeprofil
- separater Estlcam-Foundation-Modus
- Drehzahl-&-Vorschub-Modul
- UI-unabhängige TypeScript-Rechenlogik
- Vitest-Tests für alle drei Kernrechner
- Foundation-, Architektur-, Entwicklungs-, Design- und Release-Dokumentation
- GitHub Actions CI und Issue-/PR-Templates
