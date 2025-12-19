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

  // Accent - warm amber like setting sun
  primary: '#d89050',

  // Syntax - sunset/evening palette (purples, soft oranges, twilight)
  keyword: '#c490b0', // soft orchid - twilight bloom
  function: '#d4a870', // warm amber - fading sunlight
  string: '#8aad98', // muted sage - evening calm
  number: '#d0a878', // soft apricot - warm afterglow
  comment: '#605868', // muted purple-gray - fading light
  operator: '#908898', // lavender gray - dusk haze
  type: '#a8a0c8', // soft violet - evening sky
  constant: '#c8a890', // warm sand - twilight glow
  error: '#d08080', // muted coral - gentle warning

  // UI - deep purple-tinted surfaces
  border: '#2a2430',
  surface: '#201a28',
  surfaceDark: '#141018',
  surfaceLight: '#282030',
  overlay: '#241e2c',
  lineNumber: '#504860',
  panelBackground: '#1a1520',

  // Git - conventional colors
  added: '#80b898',
  deleted: '#d07070',
  modified: '#d89050',
  ignored: '#605868',
  conflicting: '#d8a070',

  // Terminal - warm evening tones
  red: '#e07878',
  green: '#88c098',
  yellow: '#e0b870',
  blue: '#8098d0',
  magenta: '#c088b8',
} as const
