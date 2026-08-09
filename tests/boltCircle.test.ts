import { describe, expect, it } from 'vitest';
import { calculateBoltCircle } from '../src/core/calculations/boltCircle';

describe('bolt circle', () => {
  it('calculates four points on an 80 mm PCD', () => {
    const result = calculateBoltCircle({ pitchCircleDiameter: 80, holeCount: 4, startAngleDeg: 0, centerX: 0, centerY: 0 });
    expect(result.radius).toBe(40);
    expect(result.angularPitch).toBe(90);
    expect(result.points[0].x).toBeCloseTo(40, 10);
    expect(result.points[0].y).toBeCloseTo(0, 10);
    expect(result.points[1].x).toBeCloseTo(0, 10);
    expect(result.points[1].y).toBeCloseTo(40, 10);
  });

  it('applies center offset and start angle', () => {
    const result = calculateBoltCircle({ pitchCircleDiameter: 20, holeCount: 2, startAngleDeg: 90, centerX: 5, centerY: -2 });
    expect(result.points[0].x).toBeCloseTo(5, 10);
    expect(result.points[0].y).toBeCloseTo(8, 10);
  });
});
