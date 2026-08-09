# ECR-0003 – 3D Printing Essentials

## Status

Genehmigt / umgesetzt in Build 003.

## Änderung

BeBlog Maker Tools erhält die neue Kategorie `3D-Druck` mit drei kleinen, voneinander unabhängigen Werkzeugen:

1. Volumenstrom
2. Filament & Kosten
3. Maßkorrektur

## Begründung

Die Werkzeuge beantworten häufige praktische Fragen beim funktionalen FDM/FFF-Druck, ohne Slicer-Funktionalität nachzubauen. Damit erfüllen sie die Foundation-Regel „ein Werkzeug – eine klare Aufgabe“.

## Architekturwirkung

- Tool Registry erhält eine weitere Kategorie und drei Tool IDs.
- Drei UI-unabhängige Berechnungsmodule werden ergänzt.
- Bestehende Rechner werden nicht verändert.
- Keine neue externe Runtime-Abhängigkeit.
