# Git-Workflow – Build 005

Dieser Ablauf ist für Build 005 verbindlich.

## 1. `main` aktualisieren

```bash
git switch main
git pull origin main
git status
```

Nur bei sauberem Arbeitsverzeichnis fortfahren.

## 2. Build-Branch erstellen

```bash
git switch -c build/005-android-foundation
```

## 3. Build-Paket einspielen

Den Inhalt des gelieferten Ordners `beblog-maker-tools/` in das lokale Repository übernehmen. Bestehende Build-Dateien ersetzen. Das bereits vorhandene `pnpm-lock.yaml` bleibt erhalten und wird im nächsten Schritt von pnpm aktualisiert.

## 4. Abhängigkeiten synchronisieren

```bash
pnpm install
```

## 5. Shared-/Desktop-Code validieren

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

Danach zusätzlich die mobile Darstellung über `pnpm dev` bei schmalem Browserfenster prüfen.

## 6. Änderungen kontrollieren

```bash
git status
git diff
```

Konfliktmarker ausschließen:

```bash
grep -R -nE '<<<<<<<|=======|>>>>>>>' package.json pnpm-lock.yaml src src-tauri tests .github || true
```

`package.json` zusätzlich prüfen:

```bash
python3 -m json.tool package.json >/dev/null
```

## 7. Commit

```bash
git add .
git commit -m "feat: add Android foundation for build 005"
```

## 8. Push

```bash
git push -u origin build/005-android-foundation
```

## 9. Pull Request

Auf GitHub einen Pull Request öffnen:

```text
build/005-android-foundation → main
```

Vor dem Merge müssen die normale CI und die Pull-Request-Prüfungen erfolgreich sein.

## 10. Merge-Konflikte

Falls GitHub Konflikte meldet:

```bash
git switch build/005-android-foundation
git fetch origin
git merge origin/main
```

### `package.json`

Konfliktmarker entfernen und die vollständige Build-005-Version zusammenführen. Die Version muss `0.2.0` bleiben und die Android-Skripte müssen vorhanden sein.

Prüfen:

```bash
python3 -m json.tool package.json >/dev/null
```

### `pnpm-lock.yaml`

Das Lockfile nicht manuell zeilenweise mergen. Nach korrekt gelöstem `package.json`:

```bash
rm pnpm-lock.yaml
pnpm install
```

Danach:

```bash
pnpm validate
git add .
git commit -m "merge: resolve Build 005 conflicts with main"
git push
```

Der bestehende Pull Request aktualisiert sich automatisch.

## 11. Nach dem Merge `main` aktualisieren

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

## 12. Android-APK auf GitHub bauen

Im Repository:

```text
Actions → Android APK → Run workflow → Run workflow
```

Der Job **Build installable debug APK** muss erfolgreich enden.

Danach auf der Workflow-Seite unter **Artifacts** herunterladen:

```text
BeBlog-Maker-Tools-0.2.0-Build-005-Android-Debug-APK
```

Das heruntergeladene GitHub-Artefakt ist ein ZIP. Dieses entpacken; darin liegt die `.apk`.

## 13. APK auf Android installieren

APK auf das Android-Gerät übertragen, öffnen und die Installation aus unbekannter Quelle für die verwendete Datei-/Browser-App erlauben, falls Android danach fragt.

Anschließend Smoke-Test:

- App startet
- BeBlog-Logo korrekt
- Werkzeugmenü funktioniert
- mindestens ein Tool aus jeder Kategorie öffnen
- numerische Eingabe testen
- Ergebnisdarstellung prüfen
- externer Blog-Link öffnet sich

## 14. Build-Branch aufräumen

Erst wenn Build 005 sicher in `main` enthalten ist:

```bash
git branch -d build/005-android-foundation
git push origin --delete build/005-android-foundation
```

## Verbindliche Projektregel

Jeder neue Build wird ausschließlich von einem aktuellen `main` abgezweigt und ausschließlich per Pull Request nach `main` zurückgeführt.
