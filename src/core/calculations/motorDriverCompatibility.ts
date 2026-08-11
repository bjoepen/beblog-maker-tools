export type DriverCurrentMode = 'rms' | 'peak';
export type CompatibilityStatus = 'pass' | 'warn' | 'fail';

export interface DriverPreset {
  id: string;
  label: string;
  minRmsCurrent: number;
  maxRmsCurrent: number;
  minPeakCurrent: number;
  maxPeakCurrent: number;
  voltageRange?: string;
  source: 'STEPPERONLINE';
}

export const DRIVER_PRESETS: DriverPreset[] = [
  { id: 'dm320t', label: 'STEPPERONLINE DM320T', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '10–30 VDC', source: 'STEPPERONLINE' },
  { id: 'dm332t', label: 'STEPPERONLINE DM332T', minRmsCurrent: 0.71, maxRmsCurrent: 2.29, minPeakCurrent: 1.0, maxPeakCurrent: 3.2, voltageRange: '10–30 VDC', source: 'STEPPERONLINE' },
  { id: 'dm422t', label: 'STEPPERONLINE DM422T', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '12–50 VDC', source: 'STEPPERONLINE' },
  { id: 'dm420y', label: 'STEPPERONLINE DM420Y', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '18–36 VDC', source: 'STEPPERONLINE' },
  { id: 'dm542t', label: 'STEPPERONLINE DM542T', minRmsCurrent: 0.71, maxRmsCurrent: 3.2, minPeakCurrent: 1.0, maxPeakCurrent: 4.5, voltageRange: '18–50 VDC', source: 'STEPPERONLINE' },
  { id: 'dm542y', label: 'STEPPERONLINE DM542Y', minRmsCurrent: 0.71, maxRmsCurrent: 3.0, minPeakCurrent: 1.0, maxPeakCurrent: 4.2, voltageRange: '20–50 VDC', source: 'STEPPERONLINE' },
  { id: 'dm556t', label: 'STEPPERONLINE DM556T', minRmsCurrent: 1.3, maxRmsCurrent: 4.0, minPeakCurrent: 1.8, maxPeakCurrent: 5.6, voltageRange: '20–50 VDC', source: 'STEPPERONLINE' },
  { id: 'dm556y', label: 'STEPPERONLINE DM556Y', minRmsCurrent: 1.2, maxRmsCurrent: 4.0, minPeakCurrent: 1.7, maxPeakCurrent: 5.6, voltageRange: '20–50 VDC', source: 'STEPPERONLINE' }
];

export interface MotorDriverCompatibilityInput {
  motorRatedCurrent: number;
  driverMinCurrent: number;
  driverMaxCurrent: number;
  selectedDriverCurrent: number;
  driverCurrentMode: DriverCurrentMode;
}

export interface MotorDriverCompatibilityResult {
  status: CompatibilityStatus;
  normalizedMinRms: number;
  normalizedMaxRms: number;
  normalizedSelectedRms: number;
  recommendedRms: number | null;
  recommendedDisplayCurrent: number | null;
  utilizationPercent: number;
  headline: string;
  explanation: string;
}

const PEAK_TO_RMS = 1 / Math.SQRT2;
const RMS_TO_PEAK = Math.SQRT2;
const GOOD_FIT_LOWER_RATIO = 0.9;

function toRms(value: number, mode: DriverCurrentMode): number {
  return mode === 'peak' ? value * PEAK_TO_RMS : value;
}

function fromRms(value: number, mode: DriverCurrentMode): number {
  return mode === 'peak' ? value * RMS_TO_PEAK : value;
}

export function calculateMotorDriverCompatibility(input: MotorDriverCompatibilityInput): MotorDriverCompatibilityResult {
  const normalizedMinRms = toRms(input.driverMinCurrent, input.driverCurrentMode);
  const normalizedMaxRms = toRms(input.driverMaxCurrent, input.driverCurrentMode);
  const normalizedSelectedRms = toRms(input.selectedDriverCurrent, input.driverCurrentMode);

  const safeSettingExists = normalizedMinRms <= input.motorRatedCurrent;
  const recommendedRms = safeSettingExists ? Math.min(input.motorRatedCurrent, normalizedMaxRms) : null;
  const recommendedDisplayCurrent = recommendedRms === null ? null : fromRms(recommendedRms, input.driverCurrentMode);
  const utilizationPercent = (normalizedSelectedRms / input.motorRatedCurrent) * 100;

  if (!safeSettingExists) {
    return {
      status: 'fail', normalizedMinRms, normalizedMaxRms, normalizedSelectedRms,
      recommendedRms, recommendedDisplayCurrent, utilizationPercent,
      headline: 'Treiber für diesen Motor nicht geeignet',
      explanation: 'Schon der kleinste einstellbare Treiberstrom liegt über dem Nennstrom des Motors. Es gibt damit in diesem Strombereich keine sichere Einstellung.'
    };
  }

  if (normalizedSelectedRms > input.motorRatedCurrent) {
    return {
      status: 'warn', normalizedMinRms, normalizedMaxRms, normalizedSelectedRms,
      recommendedRms, recommendedDisplayCurrent, utilizationPercent,
      headline: 'Funktioniert grundsätzlich, aber so nicht empfohlen',
      explanation: 'Die gewählte Stufe liegt über dem Motor-Nennstrom. Eine niedrigere, passende Stromstufe ist verfügbar und sollte bevorzugt werden.'
    };
  }

  if (normalizedMaxRms < input.motorRatedCurrent || normalizedSelectedRms < input.motorRatedCurrent * GOOD_FIT_LOWER_RATIO) {
    return {
      status: 'warn', normalizedMinRms, normalizedMaxRms, normalizedSelectedRms,
      recommendedRms, recommendedDisplayCurrent, utilizationPercent,
      headline: 'Funktioniert, aber mit reduziertem Drehmoment',
      explanation: normalizedMaxRms < input.motorRatedCurrent
        ? 'Der Treiber erreicht den Motor-Nennstrom nicht. Der Motor kann betrieben werden, sein verfügbares Drehmoment wird aber nicht vollständig genutzt.'
        : 'Die gewählte Stromstufe liegt deutlich unter dem Motor-Nennstrom. Das reduziert Wärme, aber auch das verfügbare Drehmoment.'
    };
  }

  return {
    status: 'pass', normalizedMinRms, normalizedMaxRms, normalizedSelectedRms,
    recommendedRms, recommendedDisplayCurrent, utilizationPercent,
    headline: 'Motor und Treiber passen gut zusammen',
    explanation: 'Die gewählte Stromstufe liegt im sicheren Bereich und nahe am Nennstrom des Motors.'
  };
}
