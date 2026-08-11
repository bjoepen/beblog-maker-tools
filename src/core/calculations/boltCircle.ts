export interface BoltCircleInput {
  pitchCircleDiameter: number;
  holeCount: number;
  startAngleDeg: number;
  centerX: number;
  centerY: number;
}

export interface BoltCirclePoint {
  index: number;
  angleDeg: number;
  x: number;
  y: number;
}

export interface BoltCircleResult {
  radius: number;
  angularPitch: number;
  points: BoltCirclePoint[];
}

export function calculateBoltCircle(input: BoltCircleInput): BoltCircleResult {
  if (!(input.pitchCircleDiameter > 0)) throw new Error('pitchCircleDiameter must be > 0');
  if (!Number.isInteger(input.holeCount) || input.holeCount < 2) throw new Error('holeCount must be an integer >= 2');

  const radius = input.pitchCircleDiameter / 2;
  const angularPitch = 360 / input.holeCount;
  const points = Array.from({ length: input.holeCount }, (_, i) => {
    const angleDeg = input.startAngleDeg + i * angularPitch;
    const angleRad = angleDeg * Math.PI / 180;
    return {
      index: i + 1,
      angleDeg,
      x: input.centerX + radius * Math.cos(angleRad),
      y: input.centerY + radius * Math.sin(angleRad)
    };
  });

  return { radius, angularPitch, points };
}
