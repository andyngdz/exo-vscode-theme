# Design: Centralized Background Color System

## Context

The Exo theme project has 5 dark themes, each with hardcoded background colors. When we tried to adjust background darkness for better readability, we had to manually update each palette file. This is error-prone and makes it hard to apply consistent readability standards.

**Stakeholders**: Theme users who code for extended periods and need optimal readability.

## Goals / Non-Goals

**Goals:**
- Single constant (`BACKGROUND_LIGHTNESS`) to control all theme backgrounds
- Consistent readability across all themes based on accessibility science
- Each theme retains its unique color identity (hue)
- Easy to adjust background lightness in the future

**Non-Goals:**
- Changing syntax colors or accent colors
- Creating new themes
- Changing foreground colors (these remain theme-specific)

## Decisions

### Decision 1: Use 10% HSL Lightness as Default

**What:** Set `BACKGROUND_LIGHTNESS = 0.10` (10%)

**Why:** Based on WCAG contrast research:
| Lightness | Contrast Ratio | Assessment |
|-----------|----------------|------------|
| 5% | ~12:1 | Too high - causes eye strain |
| 7% | ~10:1 | High contrast - good for short sessions |
| **10%** | **~8:1** | **Optimal - AAA compliant, comfortable for long sessions** |
| 12% | ~7:1 | Good - still AAA compliant |
| 15% | ~5.5:1 | Borderline - AA compliant only |

**Alternatives considered:**
- 7-8% (GitHub's approach): Rejected as slightly too dark based on user feedback
- 12%: Viable alternative, but 10% provides slightly better contrast

### Decision 2: Derive Related Colors from Base Lightness

**What:** Calculate surface, border, overlay colors as ratios of the base lightness:
- `surface`: Same as background (1.0x)
- `surfaceDark`: 0.6x lightness
- `surfaceLight`: 1.5x lightness
- `border`: 1.8x lightness
- `overlay`: 1.3x lightness
- `panelBackground`: Same as background (1.0x)

**Why:** Maintains visual hierarchy while ensuring all values update together.

### Decision 3: Keep Saturation Theme-Specific

**What:** Each theme defines its own saturation (typically 8-15% for backgrounds).

**Why:** Saturation affects the "personality" of each theme. Dusk feels more purple, Midnight feels more blue, etc. This is part of each theme's identity.

### Decision 4: Line Number Color Remains Hardcoded

**What:** `lineNumber` color stays in individual palette files.

**Why:** Line number visibility depends on the specific foreground/background combination and may need fine-tuning per theme.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Uniform lightness may not suit all themes equally | Allow per-theme lightness override if needed in future |
| Calculated colors may not look as polished as hand-tuned | Start with calculated, refine if needed |
| Breaking existing visual appearance | Keep saturation and hue consistent with current values |

## Migration Plan

1. Create `src/background.ts` with utilities
2. Calculate current hue/saturation for each theme's background
3. Update each palette to use `createBackgroundColors()` with matching hue/saturation
4. Build and visually verify each theme
5. Adjust `BACKGROUND_LIGHTNESS` if needed

**Rollback:** Revert to hardcoded values by removing imports and restoring original hex codes.

## Open Questions

None - all decisions made based on discussion with user.
