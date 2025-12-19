## ADDED Requirements

### Requirement: Dusk Color Palette

The Dusk theme SHALL define a complete color palette with evening twilight aesthetics.

#### Scenario: Base colors reflect evening sky

- **WHEN** the Dusk palette is applied
- **THEN** the background SHALL be a deep purple-tinted dark (`#1a1520`)
- **AND** foreground colors SHALL have cool lavender undertones
- **AND** the text hierarchy SHALL progress: `foregroundBright` > `foreground` > `foregroundDim`

#### Scenario: Primary accent is warm amber

- **WHEN** interactive elements are highlighted
- **THEN** the primary color SHALL be warm amber (`#d89050`)
- **AND** it SHALL evoke the feeling of a setting sun

### Requirement: Dusk Syntax Colors

The Dusk theme SHALL provide syntax highlighting colors inspired by sunset hues.

#### Scenario: Syntax colors are distinguishable

- **WHEN** code is displayed with Dusk theme
- **THEN** keywords SHALL be dusty purple (`#c080b0`) like twilight sky
- **AND** functions SHALL be golden amber (`#e0a860`) like setting sun
- **AND** strings SHALL be muted teal (`#80b898`) like evening water
- **AND** numbers SHALL be warm copper (`#d8a070`) like horizon glow
- **AND** comments SHALL be muted purple-gray (`#605868`) like fading light
- **AND** types SHALL be deep periwinkle (`#8090c8`) like evening sky

### Requirement: Dusk UI Surfaces

The Dusk theme SHALL define UI surface colors with purple undertones.

#### Scenario: UI surfaces create depth

- **WHEN** the UI is rendered
- **THEN** surfaces SHALL have purple-tinted variations
- **AND** `surfaceDark` SHALL be darker than `background`
- **AND** `surfaceLight` SHALL be lighter than `background`
- **AND** borders SHALL be subtle but visible

### Requirement: Dusk Terminal Colors

The Dusk theme SHALL provide terminal ANSI colors with warm evening tones.

#### Scenario: Terminal colors match theme

- **WHEN** terminal output is displayed
- **THEN** ANSI colors SHALL harmonize with the evening palette
- **AND** colors SHALL remain distinguishable for readability
