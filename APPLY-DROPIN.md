# Build 006 – Stepper Driver Library Extension

Dieser Drop-in erweitert **Motor & Treiber** um verbreitete Stecktreiber-/StepStick-Profile, ohne die Produktversion `0.2.1` zu ändern.

## Enthalten

- DRV8825 – Pololu High Current Carrier als Referenzprofil
- A4988 – Pololu Standard Carrier
- A4988 – Pololu Black Edition
- TMC2208 – ADI/TRINAMIC Referenz
- TMC2209 – ADI/TRINAMIC Referenz
- getrennte Darstellung externer Treiber und Stecktreiber
- Kühlungsoptionen für verifizierte Carrier-Grenzen
- VREF-Hilfe nur für konkret dokumentierte Pololu-Carrier
- zusätzliche Unit-Tests

## Einspielen

Der entpackte Ordner liegt wie vereinbart unter:

```text
~/Downloads/beblog-maker-tools/
```

Das lokale Repository liegt unter:

```text
~/Projekte/beblog-maker-tools/
```

Dry Run:

```bash
rsync -avn \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Anwenden:

```bash
rsync -av \
  --exclude='.git/' \
  ~/Downloads/beblog-maker-tools/ \
  ~/Projekte/beblog-maker-tools/
```

Danach gemäß `docs/GIT-WORKFLOW-BUILD-006-STEPPER-DRIVER-DROPIN.md` validieren und committen.
