/**
 * Exo Forest Palette (Standard)
 * Dark theme inspired by deep woodland and natural growth
 *
 * Identity: Woodland - natural emerald, warm earth, sage greens
 * Background: Standard (#1a1e28)
 */

import { forestBase } from '@/palettes/forest-base'
import { standardBg } from '@/palettes/shared'

export const forest = {
  name: 'Exo Forest',
  ...standardBg,
  ...forestBase,
} as const
