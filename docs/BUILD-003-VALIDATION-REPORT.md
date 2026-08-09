# Build 003 – Validation Report

## Durchgeführte Prüfungen in der Build-Umgebung

- JSON-Konfigurationen syntaktisch geprüft
- Quellcode auf unbeabsichtigte Git-Konfliktmarker geprüft
- Icon-Referenzen gegen die Icon-Typdefinition geprüft
- neue TypeScript-Berechnungsmodule mit Node.js Type-Stripping direkt ausgeführt
- Referenzwerte geprüft:
  - Volumenstrom: `0,45 × 0,20 × 150 = 13,50 mm³/s`
  - maximale Geschwindigkeit: `18 / (0,45 × 0,20) = 200 mm/s`
  - Maßkorrektur: `20 / 19,8 × 100 ≈ 101,010 %`
  - Filament Länge → Gewicht → Länge als Roundtrip geprüft

## Noch auf dem Ziel-Mac auszuführen

Die Build-Umgebung besitzt keinen installierten pnpm-/Rust-Toolchain-Stack und keinen Netzwerkzugriff zum npm-Registry. Deshalb müssen die folgenden verbindlichen Checks auf dem Entwicklungs-Mac erfolgen:

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Erst nach diesen Prüfungen ist Build 003 gemäß Definition of Done vollständig freigegeben.
