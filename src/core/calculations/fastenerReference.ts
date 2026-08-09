export type MetricSize = 'M3' | 'M4' | 'M5' | 'M6' | 'M8' | 'M10' | 'M12' | 'M14' | 'M16';
export type HeadType = 'hex-iso' | 'socket-cap';

export interface MetricFastenerReference {
  size: MetricSize;
  nominalDiameter: number;
  coarsePitch: number;
  tapDrill: number;
  clearanceFine: number;
  clearanceNormal: number;
  clearanceCoarse: number;
  hexWrenchIso: number;
  socketHexKey: number;
}

// Werkstattreferenz für metrische Regelgewinde. Durchgangsbohrungen orientieren sich an
// ISO-273-üblichen Reihen; Schlüsselweiten an aktuellen ISO-Sechskantköpfen bzw. ISO 4762.
export const METRIC_FASTENERS: MetricFastenerReference[] = [
  { size: 'M3',  nominalDiameter: 3,  coarsePitch: 0.5,  tapDrill: 2.5,  clearanceFine: 3.2,  clearanceNormal: 3.4,  clearanceCoarse: 3.6,  hexWrenchIso: 5.5, socketHexKey: 2.5 },
  { size: 'M4',  nominalDiameter: 4,  coarsePitch: 0.7,  tapDrill: 3.3,  clearanceFine: 4.3,  clearanceNormal: 4.5,  clearanceCoarse: 4.8,  hexWrenchIso: 7,   socketHexKey: 3 },
  { size: 'M5',  nominalDiameter: 5,  coarsePitch: 0.8,  tapDrill: 4.2,  clearanceFine: 5.3,  clearanceNormal: 5.5,  clearanceCoarse: 5.8,  hexWrenchIso: 8,   socketHexKey: 4 },
  { size: 'M6',  nominalDiameter: 6,  coarsePitch: 1.0,  tapDrill: 5.0,  clearanceFine: 6.4,  clearanceNormal: 6.6,  clearanceCoarse: 7.0,  hexWrenchIso: 10,  socketHexKey: 5 },
  { size: 'M8',  nominalDiameter: 8,  coarsePitch: 1.25, tapDrill: 6.8,  clearanceFine: 8.4,  clearanceNormal: 9.0,  clearanceCoarse: 10.0, hexWrenchIso: 13,  socketHexKey: 6 },
  { size: 'M10', nominalDiameter: 10, coarsePitch: 1.5,  tapDrill: 8.5,  clearanceFine: 10.5, clearanceNormal: 11.0, clearanceCoarse: 12.0, hexWrenchIso: 16,  socketHexKey: 8 },
  { size: 'M12', nominalDiameter: 12, coarsePitch: 1.75, tapDrill: 10.2, clearanceFine: 13.0, clearanceNormal: 13.5, clearanceCoarse: 15.0, hexWrenchIso: 18,  socketHexKey: 10 },
  { size: 'M14', nominalDiameter: 14, coarsePitch: 2.0,  tapDrill: 12.0, clearanceFine: 15.0, clearanceNormal: 15.5, clearanceCoarse: 17.0, hexWrenchIso: 21,  socketHexKey: 12 },
  { size: 'M16', nominalDiameter: 16, coarsePitch: 2.0,  tapDrill: 14.0, clearanceFine: 17.0, clearanceNormal: 17.5, clearanceCoarse: 19.0, hexWrenchIso: 24,  socketHexKey: 14 }
];

export function getMetricFastener(size: MetricSize): MetricFastenerReference {
  const entry = METRIC_FASTENERS.find((item) => item.size === size);
  if (!entry) throw new Error(`Unsupported metric size: ${size}`);
  return entry;
}

export function getDriveLabel(headType: HeadType): string {
  return headType === 'hex-iso' ? 'Schlüsselweite' : 'Innensechskant';
}

export function getDriveSize(ref: MetricFastenerReference, headType: HeadType): number {
  return headType === 'hex-iso' ? ref.hexWrenchIso : ref.socketHexKey;
}
