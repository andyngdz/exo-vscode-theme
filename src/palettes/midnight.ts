/**
 * Exo Midnight Palette (Standard)
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Background: Standard (#1a1e28)
 */

import { midnightBase } from '@/palettes/midnight-base'

export const midnight = {
  name: 'Exo Midnight',

  // Standard backgrounds
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',

  // Spread all base colors
  ...midnightBase,
} as const
