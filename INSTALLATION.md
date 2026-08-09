# Installation und lokaler Build

Diese Anleitung richtet sich an macOS und Build 001.

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

Rust wird über die offizielle rustup-Toolchain installiert. Für das Frontend wird Node.js 22+ und pnpm verwendet.

## 2. Repository klonen

```bash
git clone https://github.com/DEIN-BENUTZERNAME/beblog-maker-tools.git
cd beblog-maker-tools
```

## 3. JavaScript-Abhängigkeiten installieren

```bash
pnpm install
```

## 4. Browser-Entwicklung testen

```bash
pnpm dev
```

## 5. Tauri-App starten

```bash
pnpm tauri:dev
```

Beim ersten Start lädt Cargo die Rust-Abhängigkeiten und kompiliert die native Desktop-Shell. Das kann deutlich länger dauern als spätere Starts.

## 6. Tests

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

Build 001 setzt keine Apple Developer ID voraus. Dadurch können lokal erzeugte öffentliche Downloads von macOS/Gatekeeper entsprechend als unsigniert behandelt werden. Signierung und Notarisierung sind in der Foundation ausdrücklich nicht vorgesehen.
