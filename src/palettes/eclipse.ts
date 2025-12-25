/**
 * Exo Eclipse Palette (Standard)
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Background: Standard (#1f2430)
 */

import { eclipseBase } from '@/palettes/eclipse-base'

export const eclipse = {
  name: 'Exo Eclipse',

  // Standard backgrounds
  background: '#1f2430',
  surface: '#1f2430',
  surfaceDark: '#1c212b',
  surfaceLight: '#242936',
  border: '#171b24',
  overlay: '#242936',
  panelBackground: '#1f2430',

  // Spread all base colors
  ...eclipseBase,
} as const
