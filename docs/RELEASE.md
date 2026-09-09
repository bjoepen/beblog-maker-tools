# Release Workflow

## Build 002 – UI Refinement

Öffentliche Produktversion: `0.1.0`  
Interner Build: `002 – UI Refinement`

Build 002 ist bewusst ein Refinement-Build. Er ersetzt keine Foundation-Dokumentation und führt keine neuen Rechnerformeln ein.

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
git switch -c build/002-ui-refinement

git status
git diff

pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml

git add .
git commit -m "feat: refine BeBlog Maker Tools UI for build 002"
git push -u origin build/002-ui-refinement
```

Nach Review und Merge:

```bash
git switch main
git pull --ff-only
```

Da Build 002 weiterhin zur Produktversion `0.1.0` gehört, muss nicht zwangsläufig ein neuer öffentlicher Versions-Tag gesetzt werden. Falls ein Build-Tag gewünscht ist, kann beispielsweise verwendet werden:

```text
build-002-ui-refinement
```

## Release-Artefakte

Tauri erzeugt die macOS-Bundles unter:

```text
src-tauri/target/release/bundle/
```

Signierung, Notarisierung und Apple Developer ID bleiben außerhalb des Build-002-Scopes.


## Build 003

- Version: `0.1.1`
- Branch: `build/003-3d-printing-essentials`
- Commit: `feat: add 3D printing essentials for build 003`
- PR-Ziel: `main`
- Git-Anleitung: `docs/GIT-WORKFLOW-BUILD-003.md`


## Build 004

- Version: `0.1.2`
- Codename: `Workshop Essentials`
- Branch: `build/004-workshop-essentials`
- Commit: `feat: add workshop essentials for build 004`
- PR-Ziel: `main`


## Build 005 / 0.2.0

Android Foundation. Das erste Android-Artefakt ist ein GitHub-Actions-Debug-APK für Test und persönlichen Werkstatteinsatz. Ein stabil signiertes Release-APK wird erst nach Einrichtung eines privaten Android-Keystores ausgeliefert.


## Build 006 / 0.2.1

Branch: `build/006-motor-driver-compatibility`  
Commit: `feat: add motor driver compatibility for build 006`

Release-Schwerpunkt: Motor-/Treiber-Kompatibilität, UI-Bereinigung und rsync-Upgrade-Workflow.


## Build 007 / 0.2.2

Build 007 ergänzt die eigenständige Estlcam-Achsberechnung. Nach Merge nach `main` werden die bestehenden Android- und macOS-GitHub-Actions-Workflows verwendet.

Aktuelle Artefakte:

- `BeBlog-Maker-Tools-0.2.2-Build-007-Android-Debug-APK`
- `BeBlog-Maker-Tools-0.2.2-Build-007-macOS`
