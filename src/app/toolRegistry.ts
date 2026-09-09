export type ToolCategory = 'Antrieb' | 'CNC' | '3D-Druck' | 'Werkstatt';
export type ToolId =
  | 'timing-belt' | 'axis-scaling' | 'feeds-speeds'
  | 'volumetric-flow' | 'filament-cost' | 'dimensional-correction'
  | 'fastener-finder' | 'thread-drill' | 'bolt-circle' | 'motor-driver' | 'estlcam-axis';

export interface ToolDefinition {
  id: ToolId;
  title: string;
  category: ToolCategory;
  description: string;
}

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  { id: 'timing-belt', title: 'Zahnriemen', category: 'Antrieb', description: 'Wirklänge und passende Riemenzähne berechnen.' },
  { id: 'axis-scaling', title: 'Achsskalierung', category: 'CNC', description: 'Steps/mm für GRBL, grblHAL und LinuxCNC.' },
  { id: 'estlcam-axis', title: 'Estlcam Achsberechnung', category: 'CNC', description: 'Schritte je Umdrehung, Weg je Umdrehung und Verfahrweg-Kalibrierung für Estlcam.' },
  { id: 'feeds-speeds', title: 'Drehzahl & Vorschub', category: 'CNC', description: 'Drehzahl und Vorschub aus Schnittdaten ableiten.' },
  { id: 'motor-driver', title: 'Motor & Treiber', category: 'CNC', description: 'Motor-Nennstrom, Treiberbereich und gewählte Stromstufe bewerten.' },
  { id: 'volumetric-flow', title: 'Volumenstrom', category: '3D-Druck', description: 'Materialfluss und maximale Druckgeschwindigkeit abschätzen.' },
  { id: 'filament-cost', title: 'Filament & Kosten', category: '3D-Druck', description: 'Länge, Gewicht, Volumen und Materialkosten umrechnen.' },
  { id: 'dimensional-correction', title: 'Maßkorrektur', category: '3D-Druck', description: 'Skalierung aus Soll- und Istmaßen für X/Y/Z bestimmen.' },
  { id: 'fastener-finder', title: 'Schrauben & Schlüsselweiten', category: 'Werkstatt', description: 'Werkzeug, Regelgewinde und typische Bohrungswerte für metrische Schrauben nachschlagen.' },
  { id: 'thread-drill', title: 'Gewinde & Bohrungen', category: 'Werkstatt', description: 'Kernloch- und Durchgangsbohrungen für metrische Regelgewinde nachschlagen.' },
  { id: 'bolt-circle', title: 'Lochkreis', category: 'Werkstatt', description: 'Gleichmäßig verteilte Bohrungen auf einem Teilkreis als X/Y-Koordinaten berechnen.' }
];
