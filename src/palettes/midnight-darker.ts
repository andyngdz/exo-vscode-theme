/**
 * Exo Midnight - Darker Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Background: Darker (#0b0e14)
 */

import { midnightBase } from '@/palettes/midnight-base'

export const midnightDarker = {
  name: 'Exo Midnight - Darker',

  // Darker backgrounds
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',

  // Spread all base colors
  ...midnightBase,
} as const
