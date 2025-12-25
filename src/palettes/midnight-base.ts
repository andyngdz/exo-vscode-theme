/**
 * Exo Midnight - Base Colors
 * Shared colors for Midnight theme variants (standard and darker)
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Only cool-toned theme (all blues/cyans)
 */

import { midnightScales } from '@/palettes/scales'
import { shared } from '@/palettes/shared'

export const midnightBase = {
  // Base (WCAG AAA compliant)
  foreground: shared.foreground,
  foregroundBright: shared.foregroundBrightCool,
  foregroundDim: shared.foregroundDim,

  // Accent - steel blue
  primary: midnightScales.primary[3],

  // Syntax - using scales (hierarchy: Keywords > Functions > Strings > Types)
  keyword: midnightScales.primary[2],    // Bright periwinkle (prominent)
  function: midnightScales.secondary[2],  // Ice cyan
  string: midnightScales.tertiary[2],     // Pale ice (frosty)
  number: midnightScales.warning[2],      // Warm gold (contrast)
  comment: shared.neutral,
  operator: midnightScales.neutral[2],
  type: midnightScales.success[3],        // Seafoam (aqua contrast)
  constant: midnightScales.warning[4],    // Muted to differentiate from number
  error: midnightScales.danger[3],

  // Git - using scales
  added: midnightScales.success[3],
  deleted: midnightScales.danger[3],
  modified: midnightScales.info[3],
  conflicting: midnightScales.warning[3],

  // Terminal - using scales
  red: midnightScales.danger[3],
  green: midnightScales.success[3],
  yellow: midnightScales.warning[3],
  blue: midnightScales.info[3],
  magenta: midnightScales.primary[3],

  // Debug status bar
  debugStatusBar: midnightScales.info[7],

  // Line number
  lineNumber: shared.neutral,

  // Neutral selection for lists/menus
  neutralSelection: shared.neutralSelection,
} as const
