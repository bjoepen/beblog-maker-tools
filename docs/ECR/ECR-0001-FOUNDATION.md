# ECR-0001 – Foundation Architecture

**Status:** Approved  
**Build:** 001  
**Version:** 0.1.0

## Anlass

Aus dem bestehenden Zahnriemenrechner soll eine kompakte BeBlog-Werkzeugsuite entstehen, ohne den Einzelrechner zu einer überladenen Anwendung auszubauen.

## Entscheidung

- neues Repository `beblog-maker-tools`
- Tauri 2 + Svelte + TypeScript + Rust
- modulare Tool Registry
- UI-unabhängige Rechenlogik
- drei Startmodule: Zahnriemen, Achsskalierung, Drehzahl & Vorschub
- Estlcam als eigener, separat zu verifizierender Zielmodus

## Nicht Bestandteil

Siehe `docs/FOUNDATION.md`, Abschnitt „Nicht Bestandteil von Build 001“.
