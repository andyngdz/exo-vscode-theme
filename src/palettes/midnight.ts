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

  // Accent - ice blue like moonlight on water
  primary: '#70a0c0',

  // Syntax - night sky palette (blues, silvers, moonlight)
  keyword: '#90a8d0', // soft periwinkle - starlit sky
  function: '#78c0c8', // pale cyan - aurora glow
  string: '#88b8a8', // soft seafoam - moonlit tide
  number: '#a8b0c0', // cool silver - starlight
  comment: '#505868', // deep slate - night clouds
  operator: '#788090', // cool slate - shadow
  type: '#80a8c8', // sky blue - distant horizon
  constant: '#a0a8b8', // pale silver - moonbeam
  error: '#c08088', // muted rose - soft warning

  // UI - deep blue-tinted surfaces
  border: '#1a2028',
  surface: '#141820',
  surfaceDark: '#0a0c10',
  surfaceLight: '#1a2028',
  overlay: '#181c24',
  lineNumber: '#404858',
  panelBackground: '#0f1218',

  // Git - conventional colors with cool tint
  added: '#70a898',
  deleted: '#c07080',
  modified: '#70a0c0',
  ignored: '#505868',
  conflicting: '#a0a8b8',

  // Terminal - cool night tones
  red: '#d08088',
  green: '#80c0a0',
  yellow: '#c8b878',
  blue: '#80a8d0',
  magenta: '#b088c0',
} as const
