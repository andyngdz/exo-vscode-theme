/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { createBackgroundColors } from '../background'
import { dawnScales } from './scales'

export { dawnScales as scales }

// Dawn background: warm rose hue (330°), low saturation (8%)
const bg = createBackgroundColors(330, 0.08)

export const dawn = {
  name: 'Exo - Dawn',

  // Base - dark with warm undertone, bright foreground (WCAG AAA compliant)
  ...bg,
  foreground: '#d0c8c0',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#b0a8a0', // 7:1+ contrast

  // Accent - warm coral glow
  primary: dawnScales.info[3],

  // Syntax - using scales
  keyword: dawnScales.primary[3],
  function: dawnScales.secondary[3],
  string: dawnScales.tertiary[2],
  number: dawnScales.warning[3],
  comment: '#aca5a5', // WCAG AAA: 7:1+ contrast
  operator: dawnScales.neutral[2],
  type: dawnScales.success[3],
  constant: dawnScales.warning[3],
  error: dawnScales.danger[3],

  // UI - lineNumber needs fine-tuning per theme
  lineNumber: '#686058',

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
} as const
