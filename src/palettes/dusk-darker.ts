/**
 * Exo Dusk - Darker Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Background: Darker (#0b0e14)
 */

import { duskBase } from '@/palettes/dusk-base'

export const duskDarker = {
  name: 'Exo Dusk - Darker',

  // Darker backgrounds
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',

  // Spread all base colors
  ...duskBase,
} as const
