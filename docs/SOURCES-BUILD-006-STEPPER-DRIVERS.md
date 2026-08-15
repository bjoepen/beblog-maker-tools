# Technische Quellen – Build 006 Stepper Driver Extension

Stand: 11.08.2026

## Texas Instruments – DRV8825

**DRV8825 Stepper Motor Controller IC, Rev. F**

Verwendet für:
- Versorgungsspannungsbereich des DRV8825
- IC-Maximalstrom und Stromregelung
- 1/32-Mikroschritte

Produktseite: `https://www.ti.com/product/DRV8825`

## Allegro MicroSystems – A4988

**A4988 DMOS Microstepping Driver with Integrated Translator**

Verwendet für:
- A4988-Funktion und 1/16-Mikroschritte
- 35-V-Klasse und Stromregelung

Produktseite: `https://www.allegromicro.com/en/products/motor-drivers/brush-dc-motor-drivers/a4988`

## Analog Devices / TRINAMIC – TMC2208

Verwendet für:
- 4,75–36 V
- TMC2208-EVAL: 1,35 A RMS / 2 A Peak
- UART / Step-Dir / StealthChop

Produktseite: `https://www.analog.com/en/products/tmc2208.html`

## Analog Devices / TRINAMIC – TMC2209

Verwendet für:
- 4,75–29 V
- TMC2209-EVAL: 1,7 A RMS / 2,4 A Peak
- UART / Step-Dir / StealthChop2 / SpreadCycle

Produktseite: `https://www.analog.com/en/products/tmc2209.html`

## Pololu – DRV8825 High Current Carrier

Verwendet für:
- Carrier-Grenze ca. 1,5 A/Phase ohne Kühlkörper oder Zwangsluft
- bis 2,2 A/Spule bei ausreichender zusätzlicher Kühlung
- 0,100-Ω-Sense-Widerstände
- `Current Limit = VREF × 2`

Produktseite: `https://www.pololu.com/product/2133`

## Pololu – A4988 Standard Carrier

Verwendet für:
- ca. 1,0 A/Phase ohne Zusatzkühlung
- bis 2,0 A/Spule mit ausreichender Zusatzkühlung
- Standard-Carrier mit 0,05-Ω-Sense-Widerständen
- `Current Limit = VREF × 2.5`

Produktseite: `https://www.pololu.com/product/1182`

## Pololu – A4988 Black Edition

Verwendet für:
- ca. 1,2 A/Phase ohne Zusatzkühlung
- ca. 1,4 A/Phase mit Luftstrom im Pololu-Test
- aktuelle 0,068-Ω-Sense-Widerstände
- `VREF = 8 × I_MAX × R_CS`

Produktseite: `https://www.pololu.com/product/2128`

## Abgrenzung

Die Pololu-Werte gelten für die konkret dokumentierten Pololu-Carrier und sind keine pauschale Freigabe für optisch ähnliche Clone-/StepStick-Module.
