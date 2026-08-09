export type ToolCategory = 'Antrieb' | 'CNC' | '3D-Druck';
export type ToolId = 'timing-belt' | 'axis-scaling' | 'feeds-speeds' | 'volumetric-flow' | 'filament-cost' | 'dimensional-correction';

export interface ToolDefinition {
  id: ToolId;
  title: string;
  category: ToolCategory;
  description: string;
}

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  { id: 'timing-belt', title: 'Zahnriemen', category: 'Antrieb', description: 'Wirklänge und passende Riemenzähne berechnen.' },
  { id: 'axis-scaling', title: 'Achsskalierung', category: 'CNC', description: 'Steps/mm für Riemen- und Spindelantriebe.' },
  { id: 'feeds-speeds', title: 'Drehzahl & Vorschub', category: 'CNC', description: 'Drehzahl und Vorschub aus Schnittdaten ableiten.' },
  { id: 'volumetric-flow', title: 'Volumenstrom', category: '3D-Druck', description: 'Materialfluss und maximale Druckgeschwindigkeit abschätzen.' },
  { id: 'filament-cost', title: 'Filament & Kosten', category: '3D-Druck', description: 'Länge, Gewicht, Volumen und Materialkosten umrechnen.' },
  { id: 'dimensional-correction', title: 'Maßkorrektur', category: '3D-Druck', description: 'Skalierung aus Soll- und Istmaßen für X/Y/Z bestimmen.' }
];
