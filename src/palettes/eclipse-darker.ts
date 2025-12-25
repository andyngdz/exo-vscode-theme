/**
 * Exo Eclipse - Darker Palette
 * Dark theme inspired by solar eclipse and dramatic corona
 *
 * Identity: Fiery corona - orange-red, orange, gold
 * Background: Darker (#0b0e14)
 */

import { eclipseBase } from '@/palettes/eclipse-base'
import { darkerBg } from '@/palettes/shared'

export const eclipseDarker = {
  name: 'Exo Eclipse - Darker',
  ...darkerBg,
  ...eclipseBase,
} as const
