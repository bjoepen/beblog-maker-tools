# Validation Report – Build 006

**Version:** 0.2.1  
**Datum:** 2026-08-11

## Statische Validierung in der Lieferumgebung

Geprüft wurden:
- Versionssynchronität in `package.json`, `Cargo.toml` und `tauri.conf.json`
- Tool Registry und App-Routing
- neue Icon-Typen
- neue Rechenlogik und Testfälle
- UI-Texte PASS/WARN/FAIL
- einmalige sichtbare Versionsangabe
- Footer „Entwickelt mit ❤️ für Maker“
- Build-006-Dokumentation und rsync-Pfade

## Fachliche Testfälle

1. Motor 2,0 A / Treiber 0,71–3,2 A RMS / gewählt 2,0 A → PASS
2. Motor 2,0 A / Treiber max. 1,56 A RMS → WARN, reduziertes Drehmoment
3. Motor 1,0 A / Treiber min. 1,3 A RMS → FAIL, keine sichere Stromstufe
4. Motor 2,0 A / gewählt 2,4 A RMS bei vorhandener niedrigerer Stufe → WARN
5. Peak-Angabe wird für die Bewertung auf RMS normalisiert

## Lokale Projektvalidierung nach dem Upgrade

Auf dem Entwicklungs-Mac ausführen:

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

Danach beide Zielplattformen prüfen:

- macOS: `pnpm tauri:dev`
- Android: GitHub Action **Android APK** starten und APK auf realem Gerät testen

## Status

Die Build-006-Lieferung ist statisch vorbereitet. Die finale GO-Freigabe erfolgt nach dem oben dokumentierten lokalen `pnpm validate`, Rust-Check und dem Android-APK-Praxistest.
