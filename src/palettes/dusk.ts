/**
 * Exo - Dusk Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * GitHub-inspired: High brightness (70-85%), moderate saturation (35-55%)
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

export const dusk = {
  name: 'Exo - Dusk',

  // Base - deep evening sky with bright foreground
  background: '#1a1520',
  foreground: '#d0c8d8',
  foregroundBright: '#f0e8f8', // Near-white for variables
  foregroundDim: '#787080',

  // Accent - purple glow
  primary: '#b088d0',

  // Syntax - GitHub-inspired brightness with purple hue family
  keyword: '#e098c8', // Orchid - signature color (bright pink-purple)
  function: '#c8a8e8', // Lavender - complementary (light purple)
  string: '#b0a8e0', // Soft Violet - distinct pastel
  number: '#e8b888', // Peach - warm accent
  comment: '#706878', // Muted purple-gray
  operator: '#c0b8d0', // Light lavender gray
  type: '#e8c0a8', // Peach - warm, distinct from keywords
  constant: '#d8b890', // Soft gold
  error: '#f08080', // Coral - warning

  // UI - deep purple-tinted surfaces
  border: '#2a2430',
  surface: '#201a28',
  surfaceDark: '#141018',
  surfaceLight: '#282030',
  overlay: '#241e2c',
  lineNumber: '#605070',
  panelBackground: '#1a1520',

  // Git - recognizable but not distracting
  added: '#78c890',
  deleted: '#e08080',
  modified: '#b088d0',
  ignored: '#605868',
  conflicting: '#d8b068',

  // Terminal - functional colors
  red: '#e08080',
  green: '#78c890',
  yellow: '#d8c078',
  blue: '#88a8d8',
  magenta: '#c890c0',
} as const
