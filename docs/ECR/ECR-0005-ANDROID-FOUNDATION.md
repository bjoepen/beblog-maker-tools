# ECR-0005 – Android Foundation

## Status

Genehmigt / umgesetzt in Build 005.

## Anlass

BeBlog Maker Tools soll direkt an Werkbank, CNC-Maschine oder 3D-Drucker auf einem Android-Gerät nutzbar sein. Die Android-Build-Toolchain soll dafür nicht zwingend lokal auf dem Mac installiert werden müssen.

## Entscheidung

- vorhandene Tauri-2-/Svelte-/TypeScript-Codebasis weiterverwenden
- Android als zweite Zielplattform aktivieren
- mobile App-Shell ergänzen, Desktop-Shell erhalten
- Android-Debug-APK in GitHub Actions erzeugen
- vorerst keine Release-Signatur und kein Play-Store-Prozess

## Folgen

### Positiv

- gleiche Rechnerlogik auf macOS und Android
- kein zweites natives Android-Projekt als eigenständige Produktcodebasis
- APK kann zentral und reproduzierbar in GitHub gebaut werden
- Werkstattnutzung auf Smartphone/Tablet

### Bewusst akzeptierte Einschränkung

Build 005 verwendet eine Debug-Signatur. Für stabile Updates und öffentliche Distribution wird später ein eigener privater Release-Key benötigt.
