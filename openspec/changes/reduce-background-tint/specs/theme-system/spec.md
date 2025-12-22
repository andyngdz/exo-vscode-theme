# Theme System - Delta

## MODIFIED Requirements

### Requirement: Background Color Generation

The system SHALL support low-saturation, eye-comfort background colors while preserving each theme’s identity via hue.

#### Scenario: Background tint is muted

- **WHEN** a palette uses `createBackgroundColors(hue, saturation)`
- **THEN** the saturation SHALL be low enough that the background reads as near-neutral
- **AND** the theme tint SHOULD be subtle (avoid noticeable “color fog”)

#### Scenario: Theme identity is preserved

- **WHEN** background tint is reduced
- **THEN** each palette SHALL keep a distinct hue value consistent with its identity
- **AND** themes SHALL not converge to identical-looking backgrounds

#### Scenario: Background changes do not alter API surface

- **WHEN** palette background values are adjusted
- **THEN** the palette token names and theme generator APIs SHALL remain unchanged
