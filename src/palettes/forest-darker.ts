/**
 * Exo Forest - Darker Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Background: Darker (#0b0e14)
 */

import { forestBase } from '@/palettes/forest-base'

export const forestDarker = {
  name: 'Exo Forest - Darker',

  // Darker backgrounds
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',

  // Spread all base colors
  ...forestBase,
} as const
