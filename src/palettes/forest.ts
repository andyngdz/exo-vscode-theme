/**
 * Exo Forest Palette (Standard)
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Background: Standard (#1f2430)
 */

import { forestBase } from '@/palettes/forest-base'

export const forest = {
  name: 'Exo Forest',

  // Standard backgrounds
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',

  // Spread all base colors
  ...forestBase,
} as const
