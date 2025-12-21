/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - emerald, tan, moss
 * GitHub-inspired: High brightness (70-85%), moderate saturation (35-55%)
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

export const forest = {
  name: 'Exo - Forest',

  // Base - deep green-black forest depths, bright foreground
  background: '#101410',
  foreground: '#c8d0c0',
  foregroundBright: '#f0f8e8', // Near-white with green tint for variables
  foregroundDim: '#687860',

  // Accent - moss green
  primary: '#80b888',

  // Syntax - GitHub-inspired brightness with earthy hue family
  keyword: '#78d898', // Emerald - signature color (bright green)
  function: '#d0b888', // Tan - earthy, warm
  string: '#a8d8b8', // Moss - soft green pastel
  number: '#d8c088', // Amber
  comment: '#687860', // Deep olive
  operator: '#b0c0a0', // Sage gray
  type: '#88c8c0', // Teal - cool accent
  constant: '#d0c088', // Soft gold
  error: '#e08870', // Rust

  // UI - deep green-tinted surfaces
  border: '#1c201a',
  surface: '#141814',
  surfaceDark: '#0a0c0a',
  surfaceLight: '#1c201a',
  overlay: '#181c18',
  lineNumber: '#586850',
  panelBackground: '#101410',

  // Git - recognizable but not distracting
  added: '#78c890',
  deleted: '#d88878',
  modified: '#80b888',
  ignored: '#586850',
  conflicting: '#d8b068',

  // Terminal - functional colors
  red: '#d88878',
  green: '#78c890',
  yellow: '#d8c078',
  blue: '#80a8c0',
  magenta: '#c088a8',
} as const
