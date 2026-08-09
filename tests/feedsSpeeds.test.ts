import { describe, expect, it } from 'vitest';
import { calculateFeedsSpeeds } from '../src/core/calculations/feedsSpeeds';

describe('calculateFeedsSpeeds', () => {
  it('calculates spindle speed and feed', () => {
    const r = calculateFeedsSpeeds({ toolDiameter: 6, cuttingSpeed: 200, flutes: 2, chipLoad: 0.05 });
    expect(r.spindleSpeed).toBeCloseTo(10610.3295, 3);
    expect(r.feedRate).toBeCloseTo(1061.03295, 3);
  });
});
