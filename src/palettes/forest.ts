/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Ancient forest - deep greens, moss, bark, sunlight through leaves
 * - Contrast: Light text on dark background
 * - Hierarchy: Code focus > UI chrome
 * - Variety: Nature-inspired syntax colors
 * - Unity: Earthy green tones throughout
 */

export const forest = {
  name: 'Exo - Forest',

  // Base - deep green-black forest depths
  background: '#101410',
  foreground: '#b8c0b0',
  foregroundBright: '#e0e8d8',
  foregroundDim: '#687860',

  // Accent - muted moss green (10-15% saturation for UI)
  primary: '#789880',

  // Syntax - vibrant (30-40% saturation) for code focus
  keyword: '#88c8a0', // sage - fern fronds
  function: '#d0a058', // amber - sunlight through leaves
  string: '#70c8a8', // moss - forest undergrowth
  number: '#c8b070', // gold - tree bark
  comment: '#687860', // deep olive - forest shadow
  operator: '#98a890', // warm gray - stone
  type: '#70c0b8', // teal - forest stream
  constant: '#c0b068', // gold - dried leaves
  error: '#c08870', // rust - autumn leaf

  // UI - deep green-tinted surfaces
  border: '#1c201a',
  surface: '#141814',
  surfaceDark: '#0a0c0a',
  surfaceLight: '#1c201a',
  overlay: '#181c18',
  lineNumber: '#485040',
  panelBackground: '#101410',

  // Git - muted conventional colors (10-15% saturation)
  added: '#88a890',
  deleted: '#a08878',
  modified: '#789880',
  ignored: '#586850',
  conflicting: '#a8a080',

  // Terminal - muted woodland tones (10-15% saturation)
  red: '#a08878',
  green: '#88a890',
  yellow: '#a8a080',
  blue: '#8098a0',
  magenta: '#a08898',
} as const
