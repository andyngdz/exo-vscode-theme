/**
 * Exo Dawn Palette (Standard)
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Background: Standard (#1a1e28)
 */

import { dawnBase } from '@/palettes/dawn-base'

export const dawn = {
  name: 'Exo Dawn',

  // Standard backgrounds
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',

  // Spread all base colors
  ...dawnBase,
} as const
