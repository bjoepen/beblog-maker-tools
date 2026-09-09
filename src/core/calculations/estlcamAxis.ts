export type EstlcamDrive =
  | { type: 'belt'; pitch: number; pulleyTeeth: number }
  | { type: 'spindle'; lead: number };

export interface EstlcamAxisInput {
  fullStepsPerRevolution: number;
  microstepping: number;
  drive: EstlcamDrive;
}

export interface EstlcamAxisResult {
  fullStepsPerRevolution: number;
  microstepping: number;
  stepsPerRevolution: number;
  travelPerRevolution: number;
  stepsPerMillimeter: number;
  theoreticalResolution: number;
}

export interface EstlcamCalibrationInput {
  currentTravelPerRevolution: number;
  commandedDistance: number;
  measuredDistance: number;
}

export interface EstlcamCalibrationResult {
  correctionFactor: number;
  correctedTravelPerRevolution: number;
  relativeErrorPercent: number;
}

function requirePositive(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${label} muss größer als 0 sein.`);
  }
}

export function calculateEstlcamAxis(input: EstlcamAxisInput): EstlcamAxisResult {
  requirePositive(input.fullStepsPerRevolution, 'Motorschritte');
  requirePositive(input.microstepping, 'Microstepping');

  const travelPerRevolution = input.drive.type === 'belt'
    ? input.drive.pitch * input.drive.pulleyTeeth
    : input.drive.lead;

  requirePositive(travelPerRevolution, 'Weg je Umdrehung');

  const stepsPerRevolution = input.fullStepsPerRevolution * input.microstepping;
  const stepsPerMillimeter = stepsPerRevolution / travelPerRevolution;

  return {
    fullStepsPerRevolution: input.fullStepsPerRevolution,
    microstepping: input.microstepping,
    stepsPerRevolution,
    travelPerRevolution,
    stepsPerMillimeter,
    theoreticalResolution: 1 / stepsPerMillimeter
  };
}

export function calibrateEstlcamTravel(input: EstlcamCalibrationInput): EstlcamCalibrationResult {
  requirePositive(input.currentTravelPerRevolution, 'Aktueller Weg je Umdrehung');
  requirePositive(input.commandedDistance, 'Sollweg');
  requirePositive(input.measuredDistance, 'Istweg');

  const correctionFactor = input.measuredDistance / input.commandedDistance;
  const correctedTravelPerRevolution = input.currentTravelPerRevolution * correctionFactor;
  const relativeErrorPercent = ((input.measuredDistance - input.commandedDistance) / input.commandedDistance) * 100;

  return { correctionFactor, correctedTravelPerRevolution, relativeErrorPercent };
}
