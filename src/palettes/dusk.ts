/**
 * Exo - Dusk Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Evening sky - deep purples, warm ambers, fading orange light
 * - Contrast: Light text on dark background
 * - Hierarchy: Clear text weight progression
 * - Variety: Sunset-inspired syntax colors
 * - Unity: Warm evening tones throughout
 */

export const dusk = {
  name: 'Exo - Dusk',

  // Base - deep evening sky
  background: '#1a1520',
  foreground: '#c0b8c8',
  foregroundBright: '#e8e0f0',
  foregroundDim: '#787080',

  // Accent - vivid amber like setting sun
  primary: '#e8a050',

  // Syntax - vibrant sunset/evening palette
  keyword: '#e080b0', // vivid orchid - twilight bloom
  function: '#e8b060', // bright amber - sunlight
  string: '#60c890', // vibrant sage - fresh evening
  number: '#e8a860', // bright apricot - warm glow
  comment: '#706878', // muted purple-gray - fading light
  operator: '#a8a0b0', // lavender gray - dusk haze
  type: '#b090e0', // vivid violet - evening sky
  constant: '#e0a870', // warm gold - twilight glow
  error: '#e86060', // vivid coral - clear warning

  // UI - deep purple-tinted surfaces
  border: '#2a2430',
  surface: '#201a28',
  surfaceDark: '#141018',
  surfaceLight: '#282030',
  overlay: '#241e2c',
  lineNumber: '#504860',
  panelBackground: '#1a1520',

  // Git - vibrant conventional colors
  added: '#60c888',
  deleted: '#e06060',
  modified: '#e8a050',
  ignored: '#605868',
  conflicting: '#e8a860',

  // Terminal - vibrant evening tones
  red: '#f06868',
  green: '#60d090',
  yellow: '#f0c060',
  blue: '#60a0e0',
  magenta: '#e070c0',
} as const
