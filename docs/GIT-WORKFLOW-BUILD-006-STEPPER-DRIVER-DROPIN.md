# Git-Workflow – Build 006 Stepper Driver Drop-in

```text
main
 └── build/006-stepper-driver-dropin
      └── Pull Request → main
```

## Vollständiger Ablauf

```bash
cd ~/Projekte/beblog-maker-tools

git switch main
git pull origin main
git status

git switch -c build/006-stepper-driver-dropin

rsync -avn --exclude='.git/' ~/Downloads/beblog-maker-tools/ ~/Projekte/beblog-maker-tools/
rsync -av  --exclude='.git/' ~/Downloads/beblog-maker-tools/ ~/Projekte/beblog-maker-tools/

git status
git diff

pnpm install
pnpm validate
cargo check --manifest-path src-tauri/Cargo.toml

git add .
git commit -m "feat: extend motor driver library with plug-in drivers"
git push -u origin build/006-stepper-driver-dropin
```

Pull Request nach `main` erstellen und erst nach erfolgreicher Validierung mergen.

Nach dem Merge:

```bash
git switch main
git pull origin main
git log --oneline --graph --decorate --max-count=20
git branch -d build/006-stepper-driver-dropin
git push origin --delete build/006-stepper-driver-dropin
```
