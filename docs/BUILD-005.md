# Build 005 – Android Foundation

**Produkt:** BeBlog Maker Tools  
**Version:** 0.2.0  
**Build:** 005  
**Codename:** Android Foundation  
**Branch:** `build/005-android-foundation`

## Ziel

Build 005 erweitert BeBlog Maker Tools erstmals auf Android. Es werden bewusst **keine neuen Rechner** ergänzt. Die vorhandenen neun Werkzeuge bleiben fachlich unverändert und erhalten eine mobile, touchfreundliche App-Shell.

Das Ziel ist ein praktischer Werkstatt-Einsatz auf Android-Handy oder -Tablet, ohne dass für den normalen APK-Build Android Studio, SDK oder NDK auf dem eigenen Mac installiert werden müssen. Der Android-Build läuft über GitHub Actions.

## Enthalten

- Tauri-2-Android-Freigabe über den vorhandenen Rust-/Svelte-Kern
- mobile Navigation als ausfahrbares Werkzeugmenü
- kompakter mobiler BeBlog-Header
- Touch-Ziele von mindestens etwa 44 px für zentrale Bedienelemente
- mobile Eingabe- und Ergebnisdarstellung
- Safe-Area-Unterstützung für Geräte mit Displayausschnitten
- Paketkennung `de.beblog.makertools`
- Mindestversion Android 7 / SDK 24
- `mobile_entry_point` für den Tauri-Rust-Einstiegspunkt
- GitHub-Actions-Workflow `.github/workflows/android-apk.yml`
- automatisch erzeugtes installierbares **Debug-APK-Artefakt**

## Was Build 005 bewusst nicht tut

- keine neuen Rechner
- kein Google-Play-Release
- kein produktiver Release-Keystore
- keine automatische Veröffentlichung im Play Store
- keine Cloud-Funktionen
- keine Android-spezifische Datenhaltung

## Desktop bleibt erhalten

Ab einer Breite oberhalb des Mobile-Breakpoints bleibt die bekannte Sidebar-Oberfläche aus Build 004 erhalten. Die mobile Navigation wird ausschließlich bei kleinen Viewports aktiviert.

## Android-Build über GitHub

Der Workflow kann unter **Actions → Android APK → Run workflow** manuell gestartet werden. Zusätzlich läuft er bei relevanten Änderungen auf `main`.

Er führt aus:

1. Checkout
2. pnpm / Node.js / Java / Rust bereitstellen
3. Android-Rust-Targets bereitstellen
4. `pnpm install`
5. `pnpm validate`
6. `pnpm tauri android init --ci --skip-targets-install`
7. BeBlog-App-Icon anwenden
8. `pnpm tauri android build --debug --apk`
9. erzeugte APK als GitHub-Actions-Artefakt hochladen

## Warum zunächst Debug-APK?

Ein Android-APK muss zur Installation signiert sein. Für Build 005 verwenden wir bewusst den Android-Debug-Build, damit noch **kein privater Release-Keystore** und keine GitHub Secrets notwendig sind. Das APK eignet sich für den persönlichen Werkstatteinsatz und Tests.

Wichtig: Debug-Schlüssel auf kurzlebigen CI-Runnern können sich zwischen Workflow-Läufen unterscheiden. Falls Android ein späteres APK wegen einer abweichenden Signatur nicht als Update akzeptiert, die vorherige Build-005-Testversion deinstallieren und die neue APK frisch installieren. Ein stabiler privater Signaturschlüssel ist ein eigener späterer Release-Schritt.

## Definition of Done

- [x] Produktversion 0.2.0
- [x] Android-Paketkennung vorhanden
- [x] Android Mindest-SDK dokumentiert
- [x] Tauri Mobile Entry Point aktiviert
- [x] mobile Navigation implementiert
- [x] Touch-Optimierungen implementiert
- [x] Desktop-Shell erhalten
- [x] GitHub-Actions-APK-Workflow vorhanden
- [x] APK-Upload als Workflow-Artefakt konfiguriert
- [x] Git-Workflow für Build 005 dokumentiert
- [ ] echter GitHub-Actions-APK-Lauf im Zielrepository erfolgreich
- [ ] APK auf realem Android-Gerät installiert und Smoke-Test durchgeführt

Die letzten beiden Punkte werden nach dem Merge im realen GitHub-Repository abgeschlossen.
