/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Scale indices: [2] = 80% lightness, [3] = 70% lightness
 * Hierarchy: Keywords > Functions > Strings > Types > Variables > Comments
 */

import { dawnScales } from './scales'

export { dawnScales as scales }

export const dawn = {
  name: 'Exo - Dawn',

  // Base - manually tuned for optimal contrast
  background: '#1a1618',
  foreground: '#d0c8c0',
  foregroundBright: '#f8f0e8',
  foregroundDim: '#807870',

  // Accent - warm coral glow
  primary: dawnScales.info[3],

  // Syntax - using scales
  keyword: dawnScales.primary[3],
  function: dawnScales.secondary[3],
  string: dawnScales.tertiary[2],
  number: dawnScales.warning[3],
  comment: dawnScales.neutral[4],
  operator: dawnScales.neutral[2],
  type: dawnScales.success[3],
  constant: dawnScales.warning[3],
  error: dawnScales.danger[3],

  // UI - manually tuned for visual consistency
  border: '#2a2628',
  surface: '#201c1e',
  surfaceDark: '#141214',
  surfaceLight: '#282426',
  overlay: '#242022',
  lineNumber: '#686058',
  panelBackground: '#1a1618',

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
