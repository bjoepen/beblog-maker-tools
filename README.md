# BeBlog Maker Tools

> **0.2.0 · Build 005 · Android Foundation**

BeBlog Maker Tools ist eine bewusst kompakte Werkzeugsuite für Maker, CNC-Anwender, 3D-Druck und Werkstattprojekte. Seit Build 005 besitzt die gleiche Tauri-/Svelte-Codebasis neben macOS auch eine Android-App-Shell.

**Website:** https://blog.beblog.de/

## Build 005 – Android Foundation

Build 005 fügt **keine neuen Rechner** hinzu. Stattdessen wird die vorhandene Suite mobil:

- responsive Smartphone-/Tablet-Oberfläche
- ausfahrbare mobile Werkzeugnavigation
- touchfreundliche Eingaben und Bedienelemente
- Safe-Area-Unterstützung
- Android-Paketkennung `de.beblog.makertools`
- Android 7 / SDK 24 als Mindestbasis
- GitHub Actions baut ein installierbares Debug-APK
- lokales Android Studio ist für diesen CI-Build nicht erforderlich

Android-Anleitung: [`docs/ANDROID-GITHUB-ACTIONS.md`](docs/ANDROID-GITHUB-ACTIONS.md)  
Verbindlicher Git-Ablauf: [`docs/GIT-WORKFLOW-BUILD-005.md`](docs/GIT-WORKFLOW-BUILD-005.md)

## Enthaltene Werkzeuge

### Antrieb

- **Zahnriemen** – theoretische Wirklänge, Riemenzähne und reale Wirklänge eines empfohlenen geschlossenen Zahnriemens

### CNC

- **Achsskalierung** – Steps/Impulse pro mm für Zahnriemen- und Spindelantriebe
- **Drehzahl & Vorschub** – Spindeldrehzahl und Vorschub aus Schnittdaten

### 3D-Druck

- **Volumenstrom** – benötigter Materialfluss und maximale Druckgeschwindigkeit
- **Filament & Kosten** – Länge, Gewicht, Volumen und Materialkosten
- **Maßkorrektur** – X/Y/Z-Skalierung aus Soll- und Istmaßen

### Werkstatt

- **Schrauben & Schlüsselweiten** – Werkzeug- und Bohrungs-Finder für metrische Schrauben
- **Gewinde & Bohrungen** – Kernloch und Durchgangsbohrungen für metrische Regelgewinde
- **Lochkreis** – gleichmäßig verteilte Bohrungen als X/Y-Koordinaten

Der **Estlcam-Modus** bleibt als eigenes Zielprofil angelegt und zeigt weiterhin keine ungeprüften Übertragungswerte.

## Technologie

- Tauri 2
- Svelte 5
- TypeScript
- Rust
- Vite
- Vitest
- macOS
- Android ab Build 005

## Schnellstart auf macOS

### Voraussetzungen

- Xcode Command Line Tools
- Rust Toolchain (`rustup`)
- Node.js 22 oder neuer
- pnpm

```bash
git clone https://github.com/bjoepen/beblog-maker-tools.git
cd beblog-maker-tools
pnpm install
pnpm validate
pnpm tauri:dev
```

### macOS-App bauen

```bash
pnpm tauri:build
```

## Android-APK ohne lokale Android-Toolchain

Nach Merge von Build 005:

```text
GitHub → Actions → Android APK → Run workflow
```

Nach erfolgreichem Workflow das Artefakt

```text
BeBlog-Maker-Tools-0.2.0-Build-005-Android-Debug-APK
```

herunterladen und entpacken. Die enthaltene `.apk` kann auf einem Android-Gerät installiert werden.

Build 005 verwendet bewusst ein **Debug-APK**. Ein dauerhaft signiertes Release-APK ist ein späterer Distribution-Schritt.

## Projektdokumentation

- [`docs/FOUNDATION.md`](docs/FOUNDATION.md) – Produkt- und Architekturgrundlage
- [`docs/BUILD-005.md`](docs/BUILD-005.md) – Android Foundation
- [`docs/ANDROID-GITHUB-ACTIONS.md`](docs/ANDROID-GITHUB-ACTIONS.md) – APK-Build ohne lokale Android-Toolchain
- [`docs/GIT-WORKFLOW-BUILD-005.md`](docs/GIT-WORKFLOW-BUILD-005.md) – verbindlicher Git-Ablauf
- [`docs/BUILD-005-VALIDATION-REPORT.md`](docs/BUILD-005-VALIDATION-REPORT.md) – Validierungsplan
- [`docs/SOURCES-BUILD-005.md`](docs/SOURCES-BUILD-005.md) – technische Primärquellen
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) – BeBlog-Designsystem
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – technische Struktur
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) – Entwicklungsworkflow

## Entwicklungsgrundsatz

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Desktop und Mobile verwenden dieselbe fachliche Rechnerlogik.

## Lizenz

MIT – siehe [`LICENSE`](LICENSE).
