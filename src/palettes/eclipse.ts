/**
 * Exo Eclipse Palette (Standard)
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Background: Standard (#1a1e28)
 */

import { eclipseBase } from '@/palettes/eclipse-base'

export const eclipse = {
  name: 'Exo Eclipse',

  // Standard backgrounds
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',

  // Spread all base colors
  ...eclipseBase,
} as const
