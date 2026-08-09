# Changelog

Alle relevanten Änderungen an BeBlog Maker Tools werden hier dokumentiert.

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
