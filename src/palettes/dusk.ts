/**
 * Exo - Dusk Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { duskScales } from './scales'

export { duskScales as scales }

export const dusk = {
  name: 'Exo - Dusk',

  // Base - deep evening sky with bright foreground
  background: '#1a1520',
  foreground: '#d0c8d8',
  foregroundBright: '#f0e8f8',
  foregroundDim: '#787080',

  // Accent - purple glow
  primary: duskScales.info[3],

  // Syntax - using scales
  keyword: duskScales.primary[3],
  function: duskScales.secondary[2],
  string: duskScales.tertiary[2],
  number: duskScales.warning[3],
  comment: duskScales.neutral[4],
  operator: duskScales.neutral[2],
  type: duskScales.info[2],
  constant: duskScales.warning[3],
  error: duskScales.danger[3],

  // UI - deep purple-tinted surfaces
  border: '#2a2430',
  surface: '#201a28',
  surfaceDark: '#141018',
  surfaceLight: '#282030',
  overlay: '#241e2c',
  lineNumber: '#605070',
  panelBackground: '#1a1520',

  // Git - using scales
  added: duskScales.success[3],
  deleted: duskScales.danger[3],
  modified: duskScales.info[3],
  ignored: '#605868',
  conflicting: duskScales.warning[3],

  // Terminal - using scales
  red: duskScales.danger[3],
  green: duskScales.success[3],
  yellow: duskScales.warning[3],
  blue: duskScales.info[3],
  magenta: duskScales.primary[3],
} as const
