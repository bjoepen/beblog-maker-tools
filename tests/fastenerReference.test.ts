import { describe, expect, it } from 'vitest';
import { getDriveSize, getMetricFastener } from '../src/core/calculations/fastenerReference';

describe('metric fastener reference', () => {
  it('returns common M6 workshop values', () => {
    const ref = getMetricFastener('M6');
    expect(ref.coarsePitch).toBe(1);
    expect(ref.tapDrill).toBe(5);
    expect(ref.hexWrenchIso).toBe(10);
    expect(ref.socketHexKey).toBe(5);
  });

  it('distinguishes current ISO hex-head wrench size from socket-cap hex key', () => {
    const ref = getMetricFastener('M10');
    expect(getDriveSize(ref, 'hex-iso')).toBe(16);
    expect(getDriveSize(ref, 'socket-cap')).toBe(8);
  });
});
