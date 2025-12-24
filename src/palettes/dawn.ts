/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { dawnScales } from '@/palettes/scales'

export { dawnScales as scales }

export const dawn = {
  name: 'Exo - Dawn',

  // Unified background (shared across all themes)
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',
  lineNumber: '#686058',

  // Base - dark with warm undertone, bright foreground (WCAG AAA compliant)
  foreground: '#dcdcdc',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#b8b8b8',

  // Accent - warm coral glow
  primary: dawnScales.info[3],

  // Syntax - using scales (hierarchy: Keywords > Functions > Strings > Types)
  keyword: dawnScales.primary[2],    // Bright coral (prominent)
  function: dawnScales.secondary[2],  // Bright golden orange
  string: dawnScales.tertiary[2],     // Soft peach (warm tertiary)
  number: dawnScales.warning[2],      // Bright gold
  comment: '#a6a6a6',
  operator: dawnScales.neutral[2],
  type: dawnScales.success[3],        // Mint green (cool contrast)
  constant: dawnScales.warning[4],    // Muted to differentiate from number
  error: dawnScales.danger[3],

  // Git - using scales
  added: dawnScales.success[3],
  deleted: dawnScales.danger[3],
  modified: dawnScales.info[3],
  ignored: '#686060',
  conflicting: dawnScales.warning[3],

  // Terminal - using scales
  red: dawnScales.danger[3],
  green: dawnScales.success[3],
  yellow: dawnScales.warning[3],
  blue: dawnScales.info[3],
  magenta: dawnScales.primary[3],

  // Debug status bar
  debugStatusBar: dawnScales.info[7],
} as const
