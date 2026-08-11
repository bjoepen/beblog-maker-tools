import { describe, expect, it } from 'vitest';
import { calculateMotorDriverCompatibility } from '../src/core/calculations/motorDriverCompatibility';

describe('motor and driver compatibility', () => {
  it('passes a well matched RMS setting', () => {
    const result = calculateMotorDriverCompatibility({ motorRatedCurrent: 2, driverMinCurrent: 0.71, driverMaxCurrent: 3.2, selectedDriverCurrent: 2, driverCurrentMode: 'rms' });
    expect(result.status).toBe('pass');
    expect(result.recommendedRms).toBeCloseTo(2, 8);
    expect(result.utilizationPercent).toBeCloseTo(100, 8);
  });

  it('warns when the driver cannot reach the motor rated current', () => {
    const result = calculateMotorDriverCompatibility({ motorRatedCurrent: 2, driverMinCurrent: 0.21, driverMaxCurrent: 1.56, selectedDriverCurrent: 1.56, driverCurrentMode: 'rms' });
    expect(result.status).toBe('warn');
    expect(result.recommendedRms).toBeCloseTo(1.56, 8);
  });

  it('fails when even the minimum driver current exceeds the motor rating', () => {
    const result = calculateMotorDriverCompatibility({ motorRatedCurrent: 1, driverMinCurrent: 1.3, driverMaxCurrent: 4, selectedDriverCurrent: 1.3, driverCurrentMode: 'rms' });
    expect(result.status).toBe('fail');
    expect(result.recommendedRms).toBeNull();
  });

  it('warns when a selectable current is set above the motor rating', () => {
    const result = calculateMotorDriverCompatibility({ motorRatedCurrent: 2, driverMinCurrent: 0.71, driverMaxCurrent: 3.2, selectedDriverCurrent: 2.4, driverCurrentMode: 'rms' });
    expect(result.status).toBe('warn');
  });

  it('normalizes peak current to RMS', () => {
    const result = calculateMotorDriverCompatibility({ motorRatedCurrent: 2, driverMinCurrent: 1, driverMaxCurrent: 4.5, selectedDriverCurrent: 2.8, driverCurrentMode: 'peak' });
    expect(result.normalizedSelectedRms).toBeCloseTo(2.8 / Math.sqrt(2), 8);
    expect(result.status).toBe('pass');
  });
});
