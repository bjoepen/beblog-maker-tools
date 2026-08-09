import { describe, expect, it } from 'vitest';
import { calculateAxisScaling } from '../src/core/calculations/axisScaling';

describe('calculateAxisScaling', () => {
  it('calculates a belt axis', () => {
    const r = calculateAxisScaling({ fullStepsPerRevolution: 200, microstepping: 16, drive: { type: 'belt', pitch: 3, pulleyTeeth: 20 } });
    expect(r.travelPerRevolution).toBe(60);
    expect(r.stepsPerMillimeter).toBeCloseTo(53.333333333, 8);
  });

  it('calculates a spindle axis', () => {
    const r = calculateAxisScaling({ fullStepsPerRevolution: 200, microstepping: 16, drive: { type: 'spindle', lead: 5 } });
    expect(r.stepsPerMillimeter).toBe(640);
  });
});
