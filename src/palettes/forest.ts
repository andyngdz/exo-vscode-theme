/**
 * Exo - Forest Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { forestScales } from '@/palettes/scales'

export { forestScales as scales }

export const forest = {
  name: 'Exo - Forest',

  // Unified background (shared across all themes)
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',
  lineNumber: '#586850',

  // Base (WCAG AAA compliant)
  foreground: '#dcdcdc',
  foregroundBright: '#f0f8e8',
  foregroundDim: '#b8b8b8',

  // Accent - moss green
  primary: forestScales.info[3],

  // Syntax - using scales (hierarchy: Keywords > Functions > Strings > Types)
  keyword: forestScales.primary[2],    // Natural emerald (prominent)
  function: forestScales.secondary[2],  // Warm tan (earthy)
  string: forestScales.tertiary[2],     // Soft sage (natural green)
  number: forestScales.warning[2],      // Golden amber
  comment: '#a6a6a6',
  operator: forestScales.neutral[2],
  type: forestScales.secondary[3],      // Deeper tan (earthy contrast to green)
  constant: forestScales.warning[4],    // Muted to differentiate from number
  error: forestScales.danger[3],

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

  // Debug status bar
  debugStatusBar: forestScales.info[7],
} as const
