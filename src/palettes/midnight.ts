/**
 * Exo - Midnight Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Only cool-toned theme (all blues/cyans)
 */

import { colord } from 'colord'

import { createBackgroundColors, mixMirageWithHue } from '@/background'
import { midnightScales } from '@/palettes/scales'

export { midnightScales as scales }

const midnightBias = mixMirageWithHue(midnightScales.primary[2], 0.03)
const midnightBiasHsl = colord(midnightBias).toHsl()
// Midnight background: Exact Mirage base blended 3% toward midnight hue
const bg = createBackgroundColors(midnightBiasHsl.h, midnightBiasHsl.s / 100)

export const midnight = {
  name: 'Exo - Midnight',

  // Base (WCAG AAA compliant)
  ...bg,
  foreground: '#dcdcdc',
  foregroundBright: '#f0f4f8',
  foregroundDim: '#b8b8b8',

  // Accent - steel blue
  primary: midnightScales.info[3],

  // Syntax - using scales
  keyword: midnightScales.primary[2],
  function: midnightScales.secondary[3],
  string: midnightScales.tertiary[2],
  number: midnightScales.warning[3],
  comment: '#a6a6a6',
  operator: midnightScales.neutral[2],
  type: midnightScales.secondary[4],
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
