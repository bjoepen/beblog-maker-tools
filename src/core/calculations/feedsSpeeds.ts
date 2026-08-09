export interface FeedsSpeedsInput {
  toolDiameter: number;
  cuttingSpeed: number;
  flutes: number;
  chipLoad: number;
}

export interface FeedsSpeedsResult {
  spindleSpeed: number;
  feedRate: number;
}

export function calculateFeedsSpeeds(input: FeedsSpeedsInput): FeedsSpeedsResult {
  const { toolDiameter: d, cuttingSpeed: vc, flutes: z, chipLoad: fz } = input;
  if (![d, vc, z, fz].every(Number.isFinite) || d <= 0 || vc <= 0 || z <= 0 || fz <= 0) {
    throw new RangeError('Alle Eingaben müssen größer als 0 sein.');
  }

  const spindleSpeed = (vc * 1000) / (Math.PI * d);
  const feedRate = spindleSpeed * z * fz;
  return { spindleSpeed, feedRate };
}
