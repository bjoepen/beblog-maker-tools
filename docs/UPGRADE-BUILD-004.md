# Upgrade auf Build 004

1. Von aktuellem `main` einen neuen Build-Branch anlegen.
2. Paketinhalt in das Repository übernehmen.
3. `pnpm install` ausführen.
4. `pnpm validate` ausführen.
5. `cargo check --manifest-path src-tauri/Cargo.toml` ausführen.
6. App mit `pnpm tauri:dev` prüfen.
7. Git-Workflow aus `GIT-WORKFLOW-BUILD-004.md` vollständig durchführen.
