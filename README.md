# BeBlog Maker Tools

> **0.2.2 · Build 007 · Estlcam Essentials**

BeBlog Maker Tools ist eine bewusst kompakte Werkzeugsuite für Maker, CNC-Anwender, 3D-Druck und Werkstattprojekte. Seit Build 005 besitzt die gleiche Tauri-/Svelte-Codebasis neben macOS auch eine Android-App-Shell.

**Website:** https://blog.beblog.de/


## Build 007 – Estlcam Essentials

Build 007 macht Estlcam zu einem **eigenständigen CNC-Werkzeug** statt zu einem bloßen Ausgabeprofil der allgemeinen Achsskalierung.

Neu sind:

- direkte Berechnung von **„Schritte je Umdrehung“**
- direkte Berechnung von **„Weg je Umdrehung“**
- Zahnriemen- und Spindelantrieb
- X/Y/Z-Auswahl als Eingabehilfe
- Kontrollwert Steps/mm und theoretische Wegauflösung
- Kalibrierung des Verfahrwegs über Sollweg und gemessenen Istweg
- klarer Estlcam-11-Pfad: `Einstellungen → CNC Steuerung → Steuerung`
- Hinweis, Änderungen anschließend mit **„Steuerung programmieren“** zu übernehmen

## Build 006 – Motor & Treiber

Build 006 ergänzt das CNC-Werkzeug **Motor & Treiber**. Es bewertet Motor-Nennstrom, Treiberbereich und gewählte Stromstufe mit **PASS / WARN / FAIL**, unterstützt RMS-/Peak-Angaben und wurde per Drop-in um gängige Stecktreiber ergänzt.

Zusätzlich wurde die Oberfläche bereinigt: Die Version erscheint nur noch einmal, der Footer lautet **„Entwickelt mit ❤️ für Maker“**. Der Upgrade-Workflow nutzt `rsync`, damit versteckte Dateien wie `.github/` zuverlässig übernommen werden.

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

- **Achsskalierung** – Steps/Impulse pro mm für GRBL, grblHAL und LinuxCNC
- **Estlcam Achsberechnung** – Schritte je Umdrehung, Weg je Umdrehung und Verfahrweg-Kalibrierung
- **Drehzahl & Vorschub** – Spindeldrehzahl und Vorschub aus Schnittdaten
- **Motor & Treiber** – Kompatibilitätsbewertung für externe und Stecktreiber

### 3D-Druck

- **Volumenstrom** – benötigter Materialfluss und maximale Druckgeschwindigkeit
- **Filament & Kosten** – Länge, Gewicht, Volumen und Materialkosten
- **Maßkorrektur** – X/Y/Z-Skalierung aus Soll- und Istmaßen

### Werkstatt

- **Schrauben & Schlüsselweiten** – Werkzeug- und Bohrungs-Finder für metrische Schrauben
- **Gewinde & Bohrungen** – Kernloch und Durchgangsbohrungen für metrische Regelgewinde
- **Lochkreis** – gleichmäßig verteilte Bohrungen als X/Y-Koordinaten


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

Nach Merge des aktuellen Builds:

```text
GitHub → Actions → Android APK → Run workflow
```

Nach erfolgreichem Workflow das Artefakt

```text
BeBlog-Maker-Tools-0.2.2-Build-007-Android-Debug-APK
```

herunterladen und entpacken. Die enthaltene `.apk` kann auf einem Android-Gerät installiert werden.

Der Android-Workflow verwendet weiterhin bewusst ein **Debug-APK**. Ein dauerhaft signiertes Release-APK ist ein späterer Distribution-Schritt.

## Projektdokumentation

- [`docs/FOUNDATION.md`](docs/FOUNDATION.md) – Produkt- und Architekturgrundlage
- [`docs/BUILD-007.md`](docs/BUILD-007.md) – Estlcam Essentials
- [`docs/BUILD-006.md`](docs/BUILD-006.md) – Motor & Treiber
- [`docs/BUILD-005.md`](docs/BUILD-005.md) – Android Foundation
- [`docs/ANDROID-GITHUB-ACTIONS.md`](docs/ANDROID-GITHUB-ACTIONS.md) – APK-Build ohne lokale Android-Toolchain
- [`docs/GIT-WORKFLOW-BUILD-007.md`](docs/GIT-WORKFLOW-BUILD-007.md) – verbindlicher Git-/rsync-Ablauf
- [`docs/UPGRADE-BUILD-007.md`](docs/UPGRADE-BUILD-007.md) – Build 007 einspielen
- [`docs/BUILD-007-VALIDATION-REPORT.md`](docs/BUILD-007-VALIDATION-REPORT.md) – Validierungsplan
- [`docs/BUILD-006-VALIDATION-REPORT.md`](docs/BUILD-006-VALIDATION-REPORT.md) – Validierungsplan
- [`docs/BUILD-005-VALIDATION-REPORT.md`](docs/BUILD-005-VALIDATION-REPORT.md) – Android-Praxisvalidierung
- [`docs/SOURCES-BUILD-007.md`](docs/SOURCES-BUILD-007.md) – Estlcam-Quellen
- [`docs/SOURCES-BUILD-006.md`](docs/SOURCES-BUILD-006.md) – Motor-/Treiber-Primärquellen
- [`docs/SOURCES-BUILD-005.md`](docs/SOURCES-BUILD-005.md) – Android-Primärquellen
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) – BeBlog-Designsystem
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – technische Struktur
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) – Entwicklungsworkflow

## Entwicklungsgrundsatz

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Desktop und Mobile verwenden dieselbe fachliche Rechnerlogik.

## Lizenz

MIT – siehe [`LICENSE`](LICENSE).
