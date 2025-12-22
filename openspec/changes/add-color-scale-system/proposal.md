# Change: Add Color Scale System (GitHub-Inspired)

## Why

Currently, each palette hardcodes ~30+ hex values manually. This makes:

1. **Inconsistent relationships** - No guaranteed harmony between shades
2. **Difficult to tweak** - Changing a base color requires updating many values
3. **No single source of truth** - Each color is independent
4. **Hard to maintain** - Adding new themes requires picking all colors manually

GitHub Theme solves this with **color scales** - each base color generates 10 shades, and the theme references scale indices (e.g., `scale.purple[2]`).

## What Changes

### 1. Create Color Scale Generator

Add a utility to generate 10 shades from a base color:
```typescript
// scale[0] = lightest, scale[9] = darkest
const purpleScale = generateScale('#b088d0');
// Returns: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', ...]
```

### 2. Define Theme Scales

Each theme defines 5-6 base hues that generate scales:
```typescript
const duskScales = {
  purple: generateScale('#b088d0'),  // Primary/keyword hue
  pink: generateScale('#e098c8'),    // Accent hue
  gray: generateScale('#787080'),    // Neutral
  red: generateScale('#e08080'),     // Error/danger
  green: generateScale('#78c890'),   // Success/added
  yellow: generateScale('#d8c078'),  // Warning/modified
}
```

### 3. Reference Scales in Palettes

Palettes reference scale indices instead of hardcoded hex:
```typescript
// Before
keyword: '#e098c8',

// After
keyword: scales.pink[2],  // Index 2 = bright for dark theme
```

### 4. Keep Backward Compatibility

The final palette object still has the same shape - only the source changes.

## Benefits

1. **Consistent color harmony** - Shades are mathematically derived
2. **Easy theme variants** - Light theme just uses different indices
3. **Single source of truth** - Change base hue, all shades update
4. **Easier new themes** - Define 5-6 base colors, get full palette

## Impact

- Affected specs: `theme-system`
- Affected code: `src/utils.ts`, `src/palettes/*.ts`
- No user-visible changes initially (same output colors)
