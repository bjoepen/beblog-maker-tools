# Git Workflow – Build 003

Dieser Ablauf ist für Build 003 verbindlich und dient als Vorlage für alle folgenden Builds.

## Grundregel

> Jeder neue Build wird ausschließlich von einem aktuellen `main` abgezweigt und ausschließlich per Pull Request wieder nach `main` zurückgeführt.

## 1. Ausgangslage prüfen

```bash
git switch main
git pull origin main
git status
```

Erwartung:

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

**STOP:** Ist der Arbeitsbaum nicht sauber, keine neue Build-Branch anlegen. Änderungen zuerst committen, sichern oder verwerfen.

## 2. Build-Branch erstellen

```bash
git switch -c build/003-3d-printing-essentials
```

Prüfen:

```bash
git branch --show-current
```

Erwartung:

```text
build/003-3d-printing-essentials
```

## 3. Build-Paket einspielen

Die Dateien aus dem Build-003-Paket in das lokale Repository übernehmen. Danach:

```bash
git status
git diff --stat
```

## 4. Abhängigkeiten synchronisieren

```bash
pnpm install
```

Falls `package.json` oder `pnpm-lock.yaml` verändert werden, gehören beide zum Build-Commit.

## 5. Vollständige Validierung

```bash
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml
```

Anschließend App starten:

```bash
pnpm tauri:dev
```

Manuell prüfen:

- bestehende drei Werkzeuge weiterhin erreichbar
- neue Kategorie `3D-Druck` sichtbar
- Volumenstrom berechnet direkt
- Filament & Kosten kann beide Berechnungsrichtungen
- Maßkorrektur liefert X/Y/Z-Skalierung
- BeBlog-SVG ist scharf dargestellt

**STOP:** Bei Fehlern nicht committen, bevor Ursache und Lösung dokumentiert sind.

## 6. Änderungen vor dem Commit kontrollieren

```bash
git status
git diff
```

Optional nur Dateiliste:

```bash
git diff --name-status
```

## 7. Commit erstellen

```bash
git add .
git status
git commit -m "feat: add 3D printing essentials for build 003"
```

## 8. Branch auf GitHub veröffentlichen

```bash
git push -u origin build/003-3d-printing-essentials
```

## 9. Pull Request öffnen

Auf GitHub:

```text
base:    main
compare: build/003-3d-printing-essentials
```

PR-Titel:

```text
Build 003 – 3D Printing Essentials
```

## 10. Falls GitHub Konflikte meldet

Zuerst den Build-Branch lokal aktualisieren:

```bash
git switch build/003-3d-printing-essentials
git fetch origin
git merge origin/main
```

Konfliktstatus prüfen:

```bash
git status
```

### package.json

Konfliktmarker wie diese dürfen nicht in der Datei verbleiben:

```text
<<<<<<< HEAD
=======
>>>>>>> origin/main
```

Nach dem manuellen Zusammenführen JSON prüfen:

```bash
python3 -m json.tool package.json >/dev/null
```

### pnpm-lock.yaml

Wenn das Lockfile einen echten Mergekonflikt besitzt, nicht zeilenweise erraten. Zuerst `package.json` korrekt zusammenführen, dann:

```bash
rm pnpm-lock.yaml
pnpm install
```

Danach erneut:

```bash
pnpm validate
git add package.json pnpm-lock.yaml
git add .
git commit -m "merge: resolve Build 003 conflicts with main"
git push
```

Der bereits offene Pull Request wird automatisch aktualisiert.

## 11. Pull Request mergen

Erst mergen, wenn:

- keine Konflikte mehr angezeigt werden
- lokale Validierung erfolgreich war
- GitHub Actions erfolgreich sind, sofern aktiv
- Diff geprüft wurde

Dann `Merge pull request` ausführen.

## 12. Lokalen main nach dem Merge aktualisieren

```bash
git switch main
git pull origin main
```

## 13. Kontrollieren, ob Build 003 in main enthalten ist

```bash
git log --oneline --graph --decorate --max-count=20
```

Optional:

```bash
git diff main..build/003-3d-printing-essentials
```

Wenn keine Ausgabe erscheint, besitzt der Build-Branch gegenüber `main` keine zusätzlichen Änderungen mehr.

## 14. Build-Branch aufräumen

Erst nach erfolgreicher Merge-Kontrolle:

```bash
git branch -d build/003-3d-printing-essentials
git push origin --delete build/003-3d-printing-essentials
```

## 15. Endzustand

```text
main
└── enthält Build 003
```

Der nächste Build beginnt wieder mit:

```bash
git switch main
git pull origin main
git switch -c build/004-<bezeichnung>
```
