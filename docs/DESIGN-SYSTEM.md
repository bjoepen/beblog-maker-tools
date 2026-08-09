# Design System – Foundation

## Zielbild

Die Oberfläche soll ruhig, technisch, hochwertig und werkstattnah wirken. Keine überladene Dashboard-Optik, keine unnötigen Modalfenster und keine dekorativen Kennzahlen ohne praktischen Nutzen.

## Grundstruktur

- dunkle, kompakte Sidebar
- heller Arbeitsbereich
- maximal zwei primäre Panels nebeneinander
- Ergebnisse direkt neben oder unter den Eingaben
- Erklärungen in aufklappbaren Bereichen

## Interaktion

- direkte Neuberechnung bei Eingabeänderung
- Punkt und Komma werden bei Dezimalwerten akzeptiert
- Validierungsfehler erscheinen am Werkzeug, nicht als Dialog
- Zielsysteme werden sichtbar getrennt

## Foundation-Farben

Die Farbwerte sind noch kein endgültiges Markenhandbuch. Build 001 nutzt ruhige Blau-/Grautöne und einen dunkelblauen BeBlog-Akzent. Eine spätere Design-Revision darf die Farben ändern, ohne die Informationsarchitektur zu verändern.

## App-Icon

Das Repository enthält für den Build ein **vorläufiges Foundation-Icon**. Vor einem öffentlichen 1.0-Release soll ein endgültiges BeBlog-Maker-Tools-Icon gestaltet und anschließend mit `pnpm tauri icon assets/app-icon.png` neu generiert werden.
