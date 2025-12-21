/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Starless night - deep blues, silver moonlight, cool stillness
 * - Contrast: Light text on dark background
 * - Hierarchy: Code focus > UI chrome
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

  // Accent - muted ice blue (10-15% saturation for UI)
  primary: '#7898a8',

  // Syntax - vibrant (30-40% saturation) for code focus
  keyword: '#88a8d8', // periwinkle - starlit sky
  function: '#68c0c8', // cyan - aurora glow
  string: '#78c0b0', // seafoam - moonlit tide
  number: '#a0b8d0', // silver-blue - starlight
  comment: '#606878', // deep slate - night clouds
  operator: '#90a0b0', // cool slate - shadow
  type: '#78b0d8', // sky blue - distant horizon
  constant: '#a8b8c8', // silver - moonbeam
  error: '#c88890', // rose - warning

  // UI - deep blue-tinted surfaces
  border: '#1a2028',
  surface: '#141820',
  surfaceDark: '#0a0c10',
  surfaceLight: '#1a2028',
  overlay: '#181c24',
  lineNumber: '#404858',
  panelBackground: '#0f1218',

  // Git - muted conventional colors (10-15% saturation)
  added: '#88a898',
  deleted: '#a88888',
  modified: '#7898a8',
  ignored: '#505868',
  conflicting: '#a8a088',

  // Terminal - muted night tones (10-15% saturation)
  red: '#a88888',
  green: '#88a898',
  yellow: '#a8a088',
  blue: '#8898a8',
  magenta: '#a088a0',
} as const
