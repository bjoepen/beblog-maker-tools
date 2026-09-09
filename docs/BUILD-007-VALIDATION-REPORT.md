# Build 007 – Validation Report

**Version:** 0.2.2  
**Build:** 007  
**Feature:** Estlcam Essentials

## Automatisierte fachliche Tests

Abgedeckt durch `tests/estlcamAxis.test.ts`:

- GT3-Zahnriemen, 20 Zähne, 200 Schritte/U, 1/16 → 3200 Schritte/U und 60 mm/U
- 10x2-Spindel, 200 Schritte/U, 1/16 → 3200 Schritte/U und 2 mm/U
- Kalibrierung 100 mm Soll / 98,7 mm Ist / 5 mm aktueller Weg → 4,935 mm/U
- Fehlerbehandlung bei ungültigen Eingaben

## Lokale Gates

Nach dem Einspielen ausführen:

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

Erwartung:

- TypeScript Check PASS
- Vitest PASS
- Vite Production Build PASS
- Rust Check PASS

## Real-World-Test Estlcam 11

Empfohlener Abnahmetest:

1. bekannte Achse wählen
2. mechanische Daten und Microstepping in Maker Tools eingeben
3. Werte „Schritte je Umdrehung“ und „Weg je Umdrehung“ mit Estlcam vergleichen/eintragen
4. „Steuerung programmieren“
5. z. B. 100 mm verfahren
6. tatsächlichen Weg messen
7. bei Abweichung Kalibrierung verwenden
8. erneut programmieren und messen

## Android / Tablet

Prüfen, dass:

- das neue Werkzeug in der mobilen Navigation erscheint
- alle Felder touchbedienbar sind
- Kalibrierungsbereich ohne horizontales Scrollen nutzbar bleibt

## CI-Artefakte

Nach Merge nach `main`:

- Android APK Workflow
- macOS App Workflow

Die Artefaktnamen wurden auf **0.2.2 / Build 007** aktualisiert.
