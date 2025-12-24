/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Most dramatic/saturated theme
 */

import { colord } from 'colord'

import { createBackgroundColors, mixMirageWithHue } from '@/background'
import { eclipseScales } from '@/palettes/scales'

export { eclipseScales as scales }

const eclipseBias = mixMirageWithHue(eclipseScales.primary[4], 0.03)
const eclipseBiasHsl = colord(eclipseBias).toHsl()
// Eclipse background: Exact Mirage base blended 3% toward eclipse hue
const bg = createBackgroundColors(eclipseBiasHsl.h, eclipseBiasHsl.s / 100)

export const eclipse = {
  name: 'Exo - Eclipse',

  // Base - near-black with warm undertone, bright foreground (WCAG AAA compliant)
  ...bg,
  foreground: '#dcdcdc',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#b8b8b8',

  // Accent - dramatic crimson
  primary: eclipseScales.info[3],

  // Syntax - using scales
  keyword: eclipseScales.primary[3],
  function: eclipseScales.secondary[3],
  string: eclipseScales.tertiary[3],
  number: eclipseScales.warning[3],
  comment: '#a6a6a6',
  operator: eclipseScales.neutral[2],
  type: eclipseScales.success[3],
  constant: eclipseScales.warning[3],
  error: eclipseScales.danger[3],

  // UI - lineNumber needs fine-tuning per theme
  lineNumber: '#585048',

  // Git - using scales
  added: eclipseScales.success[3],
  deleted: eclipseScales.danger[3],
  modified: eclipseScales.info[3],
  ignored: '#585048',
  conflicting: eclipseScales.warning[3],

  // Terminal - using scales
  red: eclipseScales.danger[3],
  green: eclipseScales.success[3],
  yellow: eclipseScales.warning[3],
  blue: eclipseScales.info[3],
  magenta: eclipseScales.primary[3],

  // Debug status bar
  debugStatusBar: eclipseScales.info[7],
} as const
