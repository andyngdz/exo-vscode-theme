/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { colord } from 'colord'

import { createBackgroundColors, mixMirageWithHue } from '@/background'
import { dawnScales } from '@/palettes/scales'

export { dawnScales as scales }

const dawnBias = mixMirageWithHue(dawnScales.primary[4], 0.03)
const dawnBiasHsl = colord(dawnBias).toHsl()
// Dawn background: Exact Mirage base blended 3% toward dawn hue
const bg = createBackgroundColors(dawnBiasHsl.h, dawnBiasHsl.s / 100)

export const dawn = {
  name: 'Exo - Dawn',

  // Base - dark with warm undertone, bright foreground (WCAG AAA compliant)
  ...bg,
  foreground: '#dcdcdc',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#b8b8b8',

  // Accent - warm coral glow
  primary: dawnScales.info[3],

  // Syntax - using scales
  keyword: dawnScales.primary[3],
  function: dawnScales.secondary[3],
  string: dawnScales.tertiary[2],
  number: dawnScales.warning[3],
  comment: '#a6a6a6',
  operator: dawnScales.neutral[2],
  type: dawnScales.success[4],
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
