/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Only cool-toned theme (all blues/cyans)
 */

import { midnightScales } from './scales'

export { midnightScales as scales }

export const midnight = {
  name: 'Exo - Midnight',

  // Base - manually tuned for optimal contrast
  background: '#0f1218',
  foreground: '#c0c8d8',
  foregroundBright: '#f0f4f8',
  foregroundDim: '#606878',

  // Accent - steel blue
  primary: midnightScales.info[3],

  // Syntax - using scales
  keyword: midnightScales.primary[2],
  function: midnightScales.secondary[3],
  string: midnightScales.tertiary[2],
  number: midnightScales.warning[3],
  comment: midnightScales.neutral[4],
  operator: midnightScales.neutral[2],
  type: midnightScales.info[3],
  constant: midnightScales.warning[2],
  error: midnightScales.danger[3],

  // UI - manually tuned for visual consistency
  border: '#1a2028',
  surface: '#141820',
  surfaceDark: '#0a0c10',
  surfaceLight: '#1a2028',
  overlay: '#181c24',
  lineNumber: '#506070',
  panelBackground: '#0f1218',

  // Git - using scales
  added: midnightScales.success[3],
  deleted: midnightScales.danger[3],
  modified: midnightScales.info[3],
  ignored: '#505868',
  conflicting: midnightScales.warning[3],

  // Terminal - using scales
  red: midnightScales.danger[3],
  green: midnightScales.success[3],
  yellow: midnightScales.warning[3],
  blue: midnightScales.info[3],
  magenta: midnightScales.primary[3],
} as const
