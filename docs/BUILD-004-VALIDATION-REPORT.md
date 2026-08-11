# Build 004 – Validation Report

## Statische Prüfungen bei Paketerstellung

- Repository-Struktur aus Build 003 übernommen
- drei neue Tool-Module registriert
- Berechnungslogik für Lochkreis UI-unabhängig umgesetzt
- Referenzdaten für Schrauben/Gewinde zentralisiert
- Unit Tests für Fastener-Referenz und Lochkreis ergänzt
- Produktversion auf 0.1.2 gesetzt
- Build- und Git-Dokumentation ergänzt

## Auf dem Ziel-Mac auszuführen

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Der vollständige Tauri-/Rust-Compile ist erst auf der Zielumgebung verbindlich abgeschlossen.
