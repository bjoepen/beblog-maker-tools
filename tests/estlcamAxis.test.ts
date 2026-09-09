import { describe, expect, it } from 'vitest';
import { calculateEstlcamAxis, calibrateEstlcamTravel } from '../src/core/calculations/estlcamAxis';

describe('Estlcam Achsberechnung', () => {
  it('berechnet einen GT3-Zahnriemen mit 20 Zähnen und 1/16 Microstepping', () => {
    const result = calculateEstlcamAxis({
      fullStepsPerRevolution: 200,
      microstepping: 16,
      drive: { type: 'belt', pitch: 3, pulleyTeeth: 20 }
    });

    expect(result.stepsPerRevolution).toBe(3200);
    expect(result.travelPerRevolution).toBe(60);
    expect(result.stepsPerMillimeter).toBeCloseTo(53.333333, 6);
  });

  it('berechnet eine 10x2-Spindel', () => {
    const result = calculateEstlcamAxis({
      fullStepsPerRevolution: 200,
      microstepping: 16,
      drive: { type: 'spindle', lead: 2 }
    });

    expect(result.stepsPerRevolution).toBe(3200);
    expect(result.travelPerRevolution).toBe(2);
    expect(result.stepsPerMillimeter).toBe(1600);
  });

  it('korrigiert Weg je Umdrehung anhand Soll- und Istweg', () => {
    const result = calibrateEstlcamTravel({
      currentTravelPerRevolution: 5,
      commandedDistance: 100,
      measuredDistance: 98.7
    });

    expect(result.correctionFactor).toBeCloseTo(0.987, 6);
    expect(result.correctedTravelPerRevolution).toBeCloseTo(4.935, 6);
    expect(result.relativeErrorPercent).toBeCloseTo(-1.3, 6);
  });

  it('weist ungültige Eingaben zurück', () => {
    expect(() => calculateEstlcamAxis({
      fullStepsPerRevolution: 0,
      microstepping: 16,
      drive: { type: 'spindle', lead: 5 }
    })).toThrow(RangeError);
  });
});
