/**
 * Exo Dawn - Darker Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Background: Darker (#0b0e14)
 */

import { dawnBase } from '@/palettes/dawn-base'

export const dawnDarker = {
  name: 'Exo Dawn - Darker',

  // Darker backgrounds
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',

  // Spread all base colors
  ...dawnBase,
} as const
