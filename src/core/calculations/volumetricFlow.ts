export interface VolumetricFlowInput {
  lineWidth: number;
  layerHeight: number;
  printSpeed: number;
  maxVolumetricFlow: number;
}

export interface VolumetricFlowResult {
  requiredVolumetricFlow: number;
  maxPrintSpeed: number;
  utilizationPercent: number;
  withinLimit: boolean;
}

export function calculateVolumetricFlow(input: VolumetricFlowInput): VolumetricFlowResult {
  const requiredVolumetricFlow = input.lineWidth * input.layerHeight * input.printSpeed;
  const crossSection = input.lineWidth * input.layerHeight;
  const maxPrintSpeed = input.maxVolumetricFlow / crossSection;
  const utilizationPercent = (requiredVolumetricFlow / input.maxVolumetricFlow) * 100;

  return {
    requiredVolumetricFlow,
    maxPrintSpeed,
    utilizationPercent,
    withinLimit: requiredVolumetricFlow <= input.maxVolumetricFlow
  };
}
