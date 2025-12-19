## ADDED Requirements

### Requirement: Midnight Color Palette

The Midnight theme SHALL define a complete color palette with deep night sky aesthetics.

#### Scenario: Base colors reflect starless night

- **WHEN** the Midnight palette is applied
- **THEN** the background SHALL be a deep blue-black (`#0f1218`)
- **AND** foreground SHALL be cool silver-gray (`#b0b8c8`)
- **AND** foregroundBright SHALL be pale silver (`#e0e8f0`)
- **AND** foregroundDim SHALL be muted slate (`#606878`)
- **AND** the text hierarchy SHALL progress: `foregroundBright` > `foreground` > `foregroundDim`

#### Scenario: Primary accent is silver ice blue

- **WHEN** interactive elements are highlighted
- **THEN** the primary color SHALL be silver/ice blue (`#70a0c0`)
- **AND** it SHALL evoke the feeling of moonlight on still water

### Requirement: Midnight Syntax Colors

The Midnight theme SHALL provide syntax highlighting colors inspired by the night sky.

#### Scenario: Syntax colors are distinguishable

- **WHEN** code is displayed with Midnight theme
- **THEN** keywords SHALL be soft violet (`#9080c0`) like distant stars
- **AND** functions SHALL be pale cyan (`#70b8c8`) like aurora
- **AND** strings SHALL be muted seafoam (`#70a898`) like bioluminescence
- **AND** numbers SHALL be soft silver (`#a0a8b8`) like starlight
- **AND** comments SHALL be deep slate (`#505868`) like night clouds
- **AND** operators SHALL be cool gray (`#808898`) like moonlit mist
- **AND** types SHALL be cool periwinkle (`#8098c8`) like pre-dawn sky
- **AND** constants SHALL be pale lavender (`#9898b0`) like distant nebula
- **AND** errors SHALL be muted rose (`#c07080`) like warning beacon

### Requirement: Midnight UI Surfaces

The Midnight theme SHALL define UI surface colors with deep blue undertones.

#### Scenario: UI surfaces create depth

- **WHEN** the UI is rendered
- **THEN** border SHALL be deep blue-gray (`#1a2028`)
- **AND** surface SHALL be slightly lighter than background (`#141820`)
- **AND** surfaceDark SHALL be darker than background (`#0a0c10`)
- **AND** surfaceLight SHALL be lighter than background (`#1a2028`)
- **AND** overlay SHALL be elevated surface (`#181c24`)
- **AND** lineNumber SHALL be muted slate (`#404858`)
- **AND** panelBackground SHALL match background (`#0f1218`)

### Requirement: Midnight Git Colors

The Midnight theme SHALL provide git decoration colors that follow conventions while matching the theme.

#### Scenario: Git colors are recognizable

- **WHEN** git status is displayed
- **THEN** added SHALL be muted seafoam (`#70a898`)
- **AND** deleted SHALL be muted rose (`#c07080`)
- **AND** modified SHALL be ice blue (`#70a0c0`)
- **AND** ignored SHALL be deep slate (`#505868`)
- **AND** conflicting SHALL be soft silver (`#a0a8b8`)

### Requirement: Midnight Terminal Colors

The Midnight theme SHALL provide terminal ANSI colors with cool night tones.

#### Scenario: Terminal colors match theme

- **WHEN** terminal output is displayed
- **THEN** red SHALL be cool rose (`#d08088`)
- **AND** green SHALL be cool mint (`#80c0a0`)
- **AND** yellow SHALL be pale gold (`#c8b878`)
- **AND** blue SHALL be ice blue (`#80a8d0`)
- **AND** magenta SHALL be soft violet (`#b088c0`)
- **AND** colors SHALL remain distinguishable for readability
