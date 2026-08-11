# macOS-Build über GitHub Actions

## Ziel

Build 006 ergänzt neben dem bestehenden Android-Workflow einen eigenen GitHub-Actions-Workflow für macOS. Dadurch kann BeBlog Maker Tools nach einem Merge nach `main` ohne lokalen macOS-Build als installierbares Artefakt erzeugt werden.

Der Workflow liegt unter:

```text
.github/workflows/macos-app.yml
```

In GitHub erscheint er unter **Actions → macOS App**.

## Was der Workflow erzeugt

Der Workflow läuft auf einem GitHub-macOS-Runner und führt unter anderem aus:

```bash
pnpm install --no-frozen-lockfile
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri build --bundles app,dmg
```

Tauri erzeugt dabei ein macOS-App-Bundle und ein DMG.

Als GitHub-Artefakt wird anschließend bereitgestellt:

```text
BeBlog-Maker-Tools-0.2.1-Build-006-macOS
├── BeBlog-Maker-Tools-0.2.1-Build-006-macOS-App.zip
└── BeBlog-Maker-Tools-0.2.1-Build-006-macOS.dmg
```

Die `.app` wird absichtlich mit macOS `ditto` als ZIP verpackt. So bleiben die Eigenschaften des App-Bundles beim Transport zuverlässig erhalten.

## Workflow manuell starten

1. Repository auf GitHub öffnen.
2. **Actions** auswählen.
3. Links **macOS App** auswählen.
4. **Run workflow** anklicken.
5. Branch `main` auswählen.
6. **Run workflow** bestätigen.
7. Warten, bis der Lauf grün abgeschlossen ist.
8. Den Lauf öffnen und unten unter **Artifacts** das Artefakt `BeBlog-Maker-Tools-0.2.1-Build-006-macOS` herunterladen.

## Installation über DMG

Für den normalen Gebrauch ist die DMG-Datei der bequemste Weg:

1. Artefakt-ZIP von GitHub entpacken.
2. `BeBlog-Maker-Tools-0.2.1-Build-006-macOS.dmg` öffnen.
3. App nach **Programme** ziehen.

## Direkte Nutzung der `.app`

Alternativ:

1. `BeBlog-Maker-Tools-0.2.1-Build-006-macOS-App.zip` entpacken.
2. `BeBlog Maker Tools.app` nach `/Applications` bzw. **Programme** kopieren.

## Unsigned Build und Gatekeeper

Dieser Build ist bewusst **nicht mit einer Apple Developer ID signiert und nicht notarisiert**. Das ist für den vorgesehenen Eigengebrauch akzeptiert, kann aber dazu führen, dass macOS beim ersten Start eine Sicherheitswarnung anzeigt.

Wenn macOS die App blockiert, nicht irgendwelche globalen Sicherheitsfunktionen abschalten. Stattdessen die von macOS angebotene Einzel-Freigabe für genau diese App verwenden, z. B. über **Systemeinstellungen → Datenschutz & Sicherheit → Dennoch öffnen**, sofern diese Option nach dem ersten Startversuch angeboten wird.

Für eine spätere öffentliche Distribution wäre Signierung und Notarisierung als eigener Release-Schritt vorzusehen.

## Lokaler Fallback

Der GitHub-Workflow ersetzt den lokalen Build nicht vollständig. Bei Bedarf kann weiterhin lokal gebaut werden:

```bash
cd ~/Projekte/beblog-maker-tools
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri build --bundles app,dmg
```

Die lokalen Bundles liegen anschließend typischerweise unter:

```text
src-tauri/target/release/bundle/macos/
src-tauri/target/release/bundle/dmg/
```

## Build-006-Status

Mit diesem Drop-in stehen für Build 006 beide vorgesehenen Plattformwege zur Verfügung:

```text
GitHub Actions
├── Android APK
└── macOS App + DMG
```
