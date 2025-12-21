/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Most dramatic/saturated theme
 */

import { createBackgroundColors } from '../background'
import { eclipseScales } from './scales'

export { eclipseScales as scales }

// Eclipse background: warm orange hue (20°), low saturation (9%)
const bg = createBackgroundColors(20, 0.09)

export const eclipse = {
  name: 'Exo - Eclipse',

  // Base - near-black with warm undertone, bright foreground (WCAG AAA compliant)
  ...bg,
  foreground: '#d0c8c0',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#b0a8a0', // 7:1+ contrast

  // Accent - dramatic crimson
  primary: eclipseScales.info[3],

  // Syntax - using scales
  keyword: eclipseScales.primary[3],
  function: eclipseScales.secondary[3],
  string: eclipseScales.tertiary[3],
  number: eclipseScales.warning[3],
  comment: '#ada6a0', // WCAG AAA: 7:1+ contrast
  operator: eclipseScales.neutral[2],
  type: eclipseScales.info[2],
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
} as const
