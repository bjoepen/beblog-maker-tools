# Validation Report – Build 005

## Automatisch/statisch im Release-Paket geprüft

- JSON-Syntax von `package.json` und `src-tauri/tauri.conf.json`
- Produktversion 0.2.0 synchronisiert
- Paketkennung `de.beblog.makertools`
- Android `minSdkVersion` 24 gesetzt
- Tauri `mobile_entry_point` aktiviert
- Android-Actions-Workflow vorhanden
- APK-Artefakt-Pfad als Wildcard konfiguriert
- mobile CSS-Breakpoints vorhanden
- mobile Navigation in `App.svelte` vorhanden
- bestehende neun Werkzeuge weiterhin registriert

## Auf dem Entwickler-Mac zu prüfen

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Zusätzlich responsive UI bei ≤ 760 px prüfen.

## Auf GitHub zu prüfen

Nach Merge:

```text
Actions → Android APK → Run workflow
```

Erwartung:

- Workflow grün
- APK-Artefakt vorhanden

## Auf Android zu prüfen

- APK installierbar
- App startet
- Navigation funktioniert
- Eingaben und Ergebnisse funktionieren
- vorhandene neun Tools sind erreichbar

Der reale Android-Build kann in dieser Lieferumgebung nicht ausgeführt werden. GitHub Actions ist der verbindliche Android-Build- und Validierungspunkt für Build 005.
