/**
 * Exo Dawn Palette (Standard)
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Background: Standard (#1f2430)
 */

import { dawnBase } from '@/palettes/dawn-base'

export const dawn = {
  name: 'Exo Dawn',

  // Standard backgrounds
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',

  // Spread all base colors
  ...dawnBase,
} as const
