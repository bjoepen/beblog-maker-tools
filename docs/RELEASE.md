# Release Workflow

## Build 001

Öffentliche Produktversion: `0.1.0`  
Interner Build: `001 – Foundation`

## Vor dem Commit

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:build
```

## Git Workflow

```bash
git switch main
git pull --ff-only
git switch -c build/001-foundation

git status
git diff

pnpm validate

git add .
git commit -m "feat: complete BeBlog Maker Tools build 001 foundation"
git push -u origin build/001-foundation
```

Nach Review und Merge:

```bash
git switch main
git pull --ff-only
git tag -a v0.1.0 -m "BeBlog Maker Tools 0.1.0 – Foundation"
git push origin v0.1.0
```

## Release-Artefakte

Für die frühe Foundation reicht zunächst das von Tauri erzeugte macOS-App-Bundle. Signierung, Notarisierung und Apple Developer ID sind ausdrücklich nicht Bestandteil von Build 001.
