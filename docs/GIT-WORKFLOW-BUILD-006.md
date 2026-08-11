# Git-Workflow – Build 006

Der verbindliche Branch-Ablauf lautet:

```text
main
 └── build/006-motor-driver-compatibility
      └── Pull Request → main
```

## Kurzablauf

```bash
cd ~/Projekte/beblog-maker-tools
git switch main
git pull origin main
git status
git switch -c build/006-motor-driver-compatibility

rsync -avn --exclude='.git/' ~/Downloads/beblog-maker-tools/ ~/Projekte/beblog-maker-tools/
rsync -av  --exclude='.git/' ~/Downloads/beblog-maker-tools/ ~/Projekte/beblog-maker-tools/

git status
git diff
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml

git add .
git commit -m "feat: add motor driver compatibility for build 006"
git push -u origin build/006-motor-driver-compatibility
```

Danach PR `build/006-motor-driver-compatibility → main` erstellen.

Nach Merge:

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
git branch -d build/006-motor-driver-compatibility
git push origin --delete build/006-motor-driver-compatibility
```

## Konflikte

Bei Konflikten niemals Konfliktmarker in `package.json`, YAML oder Quellcode stehen lassen:

```text
<<<<<<<
=======
>>>>>>>
```

Bei `pnpm-lock.yaml` gilt weiterhin: zuerst `package.json` korrekt zusammenführen, anschließend den Lockfile bei Bedarf reproduzierbar mit `pnpm install` neu erzeugen.

## rsync-Regel

Für künftige Builds ist `rsync` gegenüber manuellem Finder-Kopieren der Standard, weil versteckte Dateien zuverlässig mit übernommen werden. `.git/` wird immer ausgeschlossen.
