/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - emerald, tan, moss
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { colord } from 'colord'

import { createBackgroundColors, mixMirageWithHue } from '@/background'
import { forestScales } from '@/palettes/scales'

export { forestScales as scales }

const forestBias = mixMirageWithHue(forestScales.primary[4], 0.03)
const forestBiasHsl = colord(forestBias).toHsl()
// Forest background: Exact Mirage base blended 3% toward forest hue
const bg = createBackgroundColors(forestBiasHsl.h, forestBiasHsl.s / 100)

export const forest = {
  name: 'Exo - Forest',

  // Base (WCAG AAA compliant)
  ...bg,
  foreground: '#dcdcdc',
  foregroundBright: '#f0f8e8',
  foregroundDim: '#b8b8b8',

  // Accent - moss green
  primary: forestScales.info[3],

  // Syntax - using scales
  keyword: forestScales.primary[3],
  function: forestScales.secondary[3],
  string: forestScales.secondary[2],
  number: forestScales.warning[3],
  comment: '#a6a6a6',
  operator: forestScales.neutral[2],
  type: forestScales.warning[4],
  constant: forestScales.warning[3],
  error: forestScales.danger[3],

  // UI - lineNumber needs fine-tuning per theme
  lineNumber: '#586850',

  // Git - using scales
  added: forestScales.success[3],
  deleted: forestScales.danger[3],
  modified: forestScales.info[3],
  ignored: '#586850',
  conflicting: forestScales.warning[3],

  // Terminal - using scales
  red: forestScales.danger[3],
  green: forestScales.success[3],
  yellow: forestScales.warning[3],
  blue: forestScales.info[3],
  magenta: forestScales.primary[3],
} as const
