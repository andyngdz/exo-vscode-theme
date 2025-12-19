/**
 * Exo - Dawn Palette
 * Light theme inspired by sunrise and early morning light
 *
 * Identity: Sunrise warmth - soft golden light, peachy pinks, fresh greens
 * - Contrast: Dark text on warm cream background
 * - Hierarchy: Clear text weight progression
 * - Variety: Sunrise-inspired syntax colors
 * - Unity: Warm morning tones throughout
 */

export const dawn = {
  name: 'Exo - Dawn',

  // Base - warm cream like early morning light
  background: '#faf6f0',
  foreground: '#3a3530',
  foregroundBright: '#1a1815',
  foregroundDim: '#6a6560',

  // Accent - soft coral like sunrise clouds
  primary: '#d08060',

  // Syntax - sunrise color palette
  keyword: '#c05070', // rose - control flow, like pink sky
  function: '#b08020', // golden amber - functions, like sun rays
  string: '#509050', // fresh green - strings, like morning grass
  number: '#c07040', // peach orange - numbers, like horizon
  comment: '#908580', // warm gray - comments, like morning mist
  operator: '#685850', // warm brown - punctuation
  type: '#4080a0', // morning sky blue - types, classes
  constant: '#907040', // warm tan - constants
  error: '#c03030', // warm red - errors

  // UI - soft warm surfaces
  border: '#e0d8d0',
  surface: '#f0ebe4',
  surfaceDark: '#e8e0d8',
  surfaceLight: '#f5f0ea',
  overlay: '#fcf8f4',
  lineNumber: '#b0a8a0',
  panelBackground: '#f0ebe4',

  // Git - conventional colors with warm tint
  added: '#509050',
  deleted: '#c03030',
  modified: '#d08060',
  ignored: '#908580',
  conflicting: '#c07040',

  // Terminal - warm saturated for light background
  red: '#c03838',
  green: '#408848',
  yellow: '#b08020',
  blue: '#3878b0',
  magenta: '#a050a0',
} as const
