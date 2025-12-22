## ADDED Requirements

### Requirement: Color Scale Generation

The system SHALL provide a color scale generator that creates consistent shade variations from base colors.

#### Scenario: Generate 10-shade scale from base color

- **WHEN** `generateScale(baseColor)` is called with a hex color
- **THEN** it SHALL return an array of 10 hex colors
- **AND** index 0 SHALL be the lightest shade (~95% lightness)
- **AND** index 9 SHALL be the darkest shade (~10% lightness)
- **AND** all shades SHALL preserve the base color's hue

#### Scenario: Scale indices follow convention

- **WHEN** referencing scale colors for dark themes
- **THEN** indices 2-3 SHALL be used for bright syntax colors (70-80% lightness)
- **AND** indices 6-7 SHALL be used for muted UI elements (30-40% lightness)

### Requirement: Theme Scale Definitions

Each theme SHALL define its color identity through a set of base scale colors.

#### Scenario: Theme defines required scales

- **WHEN** a theme scale is defined
- **THEN** it SHALL include at minimum:
  - `primary` - Keyword/accent color
  - `secondary` - Function color
  - `tertiary` - String color
  - `neutral` - Gray/comment color
  - `success` - Green/added color
  - `danger` - Red/error color
  - `warning` - Yellow/modified color

#### Scenario: Scales derive from theme identity

- **WHEN** defining base colors for scales
- **THEN** colors SHALL match the theme's identity (e.g., purple for Dusk, coral for Dawn)
- **AND** the primary scale SHALL be the theme's signature color

## MODIFIED Requirements

### Requirement: Palette Structure

Each theme palette SHALL define a complete set of color tokens required by the theme generator.

#### Scenario: Palette uses scale references

- **WHEN** a palette is created
- **THEN** syntax colors MAY be derived from scale indices
- **AND** the final palette object SHALL maintain the same shape as before
- **AND** the Palette type interface SHALL remain unchanged

#### Scenario: Backward compatibility maintained

- **WHEN** palettes are refactored to use scales
- **THEN** the generated theme JSON output SHALL be identical to before
- **AND** no visual changes SHALL occur in VS Code
