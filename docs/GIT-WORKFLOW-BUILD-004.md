# Git-Workflow – Build 004

Dieser Ablauf ist für Build 004 verbindlich.

## 1. Hauptbranch aktualisieren

```bash
git switch main
git pull origin main
git status
```

Nur bei sauberem Arbeitsverzeichnis fortfahren.

## 2. Build-Branch erstellen

```bash
git switch -c build/004-workshop-essentials
```

## 3. Build-Paket einspielen

Den Inhalt des gelieferten Ordners `beblog-maker-tools/` in das lokale Repository übernehmen. Bestehende Dateien werden durch die Build-004-Versionen ersetzt; eigene nicht zum Build gehörende Dateien nicht blind löschen.

## 4. Abhängigkeiten synchronisieren

```bash
pnpm install
```

## 5. Vollständig validieren

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
pnpm tauri:dev
```

In der App alle drei neuen Werkstatt-Werkzeuge kurz prüfen.

## 6. Änderungen kontrollieren

```bash
git status
git diff
```

Es dürfen keine Konfliktmarker vorhanden sein:

```bash
grep -R -nE '<<<<<<<|=======|>>>>>>>' package.json pnpm-lock.yaml src tests
```

## 7. Commit

```bash
git add .
git commit -m "feat: add workshop essentials for build 004"
```

## 8. Push

```bash
git push -u origin build/004-workshop-essentials
```

## 9. Pull Request

Auf GitHub:

```text
build/004-workshop-essentials → main
```

## 10. Falls GitHub Merge-Konflikte meldet

Zuerst den aktuellen Hauptbranch in den Build-Branch holen:

```bash
git switch build/004-workshop-essentials
git fetch origin
git merge origin/main
```

### package.json

Konfliktmarkierungen `<<<<<<<`, `=======`, `>>>>>>>` entfernen und die fachlich vollständige Build-004-Version zusammenführen. Danach JSON prüfen:

```bash
python3 -m json.tool package.json >/dev/null
```

### pnpm-lock.yaml

Das Lockfile nicht zeilenweise von Hand zusammenbauen. Nach korrekt gelöstem `package.json`:

```bash
rm pnpm-lock.yaml
pnpm install
```

Anschließend erneut:

```bash
pnpm validate
git add package.json pnpm-lock.yaml
git add .
git commit -m "merge: resolve Build 004 conflicts with main"
git push
```

Der bereits geöffnete Pull Request wird automatisch aktualisiert.

## 11. Nach dem Merge

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
```

## 12. Build-Branch aufräumen

Erst wenn Build 004 sicher in `main` enthalten ist:

```bash
git branch -d build/004-workshop-essentials
git push origin --delete build/004-workshop-essentials
```

## Verbindliche Projektregel

Jeder neue Build wird ausschließlich von einem aktuellen `main` abgezweigt und ausschließlich per Pull Request nach `main` zurückgeführt.
