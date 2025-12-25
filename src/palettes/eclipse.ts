/**
 * Exo Eclipse Palette (Standard)
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Background: Standard (#1a1e28)
 */

import { eclipseBase } from '@/palettes/eclipse-base'
import { standardBg } from '@/palettes/shared'

export const eclipse = {
  name: 'Exo Eclipse',
  ...standardBg,
  ...eclipseBase,
} as const
