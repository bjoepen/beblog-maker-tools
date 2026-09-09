# Upgrade auf Build 007 – Estlcam Essentials

## Verbindliche Pfade

Neuer Build nach dem Entpacken:

```text
~/Downloads/beblog-maker-tools/
```

Lokales Repository:

```text
~/Projekte/beblog-maker-tools/
```

## 1. `main` aktualisieren

```bash
cd ~/Projekte/beblog-maker-tools
git switch main
git pull origin main
git status
```

Das Arbeitsverzeichnis muss sauber sein.

## 2. Build-Branch anlegen

```bash
git switch -c build/007-estlcam-essentials
```

## 3. Dry Run mit rsync

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Die Vorschau kontrollieren. Durch rsync werden auch versteckte Dateien wie `.github/` zuverlässig berücksichtigt; `.git/` bleibt geschützt.

## 4. Build anwenden

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

## 5. Änderungen prüfen

```bash
cd ~/Projekte/beblog-maker-tools
git status
git diff
```

## 6. Abhängigkeiten und Gates

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## 7. App lokal testen

```bash
pnpm tauri:dev
```

Besonders prüfen:

- Estlcam Achsberechnung in der CNC-Navigation
- Zahnriemen / Spindel
- X/Y/Z
- Kalibrierung
- mobiles Tablet-Layout

## 8. Commit und Push

```bash
git add .
git commit -m "feat: add Estlcam essentials for build 007"
git push -u origin build/007-estlcam-essentials
```

## 9. Pull Request

```text
build/007-estlcam-essentials → main
```

CI abwarten und erst bei grünen Gates mergen.
