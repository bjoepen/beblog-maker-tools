import { describe, expect, it } from 'vitest';
import { calculateVolumetricFlow } from '../src/core/calculations/volumetricFlow';

describe('volumetric flow', () => {
  it('calculates required volumetric flow', () => {
    const result = calculateVolumetricFlow({ lineWidth: 0.45, layerHeight: 0.2, printSpeed: 150, maxVolumetricFlow: 18 });
    expect(result.requiredVolumetricFlow).toBeCloseTo(13.5, 8);
    expect(result.maxPrintSpeed).toBeCloseTo(200, 8);
    expect(result.utilizationPercent).toBeCloseTo(75, 8);
    expect(result.withinLimit).toBe(true);
  });

  it('reports when the configured limit is exceeded', () => {
    const result = calculateVolumetricFlow({ lineWidth: 0.5, layerHeight: 0.3, printSpeed: 150, maxVolumetricFlow: 18 });
    expect(result.requiredVolumetricFlow).toBeCloseTo(22.5, 8);
    expect(result.withinLimit).toBe(false);
  });
});
