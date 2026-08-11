# ECR-0006 – Motor & Treiber – Kompatibilität

**Status:** genehmigt / umgesetzt in Build 006  
**Datum:** 2026-08-11

## Anlass

In der Werkstatt muss häufig geprüft werden, welcher Treiberstrom zu einem Schrittmotor passt und ob eine Motor-/Treiber-Kombination sinnvoll ist. Reine Stromwerte reichen dafür nicht aus; entscheidend ist eine verständliche Bewertung.

## Entscheidung

BeBlog Maker Tools erhält das Werkzeug **„Motor & Treiber“** mit drei klaren Zuständen:

- PASS
- WARN – geht, aber nicht zu empfehlen / nicht optimal
- FAIL – keine sichere Einstellung im angegebenen Treiberbereich

## Technische Leitlinien

1. Motorstrom wird als Nennstrom **pro Phase** behandelt.
2. Der Strom eines 2-Phasen-Motors wird nicht verdoppelt.
3. RMS ist der primäre Vergleichswert.
4. Peak-Werte werden zur Vergleichbarkeit auf RMS normalisiert.
5. Liegt bereits der kleinste Treiberstrom über dem Motor-Nennstrom, ist die Kombination FAIL.
6. Unterbestromung ist grundsätzlich möglich, reduziert aber das verfügbare Drehmoment und führt bei deutlicher Abweichung zu WARN.
7. Eine gewählte RMS-Stufe oberhalb des Motor-Nennstroms wird als WARN markiert, sofern eine niedrigere sichere Stufe verfügbar ist.
8. Herstellerdatenblatt und thermische Prüfung bleiben maßgeblich.
