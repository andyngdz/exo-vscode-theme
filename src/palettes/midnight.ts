/**
 * Exo Midnight Palette (Standard)
 * Dark theme inspired by deep night sky and moonlight
 *
 * Identity: Cool night - periwinkle, cyan, ice blue
 * Background: Standard (#1a1e28)
 */

import { midnightBase } from '@/palettes/midnight-base'
import { standardBg } from '@/palettes/shared'

export const midnight = {
  name: 'Exo Midnight',
  ...standardBg,
  ...midnightBase,
} as const
