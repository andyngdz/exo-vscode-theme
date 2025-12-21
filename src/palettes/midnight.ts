/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Only cool-toned theme (all blues/cyans)
 */

import { createBackgroundColors } from '../background'
import { midnightScales } from './scales'

export { midnightScales as scales }

// Midnight background: cool blue hue (220°), moderate saturation (23%)
const bg = createBackgroundColors(220, 0.23)

export const midnight = {
  name: 'Exo - Midnight',

  // Base (WCAG AAA compliant)
  ...bg,
  foreground: '#c0c8d8',
  foregroundBright: '#f0f4f8',
  foregroundDim: '#a0a8b8', // 7:1+ contrast

  // Accent - steel blue
  primary: midnightScales.info[3],

  // Syntax - using scales
  keyword: midnightScales.primary[2],
  function: midnightScales.secondary[3],
  string: midnightScales.tertiary[2],
  number: midnightScales.warning[3],
  comment: '#a2a8b5', // WCAG AAA: 7:1+ contrast
  operator: midnightScales.neutral[2],
  type: midnightScales.info[3],
  constant: midnightScales.warning[2],
  error: midnightScales.danger[3],

  // UI - lineNumber needs fine-tuning per theme
  lineNumber: '#506070',

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
