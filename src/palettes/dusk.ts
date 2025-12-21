/**
 * Exo - Dusk Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Evening sky - deep purples, warm ambers, fading orange light
 * - Contrast: Light text on dark background
 * - Hierarchy: Code focus > UI chrome
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

  // Accent - muted amber (10-15% saturation for UI)
  primary: '#a08870',

  // Syntax - vibrant (30-40% saturation) for code focus
  keyword: '#d888b0', // orchid - twilight bloom
  function: '#d8a868', // amber - sunlight
  string: '#70c8a0', // sage - evening calm
  number: '#d8a070', // apricot - warm glow
  comment: '#706878', // muted purple-gray - fading light
  operator: '#a8a0b0', // lavender gray - dusk haze
  type: '#a890d0', // violet - evening sky
  constant: '#d0a070', // gold - twilight glow
  error: '#d08080', // coral - warning

  // UI - deep purple-tinted surfaces
  border: '#2a2430',
  surface: '#201a28',
  surfaceDark: '#141018',
  surfaceLight: '#282030',
  overlay: '#241e2c',
  lineNumber: '#504860',
  panelBackground: '#1a1520',

  // Git - muted conventional colors (10-15% saturation)
  added: '#88a890',
  deleted: '#a88080',
  modified: '#a08870',
  ignored: '#605868',
  conflicting: '#a89880',

  // Terminal - muted evening tones (10-15% saturation)
  red: '#a88080',
  green: '#88a890',
  yellow: '#a8a078',
  blue: '#8090a8',
  magenta: '#a080a0',
} as const
