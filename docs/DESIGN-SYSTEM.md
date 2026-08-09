# Design System – BeBlog Maker Tools

## Stand

**Build 002 – UI Refinement**

## Gestaltungsziel

BeBlog Maker Tools soll wie ein Desktop-Begleiter von **Bernds Maker Blog** wirken: technisch, ruhig, hochwertig und nah an der Werkstatt – ohne den Charakter einer überladenen Engineering-Suite anzunehmen.

Referenz: `https://blog.beblog.de/`

## Markenprinzipien

### Technik verdient Klarheit

Die Oberfläche priorisiert Verständlichkeit vor Dekoration. Jede visuelle Trennung muss eine Funktion erfüllen.

### Warmes Papier statt kaltes Dashboard

Der Arbeitsbereich verwendet warme Off-White- und Cremeflächen. Karten sind nur leicht abgegrenzt und wirken eher wie technische Arbeitsblätter als wie Dashboard-Widgets.

### BeBlog-Blau als Akzent

Dunkelblau wird gezielt eingesetzt für:

- aktive Navigation
- wichtige Ergebniswerte
- Icons und Branding
- Fokuszustände

Es soll nicht großflächig dominieren.

## Farbtokens

```css
--paper: #f7f3eb;
--paper-2: #fbf9f4;
--ink: #20262b;
--muted: #5d656c;
--navy: #173e55;
--navy-2: #0f3148;
--sand: #e7ded0;
--line: #ddd4c7;
```

Die Werte sind App-Tokens und kein vollständiges Corporate-Design-Handbuch.

## Typografie

Primär wird der native System-Stack verwendet:

```css
Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif
```

Die App benötigt dadurch keine ausgelieferten Fontdateien.

## Branding

Die Sidebar verwendet ein abstrahiertes stilisiertes `b`. Die diagonalen Elemente greifen den technischen/fräserartigen Charakter des BeBlog-Signets auf, ohne die Oberfläche mit einem großen Logo zu dominieren.

## Layout

- Sidebar: ca. 270 px
- Arbeitsbereich: flexibel
- maximale Werkzeugbreite: ca. 1120 px
- zwei Hauptpanels, solange ausreichend Fensterbreite vorhanden ist
- unterhalb von ca. 980 px werden Panels einspaltig

## Komponenten

### ToolHeader

- Werkzeug-Icon
- großer Titel
- kurze fachliche Beschreibung
- dezenter Zurücksetzen-Button

### FieldRow

- technisches Symbol
- eindeutiges Label
- numerischer Wert
- feste Einheit in eigener Zelle

### ResultRow

- Ergebnis-Icon
- fachliche Bezeichnung
- rechtsbündiger tabellarischer Wert
- optionale zweite Zeile für Abweichungen/Prozentwerte

### FormulaDisclosure

Berechnungsdetails werden sichtbar angeboten, dominieren aber nicht den Hauptworkflow. Der Bereich ist standardmäßig geöffnet und kann eingeklappt werden.

## Interaktionsregeln

- direkte Berechnung bei Eingabeänderung
- Punkt und Komma als Dezimaltrennzeichen
- keine modalen Eingabefehler
- Zurücksetzen stellt definierte Beispiel-/Startwerte wieder her
- Zielsysteme bleiben fachlich getrennt

## Designreferenz

Der freigegebene Konzeptentwurf ist im Repository abgelegt:

`docs/assets/build-002-ui-reference.png`

Er ist eine visuelle Zielreferenz. Texte, Formeln und Werte im tatsächlichen Produktcode haben fachlich Vorrang vor der Illustration.
