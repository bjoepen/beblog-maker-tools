# Git Workflow – Build 006 macOS Actions Drop-in

## Branchmodell

```text
main
└── build/006-macos-actions-dropin
```

Der Drop-in wird **nicht direkt auf `main` entwickelt**. Ausgangspunkt ist immer das aktuelle `main`, anschließend erfolgt ein Pull Request zurück nach `main`.

## Kompletter Ablauf

```bash
cd ~/Projekte/beblog-maker-tools

git switch main
git pull origin main
git status

git switch -c build/006-macos-actions-dropin

rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/

rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/

git status
git diff

pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml

git add .
git commit -m "ci: add macOS artifacts for build 006"
git push -u origin build/006-macos-actions-dropin
```

Dann auf GitHub den Pull Request erstellen:

```text
build/006-macos-actions-dropin → main
```

Nach Prüfung und Merge:

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

Danach **Actions → macOS App → Run workflow** ausführen und das erzeugte Artefakt prüfen.

Nach erfolgreichem Test:

```bash
git branch -d build/006-macos-actions-dropin
git push origin --delete build/006-macos-actions-dropin
```

## Konflikte

Da dieser Drop-in fast ausschließlich neue Dateien hinzufügt, sind Konflikte nicht zu erwarten. Sollte Git dennoch einen Konflikt melden:

1. Nicht blind `ours` oder `theirs` übernehmen.
2. `git status` lesen.
3. Konfliktdatei öffnen und Marker `<<<<<<<`, `=======`, `>>>>>>>` vollständig auflösen.
4. Bei `package.json` oder `pnpm-lock.yaml` besonders vorsichtig sein. Dieser Drop-in muss diese Dateien **nicht** verändern.
5. Danach erneut `pnpm install`, `pnpm validate` und den Rust-Check ausführen.
