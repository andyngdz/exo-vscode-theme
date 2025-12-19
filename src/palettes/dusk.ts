/**
 * Exo - Dusk Palette
 * Dark theme with muted cyan accent
 *
 * Design principles applied:
 * - Contrast: All text colors tested against background
 * - Hierarchy: foregroundBright > foreground > foregroundDim
 * - Variety: Each syntax color is distinct and recognizable
 * - Unity: All colors share a muted, desaturated quality
 * - Pattern: Red=error, Green=success, Yellow=warning
 */

export const dusk = {
  name: 'Exo - Dusk',

  // Base - hierarchy for text importance
  background: '#0f1419',
  foreground: '#b0bcc8',
  foregroundBright: '#dce4ec',
  foregroundDim: '#6a7a8a',

  // Accent - teal for interactive elements
  primary: '#5a9ea4',

  // Syntax - distinct colors for each category
  keyword: '#d4928a', // warm coral - control flow, keywords
  function: '#e8c47a', // golden yellow - functions, methods
  string: '#7eb89a', // sage green - string literals
  number: '#d4a070', // amber - numeric values
  comment: '#505c68', // muted gray - comments
  operator: '#88969e', // neutral gray - punctuation, operators
  type: '#7aafcc', // sky blue - types, classes
  constant: '#98b0c4', // steel blue - constants
  error: '#d07070', // muted red - errors

  // UI - consistent surface hierarchy
  border: '#202830',
  surface: '#141a20',
  surfaceDark: '#0a0e12',
  surfaceLight: '#1a2028',
  overlay: '#182028',
  lineNumber: '#404c58',
  panelBackground: '#0f1419',

  // Git - conventional colors
  added: '#7eb89a',
  deleted: '#d07070',
  modified: '#5a9ea4',
  ignored: '#505c68',
  conflicting: '#d4a070',

  // Terminal - bright enough for readability
  red: '#e07878',
  green: '#88c090',
  yellow: '#e0c078',
  blue: '#80b0d8',
  magenta: '#c090c8',
} as const
