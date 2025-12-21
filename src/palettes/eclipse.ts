/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * GitHub-inspired: High brightness (70-85%), moderate saturation (40-60%)
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Most dramatic/saturated theme
 */

export const eclipse = {
  name: 'Exo - Eclipse',

  // Base - near-black with warm undertone, bright foreground
  background: '#12100f',
  foreground: '#d0c8c0',
  foregroundBright: '#f8f0e8', // Near-white for variables
  foregroundDim: '#706860',

  // Accent - dramatic crimson
  primary: '#d87070',

  // Syntax - GitHub-inspired brightness with fiery hue family
  keyword: '#f08868', // Orange-Red - signature color (fiery)
  function: '#f0a868', // Orange - bright, complementary
  string: '#e8c888', // Gold - warm pastel
  number: '#f0a070', // Orange
  comment: '#686058', // Warm charcoal
  operator: '#c0b0a0', // Warm ash
  type: '#e0a0b8', // Rose - distinct accent
  constant: '#e8c080', // Soft gold
  error: '#f07070', // Bright red

  // UI - dark warm surfaces
  border: '#201c1a',
  surface: '#181412',
  surfaceDark: '#0a0908',
  surfaceLight: '#201c1a',
  overlay: '#1c1816',
  lineNumber: '#585048',
  panelBackground: '#12100f',

  // Git - recognizable but not distracting
  added: '#78c890',
  deleted: '#e08078',
  modified: '#d87070',
  ignored: '#585048',
  conflicting: '#d8b068',

  // Terminal - functional colors
  red: '#e08078',
  green: '#78c890',
  yellow: '#d8c078',
  blue: '#80a0c8',
  magenta: '#d080a8',
} as const
