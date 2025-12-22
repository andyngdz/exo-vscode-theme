# Design: Color Scale System

## Context

GitHub Theme uses a scale-based color system from `@primer/primitives`. Each color has 10 shades (0=lightest, 9=darkest). For dark themes, bright syntax colors use indices 1-3.

We want to adopt this pattern while keeping our unique theme identities.

## Goals

- Generate consistent color scales from base hues
- Simplify palette definitions to ~6 base colors per theme
- Maintain exact same output for existing themes (no visual change)
- Enable easy creation of light theme variants in future

## Non-Goals

- Changing the visual appearance of themes (this is infrastructure)
- Adding light themes (future work)
- Changing the Palette type interface

## Decisions

### 1. Scale Generation Algorithm

Use `colord` (already installed) to generate scales by adjusting lightness:

```typescript
function generateScale(baseColor: string): string[] {
  const base = colord(baseColor);
  const baseL = base.toHsl().l;
  
  // 10 steps from very light (95%) to very dark (10%)
  const lightnesses = [95, 88, 80, 70, 60, 50, 40, 30, 20, 10];
  
  return lightnesses.map(l => 
    base.toHsl().l = l; // Preserve hue and saturation
    return base.toHex();
  );
}
```

**Rationale**: Simple lightness interpolation preserves the hue identity of each theme.

### 2. Scale Structure Per Theme

Each theme defines these scales:

| Scale | Purpose | Example Base (Dusk) |
|-------|---------|---------------------|
| `primary` | Keywords, accent | `#e098c8` (orchid) |
| `secondary` | Functions | `#c8a8e8` (lavender) |
| `tertiary` | Strings | `#b0a8e0` (violet) |
| `neutral` | UI, comments | `#787080` (gray) |
| `success` | Added, green | `#78c890` |
| `danger` | Errors, deleted | `#e08080` |
| `warning` | Modified, yellow | `#d8c078` |

### 3. Index Convention for Dark Themes

| Index | Lightness | Use Case |
|-------|-----------|----------|
| 0-1 | 95-88% | Backgrounds on light themes |
| 2-3 | 80-70% | **Syntax colors (dark theme)** |
| 4-5 | 60-50% | Muted accents |
| 6-7 | 40-30% | Borders, subtle |
| 8-9 | 20-10% | Deep shadows |

For dark themes, syntax uses indices **2-3** (bright end).

### 4. File Structure

```
src/
├── scales.ts           # NEW: generateScale() function
├── palettes/
│   ├── scales/         # NEW: Scale definitions per theme
│   │   ├── dusk.ts
│   │   ├── dawn.ts
│   │   └── ...
│   ├── dusk.ts         # Uses scales to build palette
│   └── ...
```

### 5. Migration Strategy

1. Create `scales.ts` with generator
2. Create scale definitions for each theme
3. Refactor palettes to use scales
4. Verify output matches current (no visual change)

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Generated colors don't match current | Compare output hex values before/after |
| Over-engineering | Keep it simple - just lightness interpolation |
| Performance | Scales generated at build time, not runtime |

## Open Questions

1. Should scales be generated at build time or defined statically?
   - **Decision**: Generate at build time for flexibility

2. How many scales per theme?
   - **Decision**: 7 scales (primary, secondary, tertiary, neutral, success, danger, warning)
