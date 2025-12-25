/**
 * Exo Dusk - Darker Palette
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Background: Darker (#0b0e14)
 */

import { duskBase } from '@/palettes/dusk-base'
import { darkerBg } from '@/palettes/shared'

export const duskDarker = {
  name: 'Exo Dusk - Darker',
  ...darkerBg,
  ...duskBase,
} as const
