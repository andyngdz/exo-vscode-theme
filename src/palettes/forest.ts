/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - emerald, tan, moss
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { forestScales } from './scales'

export { forestScales as scales }

export const forest = {
  name: 'Exo - Forest',

  // Base - manually tuned for optimal contrast
  background: '#101410',
  foreground: '#c8d0c0',
  foregroundBright: '#f0f8e8',
  foregroundDim: '#687860',

  // Accent - moss green
  primary: forestScales.info[3],

  // Syntax - using scales
  keyword: forestScales.primary[3],
  function: forestScales.secondary[3],
  string: forestScales.tertiary[2],
  number: forestScales.warning[3],
  comment: forestScales.neutral[4],
  operator: forestScales.neutral[2],
  type: forestScales.success[3],
  constant: forestScales.warning[3],
  error: forestScales.danger[3],

  // UI - manually tuned for visual consistency
  border: '#1c201a',
  surface: '#141814',
  surfaceDark: '#0a0c0a',
  surfaceLight: '#1c201a',
  overlay: '#181c18',
  lineNumber: '#586850',
  panelBackground: '#101410',

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
