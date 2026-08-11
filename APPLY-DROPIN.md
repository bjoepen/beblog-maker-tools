# Build 006 – macOS GitHub Actions Drop-in anwenden

Dieser Ordner ist absichtlich direkt als `beblog-maker-tools/` strukturiert und kann mit `rsync` in das lokale Repository eingespielt werden.

## Quelle

```text
~/Downloads/beblog-maker-tools/
```

## Ziel

```text
~/Projekte/beblog-maker-tools/
```

## Dry Run

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

## Apply

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Danach unbedingt `git status`, `git diff`, `pnpm validate` und den Rust-Check ausführen. Der vollständige Ablauf steht unter `docs/UPGRADE-BUILD-006-MACOS-DROPIN.md`.
