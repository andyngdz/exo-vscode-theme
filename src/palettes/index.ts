export { dusk, scales as duskScales } from './dusk'
export { dawn, scales as dawnScales } from './dawn'
export { midnight, scales as midnightScales } from './midnight'
export { eclipse, scales as eclipseScales } from './eclipse'
export { forest, scales as forestScales } from './forest'

// Re-export all scales from scales directory
export * from './scales'

export type Palette =
  | typeof import('./dusk').dusk
  | typeof import('./dawn').dawn
  | typeof import('./midnight').midnight
  | typeof import('./eclipse').eclipse
  | typeof import('./forest').forest
