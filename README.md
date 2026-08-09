# BeBlog Maker Tools

> **0.1.2 · Build 004 · Workshop Essentials**

BeBlog Maker Tools ist eine bewusst kompakte Desktop-Werkzeugsuite für Maker, CNC-Anwender, 3D-Druck und Werkstattprojekte. Build 004 ergänzt drei häufig benötigte Werkstatthelfer für Schrauben, Gewinde, Bohrungen und Lochkreise.

**Website:** https://blog.beblog.de/


## Build 004 – Workshop Essentials

Neu in der Kategorie **Werkstatt**:

- **Schrauben & Schlüsselweiten** – Werkzeuggröße, Regelgewinde, Kernloch und normale Durchgangsbohrung
- **Gewinde & Bohrungen** – Kernloch sowie feine, normale und grobe Durchgangsbohrungen
- **Lochkreis** – Teilkreisgeometrie und vollständige X/Y-Koordinatentabelle

Der verbindliche Git-Ablauf steht in `docs/GIT-WORKFLOW-BUILD-004.md`.

## Build 003 – 3D Printing Essentials

Die Suite enthält jetzt zusätzlich drei Werkzeuge für FDM/FFF-3D-Druck:

- **Volumenstrom** – mm³/s und maximale Druckgeschwindigkeit
- **Filament & Kosten** – Länge, Gewicht, Volumen und Materialkosten
- **Maßkorrektur** – X/Y/Z-Skalierung aus Soll- und Istmaßen

Der verbindliche Git-Ablauf für diesen Build steht in `docs/GIT-WORKFLOW-BUILD-003.md`.


## Aktueller Stand

Die Suite enthält neun bewusst kleine Werkzeuge:

- **Zahnriemen** – theoretische Wirklänge, Riemenzähne und reale Wirklänge eines empfohlenen geschlossenen Zahnriemens.
- **Achsskalierung** – Steps/Impulse pro mm für Zahnriemen- und Spindelantriebe mit getrennten Ausgaben für GRBL/grblHAL und LinuxCNC.
- **Drehzahl & Vorschub** – Grundberechnung von Spindeldrehzahl und Vorschubgeschwindigkeit.
- **Volumenstrom** – benötigter Materialfluss, maximale Druckgeschwindigkeit und Limitauslastung.
- **Filament & Kosten** – Umrechnung zwischen Länge und Gewicht sowie Materialkosten.
- **Maßkorrektur** – getrennte Skalierungsfaktoren für X, Y und Z.
- **Schrauben & Schlüsselweiten** – schneller Werkzeug- und Bohrungs-Finder für metrische Schrauben.
- **Gewinde & Bohrungen** – Kernloch und Durchgangsbohrungen für metrische Regelgewinde.
- **Lochkreis** – gleichmäßig verteilte Bohrungen als X/Y-Koordinaten.

Der **Estlcam-Modus** bleibt als eigenes Zielprofil angelegt und zeigt weiterhin keine ungeprüften Übertragungswerte.

## Build 002 – UI Refinement

Build 002 konzentriert sich auf Gestaltung und Bedienbarkeit:

- warme, helle BeBlog-Flächen statt dunkler App-Sidebar
- dunkelblaue Markenakzente analog zum Makerblog
- stilisiertes `b` als App-/Sidebar-Markierung
- kompakte Werkzeugnavigation mit eigenen SVG-Symbolen
- klarere Eingabefelder mit festen Einheiten
- stärker strukturierte Ergebnislisten
- Zurücksetzen-Funktion pro Werkzeug
- großzügiger, aufklappbarer Bereich für Berechnungsgrundlagen
- korrekter Website-Verweis auf `blog.beblog.de`
- offizielle SVG-Markenmarke aus dem Blog als BrandMark integriert
- dauerhafte Aufnahme von `@types/node` für eine fehlerfreie TypeScript-Validierung

Der freigegebene UI-Entwurf liegt als Referenz unter [`docs/assets/build-002-ui-reference.png`](docs/assets/build-002-ui-reference.png).

## Technologie

- Tauri 2
- Svelte 5
- TypeScript
- Rust
- Vite
- Vitest
- Zielplattform zunächst: macOS

## Schnellstart auf macOS

### Voraussetzungen

- Xcode Command Line Tools
- Rust Toolchain (`rustup`)
- Node.js 22 oder neuer
- pnpm

### Installation

```bash
git clone https://github.com/DEIN-BENUTZERNAME/beblog-maker-tools.git
cd beblog-maker-tools
pnpm install
```

### Entwicklung

```bash
pnpm tauri:dev
```

### Tests und Validierung

```bash
pnpm validate
```

Die Validierung führt nacheinander TypeScript-Check, Unit Tests und Vite-Produktionsbuild aus.

### macOS-App bauen

```bash
pnpm tauri:build
```

Tauri legt die Bundles anschließend unter `src-tauri/target/release/bundle/` ab.

## Projektdokumentation

- [`docs/FOUNDATION.md`](docs/FOUNDATION.md) – verbindliche Produkt- und Architekturgrundlage
- [`docs/BUILD-001.md`](docs/BUILD-001.md) – Foundation-Build
- [`docs/BUILD-002.md`](docs/BUILD-002.md) – UI Refinement
- [`docs/BUILD-003.md`](docs/BUILD-003.md) – 3D Printing Essentials
- [`docs/BUILD-004.md`](docs/BUILD-004.md) – Workshop Essentials
- [`docs/GIT-WORKFLOW-BUILD-004.md`](docs/GIT-WORKFLOW-BUILD-004.md) – verbindlicher Git-Ablauf für Build 004
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) – BeBlog-Designsystem der App
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – technische Struktur
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) – lokaler Entwicklungsworkflow
- [`docs/VALIDATION.md`](docs/VALIDATION.md) – Prüfschritte

## Entwicklungsgrundsatz

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Das UI darf hochwertiger werden – die Suite selbst bleibt bewusst schlank.

## Lizenz

MIT – siehe [`LICENSE`](LICENSE).

## Build 004 – Workshop Essentials

Neue Werkzeuge: Schrauben & Schlüsselweiten, Gewinde & Bohrungen und Lochkreis.
