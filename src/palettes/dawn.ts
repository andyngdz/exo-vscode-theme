/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * GitHub-inspired: High brightness (70-85%), moderate saturation (35-55%)
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

export const dawn = {
  name: 'Exo - Dawn',

  // Base - dark with warm undertone, bright foreground
  background: '#1a1618',
  foreground: '#d0c8c0',
  foregroundBright: '#f8f0e8', // Near-white for variables
  foregroundDim: '#807870',

  // Accent - warm coral glow
  primary: '#e09080',

  // Syntax - GitHub-inspired brightness with warm hue family
  keyword: '#f09888', // Coral - signature color (warm pink)
  function: '#e8c868', // Gold - bright yellow-gold
  string: '#f0c8a0', // Peach - warm pastel
  number: '#e8b078', // Orange-peach
  comment: '#787070', // Warm gray
  operator: '#c0b8a8', // Warm stone
  type: '#88d0c0', // Teal - cool contrast
  constant: '#e0c078', // Soft gold
  error: '#f08070', // Red-coral

  // UI - dark warm surfaces
  border: '#2a2628',
  surface: '#201c1e',
  surfaceDark: '#141214',
  surfaceLight: '#282426',
  overlay: '#242022',
  lineNumber: '#686058',
  panelBackground: '#1a1618',

  // Git - recognizable but not distracting
  added: '#78c890',
  deleted: '#e08078',
  modified: '#e09080',
  ignored: '#686060',
  conflicting: '#d8b068',

  // Terminal - functional colors
  red: '#e08078',
  green: '#78c890',
  yellow: '#d8c078',
  blue: '#80a8d0',
  magenta: '#d888a8',
} as const
