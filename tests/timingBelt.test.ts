import { describe, expect, it } from 'vitest';
import { calculateTimingBelt } from '../src/core/calculations/timingBelt';

describe('calculateTimingBelt', () => {
  it('calculates equal pulleys without correction term', () => {
    const result = calculateTimingBelt({ centerDistance: 100, pitch: 5, pulleyTeeth1: 20, pulleyTeeth2: 20 });
    expect(result.theoreticalPitchLength).toBeCloseTo(300, 10);
    expect(result.theoreticalBeltTeeth).toBeCloseTo(60, 10);
  });

  it('rejects invalid values', () => {
    expect(() => calculateTimingBelt({ centerDistance: 0, pitch: 5, pulleyTeeth1: 20, pulleyTeeth2: 20 })).toThrow();
  });
});
