export { dusk, scales as duskScales } from './dusk'
export { duskDarker } from './dusk-darker'
export { dawn, scales as dawnScales } from './dawn'
export { dawnDarker } from './dawn-darker'
export { midnight, scales as midnightScales } from './midnight'
export { midnightDarker } from './midnight-darker'
export { eclipse, scales as eclipseScales } from './eclipse'
export { eclipseDarker } from './eclipse-darker'
export { forest, scales as forestScales } from './forest'
export { forestDarker } from './forest-darker'

// Re-export all scales from scales directory
export * from './scales'

export type Palette =
  | typeof import('./dusk').dusk
  | typeof import('./dusk-darker').duskDarker
  | typeof import('./dawn').dawn
  | typeof import('./dawn-darker').dawnDarker
  | typeof import('./midnight').midnight
  | typeof import('./midnight-darker').midnightDarker
  | typeof import('./eclipse').eclipse
  | typeof import('./eclipse-darker').eclipseDarker
  | typeof import('./forest').forest
  | typeof import('./forest-darker').forestDarker
