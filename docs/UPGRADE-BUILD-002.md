# Upgrade von Build 001 auf Build 002

## Empfohlener Weg

Build 002 wird als vollständiges Repository-Paket geliefert. Für einen sauberen Git-Verlauf empfiehlt sich, den Build-002-Inhalt auf einem eigenen Branch einzuspielen.

```bash
git switch main
git pull --ff-only
git switch -c build/002-ui-refinement
```

Anschließend die Dateien des Build-002-Pakets über den Repository-Inhalt kopieren und prüfen:

```bash
git status
git diff
```

Abhängigkeiten aktualisieren:

```bash
pnpm install
```

Danach validieren:

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

## Wichtige Änderung gegenüber Build 001

Build 002 enthält `@types/node` bereits in `package.json` und `node` in `tsconfig.json`. Die zuvor lokal notwendige Reparatur des Vite-TypeScript-Checks ist damit Bestandteil des Repositories.

## Commit

```bash
git add .
git commit -m "feat: refine BeBlog Maker Tools UI for build 002"
git push -u origin build/002-ui-refinement
```
