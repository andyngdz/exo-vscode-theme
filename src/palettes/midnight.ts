/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Starless night - deep blues, silver moonlight, cool stillness
 * - Contrast: Light text on dark background
 * - Hierarchy: Clear text weight progression
 * - Variety: Night-inspired syntax colors
 * - Unity: Cool blue tones throughout
 */

export const midnight = {
  name: 'Exo - Midnight',

  // Base - deep blue-black night sky
  background: '#0f1218',
  foreground: '#b0b8c8',
  foregroundBright: '#e0e8f0',
  foregroundDim: '#606878',

  // Accent - vivid ice blue like moonlight on water
  primary: '#50b0e0',

  // Syntax - vibrant night sky palette
  keyword: '#70a0f0', // vivid periwinkle - starlit sky
  function: '#50d8e0', // bright cyan - aurora glow
  string: '#60d0b0', // vibrant seafoam - moonlit tide
  number: '#a0c0e0', // bright silver - starlight
  comment: '#606878', // deep slate - night clouds
  operator: '#90a0b0', // cool slate - shadow
  type: '#60b8f0', // vivid sky blue - distant horizon
  constant: '#b0c0d0', // bright silver - moonbeam
  error: '#f07080', // vivid rose - clear warning

  // UI - deep blue-tinted surfaces
  border: '#1a2028',
  surface: '#141820',
  surfaceDark: '#0a0c10',
  surfaceLight: '#1a2028',
  overlay: '#181c24',
  lineNumber: '#404858',
  panelBackground: '#0f1218',

  // Git - vibrant conventional colors
  added: '#50d0a0',
  deleted: '#f06878',
  modified: '#50b0e0',
  ignored: '#505868',
  conflicting: '#e0c060',

  // Terminal - vibrant night tones
  red: '#f07080',
  green: '#50e0a0',
  yellow: '#e0d060',
  blue: '#60b0f0',
  magenta: '#d070e0',
} as const
