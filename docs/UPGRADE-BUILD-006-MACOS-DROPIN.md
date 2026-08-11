# Upgrade – Build 006 macOS GitHub Actions Drop-in

Dieser Drop-in ergänzt einen bereits eingespielten **BeBlog Maker Tools 0.2.1 – Build 006** um den macOS-GitHub-Actions-Workflow.

## Verbindliche Pfade

```text
Drop-in nach dem Entpacken:
~/Downloads/beblog-maker-tools/

Lokales Repository:
~/Projekte/beblog-maker-tools/
```

## 1. Aktuelles `main` holen

```bash
cd ~/Projekte/beblog-maker-tools
git switch main
git pull origin main
git status
```

`git status` muss vor dem nächsten Schritt sauber sein.

## 2. Drop-in-Branch erstellen

```bash
git switch -c build/006-macos-actions-dropin
```

## 3. rsync Dry Run

**Noch nichts kopieren.** Zuerst prüfen, welche Dateien übertragen würden:

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Erwartet werden im Wesentlichen:

```text
.github/workflows/macos-app.yml
docs/MACOS-GITHUB-ACTIONS.md
docs/UPGRADE-BUILD-006-MACOS-DROPIN.md
docs/GIT-WORKFLOW-BUILD-006-MACOS-DROPIN.md
APPLY-DROPIN.md
```

Wenn unerwartet viele bestehende Quellcodedateien überschrieben würden: **STOP** und den Drop-in-Pfad prüfen.

## 4. Drop-in anwenden

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
git diff -- .github/workflows/macos-app.yml docs/ APPLY-DROPIN.md
```

## 6. Bestehenden Build validieren

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## 7. Commit

```bash
git add .github/workflows/macos-app.yml docs/MACOS-GITHUB-ACTIONS.md \
  docs/UPGRADE-BUILD-006-MACOS-DROPIN.md \
  docs/GIT-WORKFLOW-BUILD-006-MACOS-DROPIN.md \
  APPLY-DROPIN.md

git commit -m "ci: add macOS artifacts for build 006"
```

## 8. Push

```bash
git push -u origin build/006-macos-actions-dropin
```

Danach Pull Request:

```text
build/006-macos-actions-dropin → main
```

## 9. Nach dem Merge

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

## 10. GitHub-Actions-Test

Auf GitHub:

```text
Actions → macOS App → Run workflow → main
```

Der Lauf ist erst **GO**, wenn das Artefakt

```text
BeBlog-Maker-Tools-0.2.1-Build-006-macOS
```

mit App-ZIP und DMG erzeugt wurde.

## 11. Branch bereinigen

Nach erfolgreichem Merge und erfolgreichem Actions-Test:

```bash
git branch -d build/006-macos-actions-dropin
git push origin --delete build/006-macos-actions-dropin
```
