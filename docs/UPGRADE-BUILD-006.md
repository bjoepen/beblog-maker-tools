# Upgrade auf Build 006

Build 006 wird ausschließlich von aktuellem `main` abgezweigt und per Pull Request wieder nach `main` zurückgeführt.

## Verbindliche Pfade auf macOS

Neuer entpackter Build:

```text
~/Downloads/beblog-maker-tools/
```

Lokales Git-Repository:

```text
~/Projekte/beblog-maker-tools/
```

Der ZIP-Download entpackt sich direkt in den Ordner `beblog-maker-tools`; es gibt keinen zusätzlichen Build-Unterordner.

## 1. main aktualisieren

```bash
cd ~/Projekte/beblog-maker-tools
git switch main
git pull origin main
git status
```

`git status` muss einen sauberen Arbeitsbaum melden.

## 2. Build-Branch anlegen

```bash
git switch -c build/006-motor-driver-compatibility
```

## 3. rsync Dry Run

Zuerst ausschließlich anzeigen, was kopiert würde:

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Wichtig:
- `.git/` bleibt ausgeschlossen und schützt die vorhandene Repository-Historie.
- der abschließende `/` am Quellordner kopiert dessen **Inhalt** in das bestehende Repo.
- versteckte Dateien wie `.github/`, `.gitignore`, `.editorconfig` werden von rsync automatisch berücksichtigt.

## 4. Build einspielen

Wenn der Dry Run plausibel aussieht:

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

## 5. Änderungen prüfen

```bash
cd ~/Projekte/beblog-maker-tools
git status
git diff
```

Erwartet werden insbesondere Änderungen an App/Registry/CSS, das neue Motor-Treiber-Werkzeug, Tests und Build-006-Dokumentation.

## 6. Abhängigkeiten und Validierung

```bash
pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

**Stop/Go:** Nur fortfahren, wenn alle drei Befehle ohne Fehler enden.

## 7. macOS-Praxistest

```bash
pnpm tauri:dev
```

Prüfen:
- Motor & Treiber in CNC-Navigation sichtbar
- PASS/WARN/FAIL reagieren plausibel
- Version nur einmal sichtbar
- Footer zeigt „Entwickelt mit ❤️ für Maker“

## 8. Commit

```bash
git status
git diff
git add .
git commit -m "feat: add motor driver compatibility for build 006"
```

## 9. Push

```bash
git push -u origin build/006-motor-driver-compatibility
```

## 10. Pull Request

Auf GitHub:

```text
build/006-motor-driver-compatibility → main
```

Vor dem Merge CI prüfen.

## 11. Nach dem Merge

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

## 12. Branch bereinigen

```bash
git branch -d build/006-motor-driver-compatibility
git push origin --delete build/006-motor-driver-compatibility
```

## 13. Android prüfen

GitHub → **Actions → Android APK → Run workflow**.

Nach erfolgreichem Lauf das APK-Artefakt laden, installieren und das neue Werkzeug auf dem Tablet prüfen.
