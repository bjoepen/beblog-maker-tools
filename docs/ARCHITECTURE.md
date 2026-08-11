# Architektur

## Ziel

BeBlog Maker Tools trennt konsequent Desktop-Shell, UI und Berechnungslogik. Dadurch bleiben Formeln testbar und neue Werkzeuge können ergänzt werden, ohne die Navigation oder den Tauri-Unterbau neu zu entwerfen.

## Ebenen

1. **App Shell** – Svelte-Oberfläche, Sidebar, Layout.
2. **Tool Registry** – zentrale Metadaten der sichtbaren Werkzeuge.
3. **Calculator Modules** – jeweilige Eingaben, Ergebnisse und Erklärungen.
4. **Shared Core** – reine TypeScript-Funktionen für Formeln, Parsing und Formatierung.
5. **Tauri/Rust** – native Desktop-Funktionen; Build 001 hält diese Ebene absichtlich minimal.

## Regel für Berechnungen

Eine Kernfunktion darf keine Svelte- oder DOM-Abhängigkeit besitzen. Sie erhält Daten, validiert sie und liefert ein Ergebnisobjekt zurück. Unit Tests greifen direkt auf diese Funktionen zu.

## Estlcam

Estlcam ist kein Alias für das Standard-Steps/mm-Profil. Das Zielsystem erhält einen eigenen Modus. Build 001 enthält nur die architektonische Trennung. Die konkrete Feldzuordnung wird vor einer späteren Implementierung fachlich verifiziert.


## Build 003 – Erweiterung der Calculator Modules

```text
src/core/calculations/
├── volumetricFlow.ts
├── filamentCost.ts
└── dimensionalCorrection.ts

src/tools/
├── volumetric-flow/
├── filament-cost/
└── dimensional-correction/
```

Die neuen Module folgen derselben Trennung wie die Foundation: reine TypeScript-Berechnung im Core, Svelte ausschließlich für Darstellung und Interaktion.


## Android Foundation (Build 005)

Desktop und Android verwenden dieselben Svelte-Komponenten, dieselbe Tool Registry und dieselbe TypeScript-Rechenlogik. Die Plattformunterscheidung liegt primär in der responsiven App-Shell und im Tauri-Buildziel. Android wird über `tauri android init/build` erzeugt; das generierte `src-tauri/gen/` bleibt Build-Artefakt und ist weiterhin gitignored.
