/**
 * Exo Eclipse - Darker Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Background: Darker (#0b0e14)
 */

import { eclipseBase } from '@/palettes/eclipse-base'

export const eclipseDarker = {
  name: 'Exo Eclipse - Darker',

  // Darker backgrounds
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',

  // Spread all base colors
  ...eclipseBase,
} as const
