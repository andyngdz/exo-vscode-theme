/**
 * Exo Forest Palette (Standard)
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Background: Standard (#1a1e28)
 */

import { forestBase } from '@/palettes/forest-base'

export const forest = {
  name: 'Exo Forest',

  // Standard backgrounds
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',

  // Spread all base colors
  ...forestBase,
} as const
