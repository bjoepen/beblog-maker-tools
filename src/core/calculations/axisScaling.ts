export type AxisDrive =
  | { type: 'belt'; pitch: number; pulleyTeeth: number }
  | { type: 'spindle'; lead: number };

export interface AxisScalingInput {
  fullStepsPerRevolution: number;
  microstepping: number;
  drive: AxisDrive;
}

export interface AxisScalingResult {
  microstepsPerRevolution: number;
  travelPerRevolution: number;
  stepsPerMillimeter: number;
  theoreticalResolution: number;
}

export function calculateAxisScaling(input: AxisScalingInput): AxisScalingResult {
  const { fullStepsPerRevolution, microstepping, drive } = input;
  if (!Number.isFinite(fullStepsPerRevolution) || fullStepsPerRevolution <= 0) {
    throw new RangeError('Motorschritte müssen größer als 0 sein.');
  }
  if (!Number.isFinite(microstepping) || microstepping <= 0) {
    throw new RangeError('Microstepping muss größer als 0 sein.');
  }

  const travelPerRevolution = drive.type === 'belt'
    ? drive.pitch * drive.pulleyTeeth
    : drive.lead;

  if (!Number.isFinite(travelPerRevolution) || travelPerRevolution <= 0) {
    throw new RangeError('Der Weg pro Umdrehung muss größer als 0 sein.');
  }

  const microstepsPerRevolution = fullStepsPerRevolution * microstepping;
  const stepsPerMillimeter = microstepsPerRevolution / travelPerRevolution;

  return {
    microstepsPerRevolution,
    travelPerRevolution,
    stepsPerMillimeter,
    theoreticalResolution: 1 / stepsPerMillimeter
  };
}
