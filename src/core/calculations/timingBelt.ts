export interface TimingBeltInput {
  centerDistance: number;
  pitch: number;
  pulleyTeeth1: number;
  pulleyTeeth2: number;
}

export interface TimingBeltResult {
  theoreticalPitchLength: number;
  theoreticalBeltTeeth: number;
  recommendedBeltTeeth: number;
  recommendedPitchLength: number;
  deviation: number;
}

export function calculateTimingBelt(input: TimingBeltInput): TimingBeltResult {
  const { centerDistance: a, pitch: t, pulleyTeeth1: z1, pulleyTeeth2: z2 } = input;
  if (![a, t, z1, z2].every(Number.isFinite) || a <= 0 || t <= 0 || z1 <= 0 || z2 <= 0) {
    throw new RangeError('Alle Eingaben müssen größer als 0 sein.');
  }

  const theoreticalPitchLength =
    2 * a + (t / 2) * (z1 + z2) + (t ** 2 * (z1 - z2) ** 2) / (4 * Math.PI ** 2 * a);
  const theoreticalBeltTeeth = theoreticalPitchLength / t;
  const recommendedBeltTeeth = Math.round(theoreticalBeltTeeth);
  const recommendedPitchLength = recommendedBeltTeeth * t;

  return {
    theoreticalPitchLength,
    theoreticalBeltTeeth,
    recommendedBeltTeeth,
    recommendedPitchLength,
    deviation: recommendedPitchLength - theoreticalPitchLength
  };
}
