/**
 * Exo Forest - Darker Palette
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Background: Darker (#0b0e14)
 */

import { forestBase } from '@/palettes/forest-base'
import { darkerBg } from '@/palettes/shared'

export const forestDarker = {
  name: 'Exo Forest - Darker',
  ...darkerBg,
  ...forestBase,
} as const
