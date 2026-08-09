# Development

## Voraussetzungen

- macOS
- Xcode Command Line Tools
- Node.js 22+
- pnpm
- Rust über rustup

## Setup

```bash
pnpm install
pnpm tauri:dev
```

## Qualitätscheck

Vor jedem Commit:

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## Architekturregel

Berechnungslogik gehört nach `src/core/calculations/` und darf keine Svelte-Abhängigkeit besitzen. UI-spezifische Darstellung bleibt in Komponenten bzw. `src/tools/`.

## Build 002

Build 002 ist ein UI-Refinement. Neue technische Formeln oder neue Rechner gehören nicht in diesen Build.

Branch-Vorschlag:

```text
build/002-ui-refinement
```

Commit-Vorschlag:

```text
feat: refine BeBlog Maker Tools UI for build 002
```
