/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic lighting
 *
 * Identity: Total eclipse - deep crimsons, warm shadows, corona flames
 * - Contrast: High contrast for dramatic effect
 * - Hierarchy: Code focus > UI chrome
 * - Variety: Eclipse-inspired syntax colors
 * - Unity: Warm dramatic tones throughout
 */

export const eclipse = {
  name: 'Exo - Eclipse',

  // Base - near-black with subtle warm undertone
  background: '#12100f',
  foreground: '#c8c0b8',
  foregroundBright: '#f0e8e0',
  foregroundDim: '#706860',

  // Accent - muted crimson (10-15% saturation for UI)
  primary: '#987878',

  // Syntax - vibrant (30-40% saturation) for code focus
  keyword: '#d08090', // rose - corona flames
  function: '#d0a060', // gold - scattered sunlight
  string: '#78b898', // sage - earth tone
  number: '#d0a070', // bronze - light rays
  comment: '#686058', // warm charcoal - deep shadow
  operator: '#a09888', // warm ash - smoke
  type: '#b890b8', // violet - corona haze
  constant: '#c8a070', // gold - sunlit dust
  error: '#c88080', // coral - warning

  // UI - dark warm surfaces
  border: '#201c1a',
  surface: '#181412',
  surfaceDark: '#0a0908',
  surfaceLight: '#201c1a',
  overlay: '#1c1816',
  lineNumber: '#484038',
  panelBackground: '#12100f',

  // Git - muted conventional colors (10-15% saturation)
  added: '#88a088',
  deleted: '#a08080',
  modified: '#987878',
  ignored: '#585048',
  conflicting: '#a8a078',

  // Terminal - muted dramatic tones (10-15% saturation)
  red: '#a08080',
  green: '#88a088',
  yellow: '#a8a078',
  blue: '#8090a0',
  magenta: '#a08090',
} as const
