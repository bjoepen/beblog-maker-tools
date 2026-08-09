# Upgrade auf Build 002.1 – Official Blog Logo Alignment

Build 002.1 ist ein kleines Folgeupdate zu Build 002.

## Enthalten

- Austausch der bisherigen Brand-Mark gegen die originale SVG aus dem Blog
- neues Asset `src/assets/beblog-mark.svg`
- `BrandMark.svelte` rendert jetzt die offizielle SVG direkt

## Nicht verändert

- Rechnerlogik
- Navigationsstruktur
- Eingaben, Ergebnisse und Formeln
- Build-002-Designsystem außerhalb des Markenzeichens

## Prüfschritte

1. `pnpm install`
2. `pnpm validate`
3. `pnpm tauri:dev`
4. Prüfen, ob das Logo in der Sidebar exakt dem Blog-Zeichen entspricht.
