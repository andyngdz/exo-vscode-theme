/**
 * Exo Midnight - Darker Palette
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Background: Darker (#0b0e14)
 */

import { midnightBase } from '@/palettes/midnight-base'
import { darkerBg } from '@/palettes/shared'

export const midnightDarker = {
  name: 'Exo Midnight - Darker',
  ...darkerBg,
  ...midnightBase,
} as const
