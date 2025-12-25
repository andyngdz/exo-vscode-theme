/**
 * Exo Dusk Palette (Standard)
 * Dark theme inspired by sunset and evening twilight
 *
 * Identity: Purple twilight - orchid, lavender, soft violet
 * Background: Standard (#1a1e28)
 */

import { duskBase } from '@/palettes/dusk-base'
import { standardBg } from '@/palettes/shared'

export const dusk = {
  name: 'Exo Dusk',
  ...standardBg,
  ...duskBase,
} as const
