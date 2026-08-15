export type DriverCurrentMode = 'rms' | 'peak';
export type CompatibilityStatus = 'pass' | 'warn' | 'fail';
export type DriverFormFactor = 'external' | 'plug-in';
export type CoolingMode = 'none' | 'heatsink' | 'active';

export interface DriverPreset {
  id: string;
  label: string;
  minRmsCurrent: number;
  maxRmsCurrent: number;
  minPeakCurrent: number;
  maxPeakCurrent: number;
  voltageRange?: string;
  source: 'STEPPERONLINE' | 'TI' | 'ALLEGRO' | 'ANALOG_DEVICES' | 'POLOLU';
  formFactor: DriverFormFactor;
  profileNote?: string;
  carrierDependent?: boolean;
  continuousRmsNoCooling?: number;
  continuousRmsHeatsink?: number;
  continuousRmsActive?: number;
  vref?: {
    kind: 'linear';
    voltsPerAmp: number;
    label: string;
    note: string;
  };
}

const SQRT2 = Math.SQRT2;

function rmsToPeak(rms: number): number {
  return rms * SQRT2;
}

export const DRIVER_PRESETS: DriverPreset[] = [
  { id: 'dm320t', label: 'STEPPERONLINE DM320T', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '10–30 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm332t', label: 'STEPPERONLINE DM332T', minRmsCurrent: 0.71, maxRmsCurrent: 2.29, minPeakCurrent: 1.0, maxPeakCurrent: 3.2, voltageRange: '10–30 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm422t', label: 'STEPPERONLINE DM422T', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '12–50 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm420y', label: 'STEPPERONLINE DM420Y', minRmsCurrent: 0.21, maxRmsCurrent: 1.56, minPeakCurrent: 0.3, maxPeakCurrent: 2.2, voltageRange: '18–36 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm542t', label: 'STEPPERONLINE DM542T', minRmsCurrent: 0.71, maxRmsCurrent: 3.2, minPeakCurrent: 1.0, maxPeakCurrent: 4.5, voltageRange: '18–50 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm542y', label: 'STEPPERONLINE DM542Y', minRmsCurrent: 0.71, maxRmsCurrent: 3.0, minPeakCurrent: 1.0, maxPeakCurrent: 4.2, voltageRange: '20–50 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm556t', label: 'STEPPERONLINE DM556T', minRmsCurrent: 1.3, maxRmsCurrent: 4.0, minPeakCurrent: 1.8, maxPeakCurrent: 5.6, voltageRange: '20–50 VDC', source: 'STEPPERONLINE', formFactor: 'external' },
  { id: 'dm556y', label: 'STEPPERONLINE DM556Y', minRmsCurrent: 1.2, maxRmsCurrent: 4.0, minPeakCurrent: 1.7, maxPeakCurrent: 5.6, voltageRange: '20–50 VDC', source: 'STEPPERONLINE', formFactor: 'external' },

  // Plug-in / StepStick-style reference profiles.
  // Values are deliberately tied to a concrete carrier/reference board where possible.
  {
    id: 'drv8825-pololu',
    label: 'DRV8825 Stecktreiber · Pololu Referenz',
    minRmsCurrent: 0.10,
    maxRmsCurrent: 2.20,
    minPeakCurrent: rmsToPeak(0.10),
    maxPeakCurrent: rmsToPeak(2.20),
    voltageRange: '8,2–45 VDC',
    source: 'POLOLU',
    formFactor: 'plug-in',
    profileNote: 'Referenzprofil für Pololu DRV8825 High Current Carrier. Clone-/StepStick-Boards können andere Sense-Widerstände und thermische Grenzen haben.',
    carrierDependent: true,
    continuousRmsNoCooling: 1.50,
    continuousRmsHeatsink: 1.50,
    continuousRmsActive: 2.20,
    vref: {
      kind: 'linear',
      voltsPerAmp: 0.5,
      label: 'VREF (Pololu DRV8825)',
      note: 'Nur für den Pololu-Carrier mit 0,100-Ω-Sense-Widerständen: VREF = I_limit / 2. Bei Clones zuerst Rsense/Board-Dokumentation prüfen.'
    }
  },
  {
    id: 'a4988-pololu',
    label: 'A4988 Stecktreiber · Pololu Standard',
    minRmsCurrent: 0.10,
    maxRmsCurrent: 2.00,
    minPeakCurrent: rmsToPeak(0.10),
    maxPeakCurrent: rmsToPeak(2.00),
    voltageRange: '8–35 VDC',
    source: 'POLOLU',
    formFactor: 'plug-in',
    profileNote: 'Referenzprofil für den Pololu A4988 Standard-Carrier. Nachbauten können abweichende Sense-Widerstände, Layouts und Kühlgrenzen besitzen.',
    carrierDependent: true,
    continuousRmsNoCooling: 1.00,
    continuousRmsHeatsink: 1.00,
    continuousRmsActive: 2.00,
    vref: {
      kind: 'linear',
      voltsPerAmp: 0.4,
      label: 'VREF (Pololu A4988 Standard)',
      note: 'Für den Pololu-Standard-Carrier mit 0,05-Ω-Sense-Widerständen gilt I_limit = VREF × 2,5. Bei anderen Boards ist die Formel ggf. anders.'
    }
  },
  {
    id: 'a4988-pololu-black',
    label: 'A4988 Stecktreiber · Pololu Black Edition',
    minRmsCurrent: 0.10,
    maxRmsCurrent: 2.00,
    minPeakCurrent: rmsToPeak(0.10),
    maxPeakCurrent: rmsToPeak(2.00),
    voltageRange: '8–35 VDC',
    source: 'POLOLU',
    formFactor: 'plug-in',
    profileNote: 'Referenzprofil für aktuelle Pololu A4988 Black Edition mit 0,068-Ω-Sense-Widerständen.',
    carrierDependent: true,
    continuousRmsNoCooling: 1.20,
    continuousRmsHeatsink: 1.20,
    continuousRmsActive: 1.40,
    vref: {
      kind: 'linear',
      voltsPerAmp: 0.544,
      label: 'VREF (Pololu A4988 Black)',
      note: 'Für aktuelle Pololu Black Edition mit 0,068-Ω-Sense-Widerständen: VREF = 8 × I_limit × 0,068 Ω. Ältere Platinen können 0,05 Ω verwenden.'
    }
  },
  {
    id: 'tmc2208-reference',
    label: 'TMC2208 · ADI/TRINAMIC Referenz',
    minRmsCurrent: 0.10,
    maxRmsCurrent: 1.35,
    minPeakCurrent: rmsToPeak(0.10),
    maxPeakCurrent: 2.00,
    voltageRange: '4,75–36 VDC',
    source: 'ANALOG_DEVICES',
    formFactor: 'plug-in',
    profileNote: 'ADI nennt für das TMC2208-EVAL 1,35 A RMS / 2 A Peak. StepStick-Module können thermisch deutlich anders ausfallen; deren Board-Datenblatt hat Vorrang.',
    carrierDependent: true
  },
  {
    id: 'tmc2209-reference',
    label: 'TMC2209 · ADI/TRINAMIC Referenz',
    minRmsCurrent: 0.10,
    maxRmsCurrent: 1.70,
    minPeakCurrent: rmsToPeak(0.10),
    maxPeakCurrent: 2.40,
    voltageRange: '4,75–29 VDC',
    source: 'ANALOG_DEVICES',
    formFactor: 'plug-in',
    profileNote: 'ADI nennt für das TMC2209-EVAL 1,7 A RMS / 2,4 A Peak. StepStick-Carrier unterscheiden sich bei Kühlung, Rsense und Stromkonfiguration.',
    carrierDependent: true
  }
];

export function getThermalRmsLimit(preset: DriverPreset, cooling: CoolingMode): number {
  if (preset.formFactor !== 'plug-in') return preset.maxRmsCurrent;
  if (cooling === 'active') return preset.continuousRmsActive ?? preset.maxRmsCurrent;
  if (cooling === 'heatsink') return preset.continuousRmsHeatsink ?? preset.continuousRmsNoCooling ?? preset.maxRmsCurrent;
  return preset.continuousRmsNoCooling ?? preset.maxRmsCurrent;
}

export function getPresetCurrentRange(preset: DriverPreset, mode: DriverCurrentMode, cooling: CoolingMode): { min: number; max: number } {
  const thermalMaxRms = Math.min(getThermalRmsLimit(preset, cooling), preset.maxRmsCurrent);
  if (mode === 'peak') {
    return {
      min: preset.minPeakCurrent,
      max: Math.min(preset.maxPeakCurrent, thermalMaxRms * SQRT2)
    };
  }
  return { min: preset.minRmsCurrent, max: thermalMaxRms };
}

export function calculateVref(preset: DriverPreset, currentLimitAmps: number): number | null {
  if (!preset.vref || !Number.isFinite(currentLimitAmps) || currentLimitAmps <= 0) return null;
  return currentLimitAmps * preset.vref.voltsPerAmp;
}

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

const PEAK_TO_RMS = 1 / SQRT2;
const RMS_TO_PEAK = SQRT2;
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
        ? 'Der Treiber erreicht den Motor-Nennstrom unter den gewählten Betriebsbedingungen nicht. Der Motor kann betrieben werden, sein verfügbares Drehmoment wird aber nicht vollständig genutzt.'
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
