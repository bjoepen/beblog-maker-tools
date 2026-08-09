# Upgrade auf Build 003

Build 003 wird auf einen aktuellen `main`-Branch angewendet.

## Vor dem Upgrade

```bash
git switch main
git pull origin main
git status
```

Der Arbeitsbaum muss sauber sein.

## Build-Branch

```bash
git switch -c build/003-3d-printing-essentials
```

Danach den Inhalt des Build-003-Pakets in das Repository übernehmen.

## Abhängigkeiten und Lockfile

```bash
pnpm install
```

Build 003 führt keine neue Runtime-Bibliothek ein. `pnpm install` synchronisiert dennoch das Lockfile mit dem lokalen Repositoryzustand.

## Validierung

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Danach den vollständigen Git-Ablauf in `docs/GIT-WORKFLOW-BUILD-003.md` durchführen.
