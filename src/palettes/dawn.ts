/**
 * Exo - Dawn Palette
 * Light theme inspired by morning paper and natural light
 *
 * Identity: Clean, warm paper aesthetic with rich ink-like syntax colors
 * - Contrast: High contrast dark text on light background
 * - Hierarchy: Clear text weight progression
 * - Variety: Saturated syntax colors for easy scanning
 * - Unity: Warm paper tones, rich natural syntax colors
 */

export const dawn = {
  name: 'Exo - Dawn',

  // Base - paper-like with strong text contrast
  background: '#f5f0e8',
  foreground: '#2a2e33',
  foregroundBright: '#151820',
  foregroundDim: '#5a6068',

  // Accent - warm terracotta for interactive elements
  primary: '#b05840',

  // Syntax - rich, saturated colors like quality ink
  keyword: '#8b2252', // plum - control flow
  function: '#0068a8', // deep azure - functions
  string: '#1a7848', // emerald - strings
  number: '#a85000', // burnt sienna - numbers
  comment: '#7a8088', // slate - comments
  operator: '#485058', // charcoal - punctuation
  type: '#7040a0', // violet - types, classes
  constant: '#306898', // steel blue - constants
  error: '#c82020', // crimson - errors

  // UI - subtle warm surfaces
  border: '#d8d0c8',
  surface: '#ece6de',
  surfaceDark: '#e0d8d0',
  surfaceLight: '#f0ebe4',
  overlay: '#f8f4ee',
  lineNumber: '#a0988e',
  panelBackground: '#ece6de',

  // Git - conventional colors, saturated
  added: '#1a7848',
  deleted: '#c82020',
  modified: '#b05840',
  ignored: '#7a8088',
  conflicting: '#a85000',

  // Terminal - high contrast for light background
  red: '#c82828',
  green: '#1a8050',
  yellow: '#a86800',
  blue: '#0068b0',
  magenta: '#8838a0',
} as const
