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
