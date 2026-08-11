# Validierung

## Build 002 – UI Refinement

Build 002 verändert primär die UI. Die Berechnungslogik aus Build 001 bleibt getrennt und wird weiterhin durch Unit Tests abgesichert.

## Lokale Prüfung auf macOS

Nach dem Entpacken bzw. Auschecken:

```bash
pnpm install
pnpm validate
```

`pnpm validate` führt aus:

```text
pnpm check
pnpm test
pnpm build
```

Erwartung:

- TypeScript endet ohne Fehler.
- Vitest meldet alle Tests erfolgreich.
- Vite erzeugt den Produktionsbuild unter `dist/`.

Die in Build 001 aufgetretene Meldung `Cannot find name 'process'` ist in Build 002 dauerhaft behoben: `@types/node` ist als Dev Dependency enthalten und `node` ist in `tsconfig.json` registriert.

## Tauri-Prüfung

```bash
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Im Development-Build prüfen:

- App startet.
- Sidebar zeigt Zahnriemen, Achsskalierung und Drehzahl & Vorschub.
- aktive Navigation verwendet BeBlog-Blau.
- Website-Link zeigt `blog.beblog.de`.
- Eingabewerte werden direkt neu berechnet.
- Punkt und Komma funktionieren als Dezimaltrennzeichen.
- Zurücksetzen stellt die Startwerte wieder her.
- Berechnungsgrundlagen lassen sich ein- und ausklappen.

## Fachliche Regression

Die Unit Tests unter `tests/` müssen unverändert erfolgreich sein. Build 002 darf keine Änderung an den Kernformeln einführen.

## Release-Build

```bash
pnpm tauri:build
```

Erwartete Bundles befinden sich anschließend unter:

```text
src-tauri/target/release/bundle/
```

## Bereitstellungsumgebung

Die Erstellung dieses Repository-Pakets erfolgte ohne Netzwerkzugriff und ohne installierte pnpm-/Rust-/Tauri-Abhängigkeiten. Deshalb müssen `pnpm validate`, `cargo check` und `pnpm tauri:build` auf dem Ziel-Mac ausgeführt werden.


## Build 003 – zusätzliche Prüfpunkte

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Manuell zusätzlich prüfen:

- Kategorie 3D-Druck mit drei Werkzeugen
- Beispiel Volumenstrom: 0,45 × 0,20 × 150 = 13,50 mm³/s
- bei 18 mm³/s Limit ergibt sich 200 mm/s maximale Geschwindigkeit
- Filamentrechnung funktioniert in beiden Richtungen
- Maßkorrektur: 20,00 / 19,80 × 100 ≈ 101,010 %


## Build 004 – zusätzliche Prüfpunkte

- Schraubenfinder: M6 Sechskant → SW 10 mm
- Schraubenfinder: M6 ISO 4762 → Innensechskant 5 mm
- Schraubenfinder: M10 ISO 4017 → SW 16 mm
- Gewinde & Bohrungen: M6 → Kernloch 5,0 mm
- Gewinde & Bohrungen: M8 → Kernloch 6,8 mm
- Lochkreis: Ø80 mm / 4 Bohrungen / 0° → (40,0), (0,40), (-40,0), (0,-40)
- Wechsel zwischen allen neun Werkzeugen ohne Fehler
- Sidebar bleibt bei Standardfensterhöhe bedienbar


## Build 005 – Android

Shared-/Desktop-Validierung:

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

Android wird verbindlich über `.github/workflows/android-apk.yml` validiert. Nach Merge muss mindestens ein manueller Workflow-Lauf erfolgreich sein und eine installierbare APK erzeugen. Siehe `BUILD-005-VALIDATION-REPORT.md`.
