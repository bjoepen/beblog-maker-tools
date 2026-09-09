# Android APK über GitHub Actions

## Ziel

BeBlog Maker Tools kann ab Build 005 als Android-APK gebaut werden, ohne die vollständige Android-Entwicklungsumgebung auf dem lokalen Mac installieren zu müssen.

## Workflow

Datei:

```text
.github/workflows/android-apk.yml
```

Der Workflow verwendet einen GitHub-gehosteten Ubuntu-24.04-Runner. Die offiziellen GitHub-Runner-Images enthalten Android SDK, Build Tools und Android NDK. Java und die benötigten Rust-Android-Targets werden im Workflow explizit eingerichtet.

## Manueller Start

1. GitHub-Repository öffnen.
2. `Actions` wählen.
3. `Android APK` wählen.
4. `Run workflow` anklicken.
5. Branch `main` auswählen.
6. `Run workflow` starten.
7. Auf grünen Abschluss warten.
8. Am Ende der Workflow-Seite das APK-Artefakt herunterladen.

## Ergebnis

Artefaktname:

```text
BeBlog-Maker-Tools-0.2.2-Build-007-Android-Debug-APK
```

GitHub verpackt Workflow-Artefakte beim Download als ZIP. Nach dem Entpacken liegt darin die Android-APK.

## Debug statt Release

Build 005 erzeugt absichtlich ein Debug-APK. Dadurch ist für den ersten Android-Meilenstein kein eigener Android-Keystore notwendig.

Für eine spätere öffentliche bzw. dauerhaft updatefähige Distribution wird ein eigener privater Keystore erzeugt und sicher als GitHub Secrets hinterlegt. Keystore und Passwörter dürfen niemals ins Repository committed werden.

## Lokaler Android-Build – optional

Nur falls später gewünscht und eine vollständige Android-Toolchain lokal vorhanden ist:

```bash
pnpm tauri android init
pnpm tauri android build --debug --apk
```

Dieser lokale Weg ist **keine Voraussetzung** für Build 005.
