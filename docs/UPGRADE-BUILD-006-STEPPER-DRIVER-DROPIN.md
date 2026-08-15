# Upgrade – Build 006 Stepper Driver Drop-in

## Voraussetzung

Build 006 / Version 0.2.1 ist bereits im lokalen Repository vorhanden.

## 1. Main aktualisieren

```bash
cd ~/Projekte/beblog-maker-tools
git switch main
git pull origin main
git status
```

## 2. Drop-in-Branch erstellen

```bash
git switch -c build/006-stepper-driver-dropin
```

## 3. Dry Run

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Prüfen, dass nur die erwarteten Drop-in-Dateien geändert oder ergänzt werden.

## 4. Anwenden

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

## 5. Validieren

```bash
cd ~/Projekte/beblog-maker-tools
git status
git diff
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## 6. Commit

```bash
git add .
git commit -m "feat: extend motor driver library with plug-in drivers"
git push -u origin build/006-stepper-driver-dropin
```

Danach Pull Request `build/006-stepper-driver-dropin → main` erstellen.
