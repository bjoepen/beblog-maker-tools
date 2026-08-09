# Validation – Build 001

## Automatisiert

- Zahnriemenformel: Gleich große Zahnscheiben und Fehlerfall
- Achsskalierung: Zahnriemenantrieb
- Achsskalierung: Spindelantrieb
- Drehzahl/Vorschub: Referenzbeispiel

Ausführen:

```bash
pnpm test
```

## Manuelle Smoke Tests

- App startet unter macOS.
- Sidebar wechselt zwischen allen drei Werkzeugen.
- Komma- und Punkteingaben funktionieren.
- Ungültige Werte erzeugen eine lokale Validierungsmeldung.
- GRBL/LinuxCNC-Ausgabe reagiert auf Achs- und Eingabeänderungen.
- Estlcam zeigt bewusst den Foundation-Hinweis statt ungeprüfter Konfigurationswerte.
- Production Build kann mit `pnpm tauri:build` erzeugt werden.
