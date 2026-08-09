import { describe, expect, it } from 'vitest';
import { calculateAxisCorrection } from '../src/core/calculations/dimensionalCorrection';

describe('dimensional correction', () => {
  it('calculates scale correction from target and measured dimension', () => {
    const result = calculateAxisCorrection({ target: 20, measured: 19.8 });
    expect(result.scalePercent).toBeCloseTo(101.010101, 5);
    expect(result.correctionPercent).toBeCloseTo(1.010101, 5);
    expect(result.deviationMm).toBeCloseTo(-0.2, 8);
  });

  it('returns 100 percent for a dimension on target', () => {
    const result = calculateAxisCorrection({ target: 20, measured: 20 });
    expect(result.scalePercent).toBe(100);
    expect(result.correctionPercent).toBe(0);
    expect(result.deviationMm).toBe(0);
  });
});
