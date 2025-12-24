/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Most dramatic/saturated theme
 */

import { eclipseScales } from '@/palettes/scales'

export { eclipseScales as scales }

export const eclipse = {
  name: 'Exo - Eclipse',

  // Unified background (shared across all themes)
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',
  lineNumber: '#585048',

  // Base - near-black with warm undertone, bright foreground (WCAG AAA compliant)
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
