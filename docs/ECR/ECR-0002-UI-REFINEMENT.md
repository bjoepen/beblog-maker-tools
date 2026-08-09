# ECR-0002 – BeBlog UI Refinement

## Status

Approved / Implemented in Build 002

## Ausgangslage

Build 001 bestätigte die funktionale Architektur und die drei ersten Rechner. Die ursprüngliche dunkle Sidebar und generische Desktop-Gestaltung bildeten den visuellen Charakter des Makerblogs jedoch noch nicht ausreichend ab.

## Entscheidung

Die App-Shell und Werkzeugoberflächen werden an die freigegebene Gestaltung von Bernds Maker Blog angelehnt. Der Blog ist unter `https://blog.beblog.de/` erreichbar.

## Umfang

- BeBlog-Farb- und Flächensystem
- stilisiertes `b` als Markenmarke
- neue SVG-Werkzeugicons
- neue Eingabe- und Ergebnisdarstellung
- Reset-Interaktion
- aktualisierte Design-Dokumentation
- Node-Type-Fix dauerhaft integrieren

## Nicht Teil der Änderung

Rechenformeln, Modulgrenzen und die noch ausstehende Estlcam-Verifikation werden durch dieses ECR nicht verändert.

## Rückfallstrategie

Da Rechenlogik und UI weiterhin getrennt bleiben, kann das UI unabhängig von `src/core/calculations/` angepasst oder zurückgesetzt werden.
