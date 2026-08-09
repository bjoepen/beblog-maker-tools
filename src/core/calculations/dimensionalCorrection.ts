export interface AxisDimension {
  target: number;
  measured: number;
}

export interface AxisCorrectionResult {
  scalePercent: number;
  correctionPercent: number;
  deviationMm: number;
}

export function calculateAxisCorrection(input: AxisDimension): AxisCorrectionResult {
  const scalePercent = (input.target / input.measured) * 100;
  return {
    scalePercent,
    correctionPercent: scalePercent - 100,
    deviationMm: input.measured - input.target
  };
}
