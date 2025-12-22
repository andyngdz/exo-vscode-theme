# Theme System - Delta

## MODIFIED Requirements

### Requirement: Background Color Generation

The system SHALL support a shared neutral baseline (Ayu Mirage-inspired) while allowing minimal hue bias per theme.

#### Scenario: Shared neutral base
- **WHEN** palettes define background-related colors
- **THEN** they MAY reuse the same neutral lightness (Mirage `#1F2430` equivalent)
- **AND** readability SHALL take precedence over maintaining distinct background hues

#### Scenario: Subtle hue fingerprint
- **WHEN** palettes blend the Mirage base with their theme hue
- **THEN** the hue bias SHALL remain low saturation (≤ 6%)
- **AND** each theme SHALL still be distinguishable (Forest slightly greener, Dusk slightly purple, etc.)

#### Scenario: Background changes do not alter API surface
- **WHEN** the neutral blend is applied
- **THEN** palette token names and theme generator APIs SHALL remain unchanged
