# BeBlog Maker Tools 0.1 – Foundation

## Build 001 – Foundation Specification

**Projekt:** BeBlog Maker Tools  
**Version:** 0.1.0  
**Build:** 001  
**Codename:** Foundation  
**Zielplattform:** macOS  
**Technologie:** Tauri 2 + Svelte + TypeScript + Rust  
**Status:** Freigegebene Projektgrundlage

---

## 1. Ziel des Projekts

BeBlog Maker Tools ist eine kompakte Desktop-Werkzeugsuite für Maker, CNC-Anwender und Werkstattprojekte.

Die Anwendung soll bewusst **nicht** zu einer überladenen Universalsoftware werden. Stattdessen besteht sie aus klar abgegrenzten, kleinen Werkzeugen, die reale Aufgaben in Werkstatt, Mechanik, CNC und Elektronik lösen.

Die zentrale Produktidee lautet:

> Ein Werkzeug soll eine konkrete technische Frage schnell, nachvollziehbar und praxisnah beantworten.

Die Anwendung soll dabei nicht nur Ergebnisse ausgeben, sondern dem Anwender auch zeigen, **welcher Wert in welcher Zielsoftware oder Steuerung verwendet wird**.

---

## 2. Leitprinzipien

### 2.1 Schlank statt vollständig

Neue Funktionen werden nur aufgenommen, wenn sie einen klaren praktischen Nutzen besitzen.

Build 001 ist ausdrücklich **kein vollständiger Werkzeugkasten**.

### 2.2 Ein Werkzeug – eine klare Aufgabe

Jedes Modul besitzt:

- klar definierte Eingaben
- eine nachvollziehbare Berechnung
- eindeutig benannte Ergebnisse
- kurze technische Erläuterungen
- optionale zielsystemspezifische Ausgaben

### 2.3 Direkte Berechnung

Werte werden nach Möglichkeit unmittelbar aktualisiert.

Ein zusätzlicher „Berechnen“-Button ist nur vorgesehen, wenn ein späteres Modul dies fachlich oder UX-seitig benötigt.

### 2.4 Fachbegriffe korrekt verwenden

Bezeichnungen sollen sich an den realen technischen Größen und Zielsystemen orientieren.

Beispiel:

- Wirklänge statt unspezifisch „Riemenlänge“
- Steps/mm bei GRBL
- STEP_SCALE / position-scale bei LinuxCNC
- eigene Darstellung für Estlcam

### 2.5 Erklären, aber nicht belehren

Zu jedem Rechner kann ein kompakter Bereich „Wie wird das berechnet?“ eingeblendet werden.

Die Hauptoberfläche bleibt dabei bewusst ruhig.

---

# 3. Technische Grundlage

## 3.1 Desktop-Framework

- Tauri 2
- macOS zunächst primäre Zielplattform

## 3.2 Benutzeroberfläche

- Svelte
- TypeScript
- HTML / CSS / SVG

## 3.3 Native Funktionen

Rust wird nur dort eingesetzt, wo native Desktop-Funktionen benötigt werden.

Beispiele:

- Dateisystemzugriff
- App-Einstellungen
- Exportfunktionen
- spätere Systemintegration

Die eigentliche Rechnerlogik soll möglichst plattformunabhängig in TypeScript umgesetzt werden.

---

# 4. Architektur

Die Anwendung wird in vier Ebenen getrennt.

```text
BeBlog Maker Tools
│
├── App Shell
│   ├── Navigation
│   ├── Fensterlayout
│   ├── Einstellungen
│   └── Designsystem
│
├── Tool Registry
│   ├── Moduldefinitionen
│   ├── Kategorien
│   └── Navigationseinträge
│
├── Calculator Modules
│   ├── Zahnriemen
│   ├── Achsskalierung
│   └── Drehzahl & Vorschub
│
└── Shared Core
    ├── Einheiten
    ├── Validierung
    ├── Zahlenformatierung
    ├── Formelergebnisse
    └── Tests
```

---

# 5. Vorgeschlagene Repository-Struktur

```text
beblog-maker-tools/
│
├── README.md
├── CHANGELOG.md
├── LICENSE
├── package.json
├── vite.config.ts
├── svelte.config.js
│
├── docs/
│   ├── FOUNDATION.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN-SYSTEM.md
│   ├── DEVELOPMENT.md
│   └── RELEASE.md
│
├── src/
│   ├── app/
│   │   ├── navigation/
│   │   ├── layout/
│   │   └── settings/
│   │
│   ├── components/
│   │   ├── inputs/
│   │   ├── results/
│   │   ├── cards/
│   │   └── help/
│   │
│   ├── core/
│   │   ├── calculations/
│   │   ├── units/
│   │   ├── validation/
│   │   └── formatting/
│   │
│   └── tools/
│       ├── timing-belt/
│       ├── axis-scaling/
│       └── feeds-speeds/
│
├── src-tauri/
│   ├── Cargo.toml
│   ├── tauri.conf.json
│   └── src/
│
└── tests/
```

---

# 6. App-Shell

## 6.1 Grundlayout

Die App erhält eine klassische Desktop-Aufteilung:

```text
┌────────────────────────────────────────────────────────────┐
│ BeBlog Maker Tools                                    ⚙︎   │
├───────────────────┬────────────────────────────────────────┤
│                   │                                        │
│ Favoriten         │   Werkzeug                             │
│                   │                                        │
│ ANTRIEB           │   Eingaben                             │
│ Zahnriemen        │                                        │
│                   │   Ergebnisse                           │
│ CNC               │                                        │
│ Achsskalierung    │   Erklärung / Formel                   │
│ Drehzahl/Vorschub │                                        │
│                   │                                        │
└───────────────────┴────────────────────────────────────────┘
```

## 6.2 Sidebar

Die Sidebar dient ausschließlich der Werkzeugnavigation.

Für Build 001:

### Antrieb

- Zahnriemen

### CNC

- Achsskalierung
- Drehzahl & Vorschub

Noch nicht implementierte Kategorien werden nicht als leere Platzhalter angezeigt.

---

# 7. Designsystem

## 7.1 Charakter

Die Oberfläche soll:

- technisch
- ruhig
- hochwertig
- klar
- werkstattnah

wirken.

Keine Dashboard-Optik mit unnötig vielen Karten und Kennzahlen.

## 7.2 Grundelemente

Wiederverwendbare Komponenten:

- NumericInput
- UnitInput
- SegmentedControl
- ResultRow
- ResultCard
- InfoBox
- FormulaDisclosure
- ValidationMessage
- ToolHeader

## 7.3 Zahlenformat

Die Oberfläche berücksichtigt deutsche Zahlenformate.

Beispiel:

```text
53,333 mm
```

Intern werden Berechnungen mit numerischen Standardwerten durchgeführt.

Eingaben mit Punkt oder Komma sollen akzeptiert werden.

---

# 8. Modul 1 – Zahnriemen

Das bestehende Zahnriemenprojekt dient als fachliche Ausgangsbasis.

## 8.1 Eingaben

- Achsabstand
- Zahnteilung
- Zähnezahl Z1
- Zähnezahl Z2

## 8.2 Ergebnisse

- theoretische Wirklänge
- theoretische Riemenzähnezahl
- empfohlene ganzzahlige Riemenzähnezahl
- Wirklänge des empfohlenen Zahnriemens
- Abweichung

## 8.3 Erweiterungen innerhalb 0.1

Das Modul soll zusätzlich vorbereiten:

- Achsabstand aus vorgegebener Wirklänge
- Übersetzungsverhältnis

Diese Funktionen dürfen nach Build 001 ergänzt werden.

## 8.4 Erklärung

Ein aufklappbarer Bereich erläutert:

- Wirklänge
- Teilung
- Zähnezahl
- Berechnungsprinzip

---

# 9. Modul 2 – Achsskalierung

Dieses Modul trennt bewusst zwischen physikalischer Berechnung und der Ausgabe für unterschiedliche Steuerungssysteme.

## 9.1 Antriebsarten

### Zahnriemen

Eingaben:

- Motorschritte pro Umdrehung
- Microstepping
- Zahnteilung
- Riemenscheibenzähne

### Spindel

Eingaben:

- Motorschritte pro Umdrehung
- Microstepping
- Spindelsteigung

---

# 10. Ausgabeprofile der Achsskalierung

## 10.1 Allgemeine Berechnung

Ausgegeben werden:

- Weg pro Motorumdrehung
- Microsteps pro Motorumdrehung
- Schritte / Impulse pro mm
- theoretische Wegauflösung

## 10.2 GRBL / grblHAL

Die Oberfläche zeigt den berechneten Wert zusätzlich in einer Form, die direkt auf die Achsparameter übertragen werden kann.

Beispiel:

```text
Steps/mm: 53,333333

GRBL
$100 = 53.333333
```

Die konkrete Achse wird später auswählbar:

- X
- Y
- Z
- A

## 10.3 LinuxCNC

Eigener Ergebnisblock.

Beispiel:

```text
LinuxCNC

STEP_SCALE     53.333333
position-scale 53.333333
```

Die Bezeichnungen werden bei der Implementierung exakt gegen die jeweils verwendete LinuxCNC-Konfiguration geprüft.

## 10.4 Estlcam

Estlcam erhält ausdrücklich einen **eigenen Modus**.

Es wird nicht versucht, Estlcam lediglich als weiteres Label auf den Standardwert zu setzen.

Die Eingaben und Ergebnisdarstellung sollen sich an den tatsächlichen Estlcam-Konfigurationsfeldern orientieren.

Die genaue Formel- und Feldzuordnung wird vor Implementierung des Estlcam-Modus separat dokumentiert und verifiziert.

---

# 11. Modul 3 – Drehzahl & Vorschub

## 11.1 Ziel

Schnelle Berechnung typischer Fräsparameter.

## 11.2 Geplante Eingaben

- Werkzeugdurchmesser
- Schnittgeschwindigkeit
- Schneidenzahl
- Zahnvorschub

## 11.3 Ergebnisse

- Spindeldrehzahl
- Vorschubgeschwindigkeit

Optionale spätere Ergänzungen:

- Eintauchvorschub
- Materialprofile
- Maschinenlimits

Diese sind nicht Bestandteil von Build 001.

---

# 12. Tool Registry

Werkzeuge werden nicht hart in die Sidebar eingebaut.

Jedes Modul liefert eine Definition.

Beispiel:

```ts
export interface ToolDefinition {
  id: string;
  title: string;
  category: string;
  icon: string;
  route: string;
  description: string;
}
```

Dadurch können später neue Werkzeuge ergänzt werden, ohne die gesamte App-Navigation umzubauen.

---

# 13. Rechnerlogik

Berechnungsfunktionen bleiben unabhängig von der UI.

Beispielstruktur:

```text
src/core/calculations/
├── timingBelt.ts
├── axisScaling.ts
└── feedsSpeeds.ts
```

Eine Berechnungsfunktion:

- erhält definierte Eingaben
- liefert ein strukturiertes Ergebnis
- verändert keinen UI-State
- enthält keine Svelte-Abhängigkeit

Dadurch bleibt die Logik leicht testbar.

---

# 14. Validierung

Eingaben werden direkt geprüft.

Beispiele:

- Achsabstand > 0
- Teilung > 0
- Zähnezahl > 0
- Microstepping > 0
- Spindelsteigung > 0

Fehler werden am betreffenden Eingabefeld angezeigt.

Keine modalen Fehlermeldungen für einfache Eingabefehler.

---

# 15. Einheiten

Build 001 arbeitet primär metrisch.

Standard:

- mm
- mm/U
- mm/min
- m/min
- 1/min

Die interne Architektur soll spätere Einheitensysteme ermöglichen, ohne bereits eine vollständige Imperial-Unterstützung zu implementieren.

---

# 16. Einstellungen

Build 001 benötigt nur wenige globale Einstellungen.

Vorgesehen:

- Dezimalstellen
- bevorzugtes Zahlenformat
- optional zuletzt geöffnetes Werkzeug

Noch nicht Bestandteil:

- Cloud Sync
- Benutzerkonten
- Projektverwaltung
- Datenbanken

---

# 17. Build 001 – konkreter Umfang

Build 001 ist erfolgreich, wenn:

1. die Tauri-App auf macOS startet,
2. die Svelte-App-Shell funktioniert,
3. eine Sidebar vorhanden ist,
4. die drei freigegebenen Werkzeuge navigierbar sind,
5. der Zahnriemenrechner funktional integriert ist,
6. Achsskalierung als Basisversion vorhanden ist,
7. Drehzahl & Vorschub als Basisversion vorhanden ist,
8. die Rechnerlogik von der UI getrennt ist,
9. automatisierte Tests für die Kernformeln existieren,
10. die App als macOS-App gebaut werden kann.

---

# 18. Nicht Bestandteil von Build 001

Bewusst ausgeschlossen:

- Windows-Release
- Linux-Release
- automatische Updates
- Apple Developer ID
- Notarisierung
- App Store
- Cloud-Funktionen
- Benutzerkonten
- Projektdateien
- Datenbanken
- Plug-in-System
- Materialdatenbank
- Werkzeugbibliothek
- komplexe CNC-Konfiguration
- vollständiger Maschinenassistent

Diese Punkte können später bewertet werden.

---

# 19. Definition of Done – Build 001

## Technik

- [ ] Tauri 2 Projekt sauber eingerichtet
- [ ] Svelte + TypeScript integriert
- [ ] macOS Development Build funktioniert
- [ ] Production Build funktioniert
- [ ] keine kritischen Compiler- oder TypeScript-Fehler

## Architektur

- [ ] Tool Registry vorhanden
- [ ] Rechnerlogik von UI getrennt
- [ ] gemeinsame Formatierung vorhanden
- [ ] gemeinsame Eingabevalidierung vorhanden

## Module

- [ ] Zahnriemen funktionsfähig
- [ ] Achsskalierung funktionsfähig
- [ ] Drehzahl & Vorschub funktionsfähig
- [ ] GRBL/grblHAL-Ausgabe vorhanden
- [ ] LinuxCNC-Ausgabe vorhanden
- [ ] Estlcam-Modus strukturell vorbereitet

## UX

- [ ] Sidebar funktioniert
- [ ] direkte Neuberechnung
- [ ] verständliche Einheiten
- [ ] Fehler direkt am Eingabefeld
- [ ] keine unnötigen Dialoge
- [ ] Oberfläche wirkt nicht überladen

## Qualität

- [ ] Kernformeln mit Unit Tests abgedeckt
- [ ] Beispielwerte dokumentiert
- [ ] README vorhanden
- [ ] DEVELOPMENT.md vorhanden
- [ ] Build-Anleitung vorhanden

---

# 20. Build-Strategie

Die Entwicklung erfolgt schrittweise.

```text
Build 001
Foundation + drei Basismodule

Build 002
Zahnriemen erweitern
Achsabstand / Übersetzung

Build 003
Achsskalierung vertiefen
Controllerprofile verfeinern

Build 004
Drehzahl & Vorschub verfeinern

danach
neue Werkzeuge nur nach Bedarf
```

Die Buildnummern sind noch keine Produktversionen.

Die öffentliche Produktversion bleibt zunächst:

```text
0.1.x
```

---

# 21. Git-Strategie

Repository:

```text
beblog-maker-tools
```

Start:

```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize BeBlog Maker Tools foundation"
```

Für Build 001:

```text
build/001-foundation
```

Passender Abschluss-Commit:

```text
feat: complete BeBlog Maker Tools build 001 foundation
```

---

# 22. Projektregel für zukünftige Module

Bevor ein neues Werkzeug aufgenommen wird, müssen vier Fragen beantwortet werden:

1. Welches reale Werkstattproblem löst es?
2. Welche Eingaben benötigt der Anwender tatsächlich?
3. Welche Ergebnisse braucht er anschließend?
4. Ist es klein genug, um weiterhin ein Werkzeug und kein eigenes Subsystem zu sein?

Wenn diese Fragen nicht klar beantwortet werden können, gehört das Modul zunächst nicht in BeBlog Maker Tools.

---

# 23. Status nach Freigabe

Mit dieser Spezifikation sind für BeBlog Maker Tools 0.1 – Foundation verbindlich festgelegt:

- Produktidee
- technische Basis
- App-Shell
- Modularchitektur
- erste drei Werkzeuge
- getrennte Controllerprofile
- Designprinzipien
- Build-001-Grenzen
- Definition of Done

Der nächste Entwicklungsschritt ist die Erstellung des tatsächlichen Build-001-Repositories.
