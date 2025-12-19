## ADDED Requirements

### Requirement: Dawn Color Palette

The Dawn theme SHALL define a complete color palette with sunrise aesthetics.

#### Scenario: Base colors reflect pre-dawn sky

- **WHEN** the Dawn palette is applied
- **THEN** the background SHALL be dark with warm undertones (`#1a1618`)
- **AND** foreground colors SHALL have warm cream undertones
- **AND** the text hierarchy SHALL progress: `foregroundBright` > `foreground` > `foregroundDim`

#### Scenario: Primary accent is soft coral

- **WHEN** interactive elements are highlighted
- **THEN** the primary color SHALL be soft coral (`#e08870`)
- **AND** it SHALL evoke the feeling of sunrise clouds

### Requirement: Dawn Syntax Colors

The Dawn theme SHALL provide syntax highlighting colors inspired by morning hues.

#### Scenario: Syntax colors are distinguishable

- **WHEN** code is displayed with Dawn theme
- **THEN** keywords SHALL be rose pink (`#e07088`) like morning sky blush
- **AND** functions SHALL be golden yellow (`#d8b060`) like first sun rays
- **AND** strings SHALL be fresh green (`#70b080`) like morning dew
- **AND** numbers SHALL be peach (`#e09868`) like horizon glow
- **AND** comments SHALL be warm gray (`#686060`) like morning mist
- **AND** types SHALL be soft blue (`#70a0c0`) like clearing sky

### Requirement: Dawn UI Surfaces

The Dawn theme SHALL define UI surface colors with warm undertones.

#### Scenario: UI surfaces create depth

- **WHEN** the UI is rendered
- **THEN** surfaces SHALL have warm-tinted variations
- **AND** `surfaceDark` SHALL be darker than `background`
- **AND** `surfaceLight` SHALL be lighter than `background`
- **AND** borders SHALL be subtle but visible

### Requirement: Dawn Terminal Colors

The Dawn theme SHALL provide terminal ANSI colors with warm morning tones.

#### Scenario: Terminal colors match theme

- **WHEN** terminal output is displayed
- **THEN** ANSI colors SHALL harmonize with the morning palette
- **AND** colors SHALL remain distinguishable for readability
