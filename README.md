# BeBlog Maker Tools

> **0.1.0 · Build 001 · Foundation**

BeBlog Maker Tools ist eine bewusst kompakte Desktop-Werkzeugsuite für Maker, CNC-Anwender und Werkstattprojekte. Statt einer überladenen Universalsoftware bündelt die App kleine, nachvollziehbare Rechner für konkrete technische Aufgaben.

## Build 001

Der Foundation-Build enthält drei Basismodule:

- **Zahnriemen** – theoretische Wirklänge, Riemenzähne und reale Wirklänge eines empfohlenen geschlossenen Zahnriemens.
- **Achsskalierung** – Steps/Impulse pro mm für Zahnriemen- und Spindelantriebe mit Ausgabe für GRBL/grblHAL und LinuxCNC.
- **Drehzahl & Vorschub** – Grundberechnung von Spindeldrehzahl und Vorschubgeschwindigkeit.

Der **Estlcam-Modus** ist als eigenes Zielprofil angelegt, gibt in Build 001 aber bewusst noch keine ungeprüften Übertragungswerte aus. Seine konkrete Feld- und Rechenlogik wird vor der Implementierung separat verifiziert.

## Technologie

- Tauri 2
- Svelte 5
- TypeScript
- Rust
- Vite
- Vitest
- Zielplattform zunächst: macOS

Die Struktur folgt dem aktuellen Tauri-2-Modell mit JavaScript/TypeScript-Frontend im Repository-Root und Rust/Tauri unter `src-tauri/`.

## Schnellstart auf macOS

### Voraussetzungen

- aktuelle Xcode Command Line Tools
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

### macOS-App bauen

```bash
pnpm tauri:build
```

Tauri legt den fertigen Bundle-Build anschließend unter `src-tauri/target/release/bundle/` ab.

## Foundation

Die freigegebene Projektgrundlage ist vollständig Bestandteil dieses Repositories:

**[`docs/FOUNDATION.md`](docs/FOUNDATION.md)**

Dort sind Produktidee, Modulgrenzen, Architektur, Build-Strategie und Definition of Done für Build 001 verbindlich dokumentiert.

## Repository-Struktur

```text
src/                  Svelte-/TypeScript-App
src/core/             UI-unabhängige Rechenlogik
src/tools/            Werkzeugmodule
src-tauri/            Tauri-/Rust-Desktop-Shell
tests/                Unit Tests
docs/                 Projekt- und Entwicklungsdokumentation
.github/               GitHub Actions und Templates
```

## Entwicklungsgrundsatz

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Neue Module werden nur aufgenommen, wenn sie ein reales Werkstattproblem lösen und klein genug bleiben, um als einzelnes Werkzeug verständlich zu sein.

## Status

Build 001 ist die Foundation. Er soll die Architektur beweisen und die drei ersten Module tragen – nicht bereits alle denkbaren Werkstattfunktionen enthalten.

## Lizenz

MIT – siehe [`LICENSE`](LICENSE).
