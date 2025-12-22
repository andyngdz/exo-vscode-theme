# Change: Revise Theme Syntax Colors (GitHub-Inspired)

## Why

Current themes lack visual clarity. After analyzing GitHub Theme, we identified:

1. **Brightness too low** - Our syntax colors are darker than GitHub's (which uses 70-85% lightness)
2. **Poor contrast** - Elements don't stand out enough from each other
3. **Hierarchy unclear** - Keywords, functions, strings all blend together

GitHub Theme works because it uses **high lightness (70-85%)** with **moderate saturation (40-60%)**.

## What Changes

### Apply GitHub's Color Structure While Keeping Our Identity

| Principle | GitHub Approach | Our Adaptation |
|-----------|-----------------|----------------|
| Brightness | 70-85% lightness | Same, but with theme-tinted hues |
| Saturation | 40-60% | Slightly lower (35-55%) for muted feel |
| Hierarchy | Keywords brightest | Same structure |
| Uniqueness | One color scheme | 5 unique schemes |

### Theme-Specific Syntax Colors

| Theme | Keywords | Functions | Strings | Types |
|-------|----------|-----------|---------|-------|
| **Dusk** | `#e098c8` Orchid | `#c8a8e8` Lavender | `#b0a8e0` Soft Violet | `#e8c0a8` Peach |
| **Dawn** | `#f09888` Coral | `#e8c868` Gold | `#f0c8a0` Peach | `#88d0c0` Teal |
| **Eclipse** | `#f08868` Orange-Red | `#f0a868` Orange | `#e8c888` Gold | `#e0a0b8` Rose |
| **Forest** | `#78d898` Emerald | `#d0b888` Tan | `#a8d8b8` Moss | `#88c8c0` Teal |
| **Midnight** | `#98a8f0` Periwinkle | `#88d0e0` Cyan | `#a8c8f0` Ice Blue | `#88c0e8` Sky |

### Foreground Brightness Increase

All themes get brighter foreground for better variable visibility:
- `foregroundBright`: Increase to ~`#f0xxxx` range (near-white)

## Impact

- Affected specs: `theme-system`
- Affected code: All palette files in `src/palettes/`
- User experience: GitHub-level clarity with unique theme personalities
