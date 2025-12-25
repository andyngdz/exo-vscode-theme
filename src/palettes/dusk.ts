/**
 * Exo Dusk Palette (Standard)
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Background: Standard (#1f2430)
 */

import { duskBase } from '@/palettes/dusk-base'

export const dusk = {
  name: 'Exo Dusk',

  // Standard backgrounds
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',

  // Spread all base colors
  ...duskBase,
} as const
