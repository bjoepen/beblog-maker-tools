# Installation und lokaler Build

Diese Anleitung gilt für **BeBlog Maker Tools 0.1.0 · Build 002 – UI Refinement** auf macOS.

## 1. Voraussetzungen prüfen

```bash
xcode-select -p
rustc --version
cargo --version
node --version
pnpm --version
```

Falls die Xcode Command Line Tools fehlen:

```bash
xcode-select --install
```

Für das Frontend wird Node.js 22+ und pnpm verwendet. Rust wird über die rustup-Toolchain bereitgestellt.

## 2. Repository klonen

```bash
git clone https://github.com/DEIN-BENUTZERNAME/beblog-maker-tools.git
cd beblog-maker-tools
```

## 3. JavaScript-Abhängigkeiten installieren

```bash
pnpm install
```

Build 002 enthält `@types/node` bereits als Dev Dependency. Eine manuelle Nachinstallation zur Behebung von `Cannot find name 'process'` ist daher nicht mehr erforderlich.

## 4. Browser-Entwicklung testen

```bash
pnpm dev
```

## 5. Tauri-App starten

```bash
pnpm tauri:dev
```

Beim ersten Start kann Cargo länger benötigen, weil die native Desktop-Shell und Rust-Abhängigkeiten kompiliert werden.

## 6. Validierung

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## 7. macOS Release Build

```bash
pnpm tauri:build
```

Die erzeugten App-/Installer-Artefakte liegen anschließend unter:

```text
src-tauri/target/release/bundle/
```

## Hinweis zur Signierung

Build 002 setzt weiterhin keine Apple Developer ID voraus. Lokal erzeugte öffentliche Downloads können von macOS/Gatekeeper daher als unsigniert behandelt werden.


## Android über GitHub Actions – Build 005

Für den vorgesehenen Android-CI-Build müssen auf dem Mac weder Android Studio noch SDK/NDK installiert werden. Nach Merge nach `main` im GitHub-Repository `Actions → Android APK → Run workflow` öffnen. Nach erfolgreichem Lauf das APK-Artefakt herunterladen und entpacken.

Details: `docs/ANDROID-GITHUB-ACTIONS.md`.
