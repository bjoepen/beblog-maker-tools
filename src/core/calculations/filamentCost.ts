export interface FilamentBaseInput {
  filamentDiameter: number;
  density: number;
  pricePerKg: number;
}

export interface FilamentFromLengthInput extends FilamentBaseInput {
  lengthMeters: number;
}

export interface FilamentFromWeightInput extends FilamentBaseInput {
  weightGrams: number;
}

export interface FilamentCostResult {
  lengthMeters: number;
  weightGrams: number;
  volumeCm3: number;
  materialCost: number;
}

function crossSectionMm2(diameter: number): number {
  return Math.PI * Math.pow(diameter / 2, 2);
}

export function calculateFilamentFromLength(input: FilamentFromLengthInput): FilamentCostResult {
  const volumeMm3 = crossSectionMm2(input.filamentDiameter) * input.lengthMeters * 1000;
  const volumeCm3 = volumeMm3 / 1000;
  const weightGrams = volumeCm3 * input.density;
  const materialCost = (weightGrams / 1000) * input.pricePerKg;
  return { lengthMeters: input.lengthMeters, weightGrams, volumeCm3, materialCost };
}

export function calculateFilamentFromWeight(input: FilamentFromWeightInput): FilamentCostResult {
  const volumeCm3 = input.weightGrams / input.density;
  const volumeMm3 = volumeCm3 * 1000;
  const lengthMeters = volumeMm3 / crossSectionMm2(input.filamentDiameter) / 1000;
  const materialCost = (input.weightGrams / 1000) * input.pricePerKg;
  return { lengthMeters, weightGrams: input.weightGrams, volumeCm3, materialCost };
}
