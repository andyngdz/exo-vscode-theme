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

  // Accent - vivid moss green like sunlit moss
  primary: '#50c070',

  // Syntax - vibrant woodland palette
  keyword: '#70d080', // vivid sage - fern fronds
  function: '#e8b040', // bright amber - sunlight through leaves
  string: '#50d890', // vibrant moss - forest undergrowth
  number: '#e0b860', // warm gold - tree bark
  comment: '#687860', // deep olive - forest shadow
  operator: '#98a890', // warm gray - stone
  type: '#50c8b0', // vivid teal - forest stream
  constant: '#d0c070', // warm gold - dried leaves
  error: '#e06050', // vivid rust - autumn leaf

  // UI - deep green-tinted surfaces
  border: '#1c201a',
  surface: '#141814',
  surfaceDark: '#0a0c0a',
  surfaceLight: '#1c201a',
  overlay: '#181c18',
  lineNumber: '#485040',
  panelBackground: '#101410',

  // Git - vibrant conventional colors
  added: '#50d888',
  deleted: '#e06050',
  modified: '#50c070',
  ignored: '#586850',
  conflicting: '#e0c050',

  // Terminal - vibrant woodland tones
  red: '#f06858',
  green: '#50e080',
  yellow: '#e8c840',
  blue: '#50b8d0',
  magenta: '#d060b0',
} as const
