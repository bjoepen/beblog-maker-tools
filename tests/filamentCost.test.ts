import { describe, expect, it } from 'vitest';
import { calculateFilamentFromLength, calculateFilamentFromWeight } from '../src/core/calculations/filamentCost';

describe('filament and cost', () => {
  it('converts length to weight and cost', () => {
    const result = calculateFilamentFromLength({ filamentDiameter: 1.75, density: 1.24, pricePerKg: 20, lengthMeters: 10 });
    expect(result.volumeCm3).toBeCloseTo(24.0528, 3);
    expect(result.weightGrams).toBeCloseTo(29.8255, 3);
    expect(result.materialCost).toBeCloseTo(0.5965, 3);
  });

  it('round-trips weight back to length', () => {
    const first = calculateFilamentFromLength({ filamentDiameter: 1.75, density: 1.24, pricePerKg: 20, lengthMeters: 10 });
    const second = calculateFilamentFromWeight({ filamentDiameter: 1.75, density: 1.24, pricePerKg: 20, weightGrams: first.weightGrams });
    expect(second.lengthMeters).toBeCloseTo(10, 8);
  });
});
