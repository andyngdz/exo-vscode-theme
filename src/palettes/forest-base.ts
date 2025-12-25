/**
 * Exo Forest - Base Colors
 * Shared colors for Forest theme variants (standard and darker)
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { forestScales } from '@/palettes/scales'
import { shared } from '@/palettes/shared'

export const forestBase = {
  // Base (WCAG AAA compliant)
  foreground: shared.foreground,
  foregroundBright: shared.foregroundBrightForest,
  foregroundDim: shared.foregroundDim,

  // Accent - moss green
  primary: forestScales.primary[3],

  // Syntax - using scales (hierarchy: Keywords > Functions > Strings > Types)
  keyword: forestScales.primary[2],    // Natural emerald (prominent)
  function: forestScales.secondary[2],  // Warm tan (earthy)
  string: forestScales.tertiary[2],     // Soft sage (natural green)
  number: forestScales.warning[2],      // Golden amber
  comment: shared.neutral,
  operator: forestScales.neutral[2],
  type: forestScales.secondary[3],      // Deeper tan (earthy contrast to green)
  constant: forestScales.warning[4],    // Muted to differentiate from number
  error: forestScales.danger[3],

  // Git - using scales
  added: forestScales.success[3],
  deleted: forestScales.danger[3],
  modified: forestScales.info[3],
  conflicting: forestScales.warning[3],

  // Terminal - using scales
  red: forestScales.danger[3],
  green: forestScales.success[3],
  yellow: forestScales.warning[3],
  blue: forestScales.info[3],
  magenta: forestScales.primary[3],

  // Debug status bar
  debugStatusBar: forestScales.info[7],

  // Line number
  lineNumber: shared.neutral,

  // Neutral selection for lists/menus
  neutralSelection: shared.neutralSelection,
} as const
