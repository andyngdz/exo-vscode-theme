# Change: Revive Theme Identity and Fix Variable Visibility

## Why

Two critical issues with current themes:

1. **Variables/imports not visible** - The `variable` scope uses `foreground` color which is too dim, making imports and variable names hard to read across all languages (Python, JS, TS, etc.)

2. **All themes look the same** - By reducing saturation uniformly, themes lost their unique identity. Each theme should have a distinct visual personality.

**Research from popular themes:**
- **Dracula**: Variables use bright foreground (`#F8F8F2`), syntax 50-90% saturation
- **One Dark Pro**: Variables have distinct color (`#e06c75` red), syntax 40-60% saturation
- **Catppuccin**: Bright foreground (`#cdd6f4`), pastel syntax 50-80% saturation

## What Changes

### 1. Fix Variable Visibility
- Use `foregroundBright` for variables instead of `foreground`
- This makes imports, variable names, and identifiers clearly visible

### 2. Restore Syntax Color Vibrancy (40-60% saturation)
Each syntax color should be vibrant enough to distinguish code elements:
- `keyword`, `function`, `string`, `number`, `type`, `constant`

### 3. Establish Unique Theme Identities
Each theme gets **signature colors** that define its personality:

| Theme | Identity | Signature Colors |
|-------|----------|------------------|
| **Dusk** | Evening sunset | Orchid keywords, Amber functions, Violet types |
| **Dawn** | Morning sunrise | Coral keywords, Gold functions, Teal types |
| **Midnight** | Night sky | Periwinkle keywords, Cyan functions, Sky blue types |
| **Eclipse** | Solar eclipse | Rose keywords, Gold functions, Violet types |
| **Forest** | Woodland | Sage keywords, Amber functions, Teal types |

### 4. Balance UI Colors (20-35% saturation)
- **Primary accent**: 30-40% saturation (visible, theme identity)
- **Git colors**: 25-35% saturation (recognizable but not distracting)
- **Terminal colors**: 30-40% saturation (functional)
- **Error**: 35-45% saturation (visible warnings)

## Impact

- Affected specs: `theme-system`
- Affected code: `src/theme.ts` (variable scope), all palette files
- User experience: Distinct, readable themes with clear code visibility
