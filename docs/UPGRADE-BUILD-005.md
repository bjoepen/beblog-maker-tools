# Upgrade auf Build 005 – Android Foundation

Build 005 wird auf dem aktuellen `main` aufgebaut.

## 1. Ausgangspunkt prüfen

```bash
git switch main
git pull origin main
git status
```

## 2. Build-Branch

```bash
git switch -c build/005-android-foundation
```

## 3. Build-Dateien übernehmen

Den Inhalt des gelieferten Ordners `beblog-maker-tools/` in das lokale Repository kopieren. Bestehende Dateien der App dürfen ersetzt werden. Das lokal vorhandene `pnpm-lock.yaml` nicht löschen.

## 4. Abhängigkeiten synchronisieren

```bash
pnpm install
```

## 5. Desktop/Shared-Code validieren

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Die Desktop-App muss weiterhin normal starten.

## 6. Mobile Darstellung ohne Android-Toolchain vorprüfen

Für die responsive Oberfläche genügt zunächst der Browser/Vite-Server:

```bash
pnpm dev
```

Browserfenster auf eine Smartphone-Breite verkleinern und prüfen:

- mobiler Header sichtbar
- Werkzeugmenü öffnet/schließt
- Werkzeugwechsel schließt das Menü
- Eingabefelder passen in die Breite
- Ergebnisse bleiben lesbar
- Lochkreistabelle ist horizontal/vertikal nutzbar

## 7. APK nicht lokal bauen müssen

Für Build 005 ist **keine lokale Android-Installation vorgeschrieben**. Nach Push und Merge übernimmt GitHub Actions den Android-Build.

Der vollständige Git-Ablauf steht in `docs/GIT-WORKFLOW-BUILD-005.md`.
