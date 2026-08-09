# Build 001 – Foundation

**Produktversion:** 0.1.0  
**Build:** 001  
**Codename:** Foundation

## Ziel

Build 001 schafft die belastbare Basis für BeBlog Maker Tools. Der Schwerpunkt liegt auf App-Shell, modularer Rechnerarchitektur und drei kleinen, tatsächlich nutzbaren Basismodulen.

## Enthalten

- Tauri-2-Desktop-Shell für macOS
- Svelte-5-/TypeScript-Oberfläche
- Sidebar und Tool Registry
- Zahnriemenrechner
- Achsskalierung für Zahnriemen und Spindel
- GRBL/grblHAL- und LinuxCNC-Ausgabe
- eigener Estlcam-Modus als verifizierungsbedürftiges Zielprofil
- Drehzahl- und Vorschubrechner
- Unit Tests und GitHub CI
- vollständige Foundation-Dokumentation

## Bewusste Grenze

Estlcam erhält in diesem Build noch keine vermeintlich fertigen Einstellwerte. Die konkrete Estlcam-Logik wird erst nach fachlicher Verifikation umgesetzt. Dies ist Bestandteil der freigegebenen Foundation und kein fehlender Standard-Output.

## Commit-Vorschlag

```text
feat: complete BeBlog Maker Tools build 001 foundation
```
