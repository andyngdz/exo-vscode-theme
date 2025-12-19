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

  // Syntax - night sky palette
  keyword: '#9080c0', // soft violet - distant stars
  function: '#70b8c8', // pale cyan - aurora
  string: '#70a898', // muted seafoam - bioluminescence
  number: '#a0a8b8', // soft silver - starlight
  comment: '#505868', // deep slate - night clouds
  operator: '#808898', // cool gray - moonlit mist
  type: '#8098c8', // cool periwinkle - pre-dawn sky
  constant: '#9898b0', // pale lavender - distant nebula
  error: '#c07080', // muted rose - warning beacon

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
