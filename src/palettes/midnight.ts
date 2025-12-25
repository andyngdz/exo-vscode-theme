/**
 * Exo Midnight Palette (Standard)
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Background: Standard (#1f2430)
 */

import { midnightBase } from '@/palettes/midnight-base'

export const midnight = {
  name: 'Exo Midnight',

  // Standard backgrounds
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',

  // Spread all base colors
  ...midnightBase,
} as const
