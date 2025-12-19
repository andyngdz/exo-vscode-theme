/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Ancient forest - deep greens, moss, bark, sunlight through leaves
 * - Contrast: Light text on dark background
 * - Hierarchy: Clear text weight progression
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

  // Accent - moss green like sunlit moss
  primary: '#70a070',

  // Syntax - woodland palette (greens, ambers, earth tones)
  keyword: '#90b080', // soft sage - fern fronds
  function: '#c8a060', // warm amber - sunlight through leaves
  string: '#80b888', // moss green - forest undergrowth
  number: '#c0a880', // warm tan - tree bark
  comment: '#586850', // deep olive - forest shadow
  operator: '#889080', // warm gray - stone
  type: '#80a898', // soft teal - forest stream
  constant: '#b8b090', // warm cream - dried leaves
  error: '#c08070', // muted rust - autumn leaf

  // UI - deep green-tinted surfaces
  border: '#1c201a',
  surface: '#141814',
  surfaceDark: '#0a0c0a',
  surfaceLight: '#1c201a',
  overlay: '#181c18',
  lineNumber: '#485040',
  panelBackground: '#101410',

  // Git - conventional colors with forest tint
  added: '#80b888',
  deleted: '#c08070',
  modified: '#70a070',
  ignored: '#586850',
  conflicting: '#c0a880',

  // Terminal - earthy woodland tones
  red: '#c88078',
  green: '#88c088',
  yellow: '#c8b068',
  blue: '#78a0b0',
  magenta: '#b088a0',
} as const
