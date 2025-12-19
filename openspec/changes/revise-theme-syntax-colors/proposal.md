# Change: Revise Theme Syntax Colors for Distinction and Eye Comfort

## Why

The current 4 themes have syntax colors that are too similar, and some don't fully represent their theme names. We need colors that:

1. **Eye comfort first** - Muted, low-saturation colors that don't cause fatigue
2. **Beautiful aesthetics** - "Wow, this looks good" feeling
3. **Match theme names** - Colors should evoke the theme's identity
4. **Distinct personalities** - Each theme must feel uniquely different

## Theme Identities

### Dusk (Evening/Sunset)
- **Feeling**: Relaxing end of day, warm fading light
- **Palette**: Soft purples, muted oranges, dusty pinks, twilight blues
- **Key colors**: Lavender keywords, soft amber functions, dusty rose strings

### Dawn (Morning/Sunrise)  
- **Feeling**: Fresh start, gentle awakening, hope
- **Palette**: Soft corals, peachy pinks, sage greens, golden highlights
- **Key colors**: Coral keywords, soft gold functions, fresh sage strings

### Midnight (Deep Night)
- **Feeling**: Calm, focused, serene stillness
- **Palette**: Deep blues, silver, soft cyan, moonlit tones
- **Key colors**: Soft blue keywords, pale cyan functions, seafoam strings

### Eclipse (Solar Eclipse)
- **Feeling**: Dramatic, mysterious, powerful
- **Palette**: Deep burgundy, burnt orange corona, dark shadows
- **Key colors**: Wine/burgundy keywords, burnt sienna functions, muted ochre strings

## What Changes

Revise syntax colors in all 4 palette files to match their theme identities while maintaining eye comfort.

## Impact

- Affected specs: `dusk-theme`, `dawn-theme`, `midnight-theme`, `eclipse-theme`
- Affected code: `src/palettes/dusk.ts`, `src/palettes/dawn.ts`, `src/palettes/midnight.ts`, `src/palettes/eclipse.ts`
