# Entwicklung

## Voraussetzungen auf macOS

1. Xcode Command Line Tools installieren:
   ```bash
   xcode-select --install
   ```
2. Rust über rustup installieren und aktualisieren.
3. Node.js 22 oder neuer verwenden.
4. pnpm installieren/aktivieren.

## Abhängigkeiten

```bash
pnpm install
```

## Web-Frontend ohne Tauri starten

```bash
pnpm dev
```

## Tauri Development Build

```bash
pnpm tauri:dev
```

## Tests

```bash
pnpm test
```

## TypeScript-Prüfung

```bash
pnpm check
```

## Gesamte Frontend-Validierung

```bash
pnpm validate
```

## Production Build

```bash
pnpm tauri:build
```

## Neue Rechner hinzufügen

1. Reine Formel unter `src/core/calculations/` anlegen.
2. Unit Tests schreiben.
3. Werkzeug-UI unter `src/tools/<tool-id>/` anlegen.
4. Werkzeug in `src/app/toolRegistry.ts` registrieren.
5. Navigation in `App.svelte` um die Komponente ergänzen.
6. Dokumentation und CHANGELOG aktualisieren.
7. Definition of Done prüfen.
