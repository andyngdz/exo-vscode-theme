/**
 * Exo - Dusk Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { duskScales } from '@/palettes/scales'

export { duskScales as scales }

export const dusk = {
  name: 'Exo - Dusk',

  // Unified background (shared across all themes)
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',
  lineNumber: '#605070',

  // Base - deep evening sky with bright foreground (WCAG AAA compliant)
  foreground: '#dcdcdc',
  foregroundBright: '#f4ecfc',
  foregroundDim: '#b8b8b8',

  // Accent - purple glow
  primary: duskScales.info[3],

  // Syntax - using scales (hierarchy: Keywords > Functions > Strings > Types)
  keyword: duskScales.primary[2],    // Bright magenta-purple (prominent)
  function: duskScales.secondary[2],  // Soft lavender
  string: duskScales.tertiary[2],     // Ice cyan (cool contrast to purple)
  number: duskScales.warning[2],      // Warm rose gold
  comment: '#a6a6a6',
  operator: duskScales.neutral[2],
  type: duskScales.success[3],        // Jade green (natural contrast)
  constant: duskScales.warning[4],    // Muted to differentiate from number
  error: duskScales.danger[3],

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

  // Debug status bar
  debugStatusBar: duskScales.info[7],
} as const
