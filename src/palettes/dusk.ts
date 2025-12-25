/**
 * Exo Dusk Palette (Standard)
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Background: Standard (#1a1e28)
 */

import { duskBase } from '@/palettes/dusk-base'

export const dusk = {
  name: 'Exo Dusk',

  // Standard backgrounds
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',

  // Spread all base colors
  ...duskBase,
} as const
