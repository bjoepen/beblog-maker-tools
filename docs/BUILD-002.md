# Build 002 – UI Refinement

**Produktversion:** 0.1.0  
**Build:** 002  
**Schwerpunkt:** UI Refinement / BeBlog-Branding

## Ziel

Build 002 verändert nicht die fachliche Grundarchitektur der Foundation. Der Build bringt die bereits funktionsfähige App gestalterisch näher an **Bernds Maker Blog** unter `https://blog.beblog.de/`.

## Freigegebene Richtung

Die UI orientiert sich an folgenden Merkmalen des Makerblogs:

- warme, helle Grundflächen
- tiefe dunkelblaue Akzentfarbe
- großzügige, redaktionelle Abstände
- klare dunkle Typografie
- zurückhaltende Rahmen statt schwerer Dashboard-Karten
- technischer Charakter ohne visuelle Überladung

Das stilisierte `b` wird in abstrahierter Form als Markenmarke der Suite eingesetzt.

## Änderungen

### App Shell

- helle Sidebar mit BeBlog-Branding
- neue gruppierte Tool-Navigation
- Info-Karte mit korrektem Link `blog.beblog.de`
- Build- und Versionsanzeige aktualisiert

### Werkzeuge

- neue Tool-Header mit Modul-Icon und Zurücksetzen-Funktion
- Eingabefelder als einheitliche Label/Wert/Einheit-Komponente
- visuell strukturierte Ergebniszeilen mit technischen Icons
- Berechnungsgrundlagen als breite Disclosure-Komponente

### Qualität

- `@types/node` als Dev Dependency ergänzt
- `vite/client` und `node` explizit in `tsconfig.json` typisiert
- bestehende Rechenlogik und Unit Tests unverändert fortgeführt

## Bewusst nicht enthalten

- keine neuen Rechner
- keine Änderung der Kernformeln
- keine Estlcam-Feldzuordnung ohne Verifikation
- keine Material- oder Werkzeugdatenbank
- keine Cloud- oder Projektfunktionen

## Definition of Done

- [x] freigegebene BeBlog-Gestaltungsrichtung umgesetzt
- [x] Website-Verweis auf `https://blog.beblog.de/` korrigiert
- [x] drei Foundation-Werkzeuge im neuen UI integriert
- [x] direkte Neuberechnung bleibt erhalten
- [x] Zurücksetzen pro Werkzeug ergänzt
- [x] UI-Komponenten weiter modularisiert
- [x] Node-TypeScript-Korrektur ins Repo übernommen
- [ ] `pnpm validate` lokal auf macOS erfolgreich
- [ ] `pnpm tauri:build` lokal auf macOS erfolgreich

Die letzten beiden Punkte werden auf dem Ziel-Mac ausgeführt, da die bereitstellende Umgebung keine vollständige pnpm-/Rust-/Tauri-Toolchain besitzt.
