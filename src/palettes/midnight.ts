/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * GitHub-inspired: High brightness (70-85%), moderate saturation (35-55%)
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Only cool-toned theme (all blues/cyans)
 */

export const midnight = {
  name: 'Exo - Midnight',

  // Base - deep blue-black night sky, bright foreground
  background: '#0f1218',
  foreground: '#c0c8d8',
  foregroundBright: '#f0f4f8', // Near-white with blue tint for variables
  foregroundDim: '#606878',

  // Accent - steel blue
  primary: '#6898d0',

  // Syntax - GitHub-inspired brightness with cool hue family
  keyword: '#98a8f0', // Periwinkle - signature color (light blue-purple)
  function: '#88d0e0', // Cyan - bright, complementary
  string: '#a8c8f0', // Ice Blue - soft pastel
  number: '#90b8e0', // Silver-blue
  comment: '#606878', // Deep slate
  operator: '#a8b8d0', // Cool slate
  type: '#88c0e8', // Sky blue - distinct accent
  constant: '#b0c8e8', // Silver
  error: '#f08090', // Rose

  // UI - deep blue-tinted surfaces
  border: '#1a2028',
  surface: '#141820',
  surfaceDark: '#0a0c10',
  surfaceLight: '#1a2028',
  overlay: '#181c24',
  lineNumber: '#506070',
  panelBackground: '#0f1218',

  // Git - recognizable but not distracting
  added: '#70c898',
  deleted: '#e08088',
  modified: '#6898d0',
  ignored: '#505868',
  conflicting: '#d8b068',

  // Terminal - functional colors
  red: '#e08088',
  green: '#70c898',
  yellow: '#d8c078',
  blue: '#78a8e0',
  magenta: '#c890d0',
} as const
