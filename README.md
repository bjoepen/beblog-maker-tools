# BeBlog Maker Tools

> **0.1.0 · Build 002 · UI Refinement**

BeBlog Maker Tools ist eine bewusst kompakte Desktop-Werkzeugsuite für Maker, CNC-Anwender und Werkstattprojekte. Build 002 führt die funktionale Foundation aus Build 001 fort und überträgt die freigegebene Gestaltung von **Bernds Maker Blog** auf die Desktop-App.

**Website:** https://blog.beblog.de/

## Aktueller Stand

Die Suite enthält weiterhin drei bewusst kleine Werkzeuge:

- **Zahnriemen** – theoretische Wirklänge, Riemenzähne und reale Wirklänge eines empfohlenen geschlossenen Zahnriemens.
- **Achsskalierung** – Steps/Impulse pro mm für Zahnriemen- und Spindelantriebe mit getrennten Ausgaben für GRBL/grblHAL und LinuxCNC.
- **Drehzahl & Vorschub** – Grundberechnung von Spindeldrehzahl und Vorschubgeschwindigkeit.

Der **Estlcam-Modus** bleibt als eigenes Zielprofil angelegt. Build 002 verändert die fachliche Foundation bewusst nicht und zeigt weiterhin keine ungeprüften Übertragungswerte.

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
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) – BeBlog-Designsystem der App
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – technische Struktur
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) – lokaler Entwicklungsworkflow
- [`docs/VALIDATION.md`](docs/VALIDATION.md) – Prüfschritte

## Entwicklungsgrundsatz

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Das UI darf hochwertiger werden – die Suite selbst bleibt bewusst schlank.

## Lizenz

MIT – siehe [`LICENSE`](LICENSE).
