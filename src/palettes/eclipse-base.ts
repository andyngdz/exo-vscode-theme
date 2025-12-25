/**
 * Exo Eclipse - Base Colors
 * Shared colors for Eclipse theme variants (standard and darker)
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 * Note: Most dramatic/saturated theme
 */

import { eclipseScales } from '@/palettes/scales'
import { shared } from '@/palettes/shared'

export const eclipseBase = {
  // Base - near-black with warm undertone, bright foreground (WCAG AAA compliant)
  foreground: shared.foreground,
  foregroundBright: shared.foregroundBrightWarm,
  foregroundDim: shared.foregroundDim,

  // Accent - dramatic crimson
  primary: eclipseScales.primary[3],

  // Syntax - using scales (hierarchy + high saturation for drama)
  keyword: eclipseScales.primary[2],    // Bright flame orange (intense)
  function: eclipseScales.secondary[2],  // Solar gold
  string: eclipseScales.tertiary[2],     // Bright gold (radiant)
  number: eclipseScales.warning[2],      // Bright amber
  comment: shared.neutral,
  operator: eclipseScales.neutral[2],
  type: eclipseScales.success[2],        // Electric lime green (sharp contrast)
  constant: eclipseScales.warning[4],    // Muted to differentiate from number
  error: eclipseScales.danger[3],

  // Git - using scales
  added: eclipseScales.success[3],
  deleted: eclipseScales.danger[3],
  modified: eclipseScales.info[3],
  conflicting: eclipseScales.warning[3],

  // Terminal - using scales
  red: eclipseScales.danger[3],
  green: eclipseScales.success[3],
  yellow: eclipseScales.warning[3],
  blue: eclipseScales.info[3],
  magenta: eclipseScales.primary[3],

  // Debug status bar
  debugStatusBar: eclipseScales.info[7],

  // Line number
  lineNumber: shared.neutral,

  // Neutral selection for lists/menus
  neutralSelection: shared.neutralSelection,
} as const
