export type ToolCategory = 'Antrieb' | 'CNC';
export type ToolId = 'timing-belt' | 'axis-scaling' | 'feeds-speeds';

export interface ToolDefinition {
  id: ToolId;
  title: string;
  category: ToolCategory;
  description: string;
}

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    id: 'timing-belt',
    title: 'Zahnriemen',
    category: 'Antrieb',
    description: 'Wirklänge und passende Riemenzähne berechnen.'
  },
  {
    id: 'axis-scaling',
    title: 'Achsskalierung',
    category: 'CNC',
    description: 'Steps/mm für Riemen- und Spindelantriebe.'
  },
  {
    id: 'feeds-speeds',
    title: 'Drehzahl & Vorschub',
    category: 'CNC',
    description: 'Drehzahl und Vorschub aus Schnittdaten ableiten.'
  }
];
