# Git Workflow – Build 007

## Branch-Modell

```text
main
└── build/007-estlcam-essentials
```

Builds werden ausschließlich von aktuellem `main` abgezweigt und per Pull Request nach `main` zurückgeführt.

## Vollständiger Ablauf

```bash
cd ~/Projekte/beblog-maker-tools

git switch main
git pull origin main
git status

git switch -c build/007-estlcam-essentials
```

### rsync Dry Run

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

### rsync Apply

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

### Prüfen

```bash
git status
git diff
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

### Commit

```bash
git add .
git commit -m "feat: add Estlcam essentials for build 007"
git push -u origin build/007-estlcam-essentials
```

Danach auf GitHub Pull Request öffnen:

```text
build/007-estlcam-essentials → main
```

## Nach dem Merge

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

## Branch bereinigen

```bash
git branch -d build/007-estlcam-essentials
git push origin --delete build/007-estlcam-essentials
```

## Konfliktregel

Falls `package.json` oder `pnpm-lock.yaml` Konflikte enthalten:

1. niemals Konfliktmarker stehen lassen
2. `package.json` zuerst fachlich korrekt auflösen
3. bei Lockfile-Problemen das Lockfile anschließend mit `pnpm install` reproduzierbar regenerieren
4. danach erneut `pnpm validate`
