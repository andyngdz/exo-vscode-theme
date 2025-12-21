/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - emerald, tan, moss
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { createBackgroundColors } from '../background'
import { forestScales } from './scales'

export { forestScales as scales }

// Forest background: green hue (120°), low saturation (11%)
const bg = createBackgroundColors(120, 0.11)

export const forest = {
  name: 'Exo - Forest',

  // Base (WCAG AAA compliant)
  ...bg,
  foreground: '#c8d0c0',
  foregroundBright: '#f0f8e8',
  foregroundDim: '#a0a898', // 7:1+ contrast

  // Accent - moss green
  primary: forestScales.info[3],

  // Syntax - using scales
  keyword: forestScales.primary[3],
  function: forestScales.secondary[3],
  string: forestScales.tertiary[2],
  number: forestScales.warning[3],
  comment: '#a0ab9a', // WCAG AAA: 7:1+ contrast
  operator: forestScales.neutral[2],
  type: forestScales.success[3],
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
