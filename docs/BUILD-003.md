# Build 003 – 3D Printing Essentials

**Produkt:** BeBlog Maker Tools  
**Version:** 0.1.1  
**Build:** 003  
**Codename:** 3D Printing Essentials

## Ziel

Build 003 erweitert die bestehende Werkzeugsuite um drei kleine, praxisorientierte Rechner für funktionalen FDM/FFF-3D-Druck. Der Build bleibt der Foundation-Regel treu: Ein Werkzeug beantwortet eine konkrete technische Frage und wird nicht zu einem eigenen Subsystem.

## Neue Kategorie: 3D-Druck

### Volumenstrom

- Eingaben: Linienbreite, Schichthöhe, Druckgeschwindigkeit, maximales Volumenstrom-Limit
- Ergebnisse: benötigter Volumenstrom, maximale Druckgeschwindigkeit, Auslastung und Limitbewertung
- direkte Warnung bei Überschreitung des eingetragenen Limits

### Filament & Kosten

- Berechnungsrichtung Länge → Gewicht oder Gewicht → Länge
- editierbare Richtwertprofile für PLA, PETG, ABS und ASA
- Eingaben: Filamentdurchmesser, Dichte, Preis/kg sowie Länge oder Gewicht
- Ergebnisse: Materialkosten, Filamentlänge, Gewicht und Materialvolumen

### Maßkorrektur

- getrennte Soll-/Istwerte für X, Y und Z
- Ergebnisse: Skalierungsfaktor, Korrektur in Prozent und Maßabweichung
- bewusster Hinweis, vor dauerhafter Skalierung mechanische und extrusionsbezogene Ursachen zu prüfen

## Unverändert

- Zahnriemen
- Achsskalierung
- Drehzahl & Vorschub
- BeBlog-UI aus Build 002
- offizielle Blog-SVG aus Build 002.1
- UI-unabhängige Berechnungslogik

## Definition of Done

- [x] Kategorie 3D-Druck in Tool Registry integriert
- [x] Volumenstrom implementiert
- [x] Filament & Kosten implementiert
- [x] Maßkorrektur implementiert
- [x] neue Berechnungsfunktionen von UI getrennt
- [x] Unit Tests für alle drei neuen Rechner ergänzt
- [x] deutsche Dezimaleingabe weiterhin unterstützt
- [x] Build-Dokumentation ergänzt
- [x] verbindlicher Git-Workflow als eigene Build-Datei ergänzt
- [ ] `pnpm validate` auf dem Ziel-Mac ausgeführt
- [ ] `cargo check --manifest-path src-tauri/Cargo.toml` auf dem Ziel-Mac ausgeführt
- [ ] `pnpm tauri:dev` auf dem Ziel-Mac visuell geprüft
