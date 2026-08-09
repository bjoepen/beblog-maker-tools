export type ToolCategory = 'Antrieb' | 'CNC';
export type ToolId = 'timing-belt' | 'axis-scaling' | 'feeds-speeds';

export interface ToolDefinition {
  id: ToolId;
  title: string;
  category: ToolCategory;
  icon: string;
  description: string;
}

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    id: 'timing-belt',
    title: 'Zahnriemen',
    category: 'Antrieb',
    icon: '⟲',
    description: 'Wirklänge und passende Riemenzähne berechnen.'
  },
  {
    id: 'axis-scaling',
    title: 'Achsskalierung',
    category: 'CNC',
    icon: '↔',
    description: 'Steps/mm für Riemen- und Spindelantriebe.'
  },
  {
    id: 'feeds-speeds',
    title: 'Drehzahl & Vorschub',
    category: 'CNC',
    icon: '⌁',
    description: 'Drehzahl und Vorschub aus Schnittdaten ableiten.'
  }
];
