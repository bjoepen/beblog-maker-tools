# Technische Quellen – Build 005

Für Android-spezifische Entscheidungen wurden ausschließlich aktuelle Primärquellen verwendet.

## Tauri

- Tauri Prerequisites / Android: https://v2.tauri.app/start/prerequisites/
- Tauri CLI / `android init` und `android build`: https://v2.tauri.app/reference/cli/
- Tauri Google Play / APK-Build und Mindest-SDK: https://v2.tauri.app/distribute/google-play/
- Tauri Android Code Signing: https://v2.tauri.app/distribute/sign/android/

## GitHub

- GitHub Actions workflow artifacts: https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts
- Download workflow artifacts: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts
- GitHub-hosted runner images: https://github.com/actions/runner-images

## Verbindliche Ableitungen

- Tauri unterstützt `android init` im CI-Modus.
- `tauri android build --apk` erzeugt Android-APKs; `--debug` baut mit Debug-Flag.
- Tauri unterstützt mindestens Android 7.0 / SDK 24.
- GitHub Actions kann Build-Ausgaben als Workflow-Artefakte speichern und bereitstellen.
- Android-APK/AAB benötigen für Distribution eine Signatur; produktive Signaturschlüssel gehören nicht in das Repository.
