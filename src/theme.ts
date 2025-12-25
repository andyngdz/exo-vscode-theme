/**
 * Exo Theme Generator
 */

import type { Palette } from '@/palettes'
import { darken, lighten, transparent, withOpacity } from '@/utils'

type ThemeColors = Record<string, string>

function createEditorColors(palette: Palette): ThemeColors {
  return {
    // Editor
    'editor.background': palette.background,
    'editor.foreground': palette.foreground,
    'editor.lineHighlightBackground': palette.surfaceLight,
    'editor.inactiveSelectionBackground': withOpacity(palette.primary, 0.2),
    'editor.selectionBackground': withOpacity(palette.primary, 0.35),
    'editor.selectionHighlightBackground': withOpacity(palette.string, 0.2),
    'editor.selectionHighlightBorder': transparent,
    'editor.wordHighlightBackground': withOpacity(palette.primary, 0.15),
    'editor.wordHighlightStrongBackground': withOpacity(palette.string, 0.15),
    'editor.wordHighlightBorder': withOpacity(palette.primary, 0.5),
    'editor.wordHighlightStrongBorder': withOpacity(palette.string, 0.5),
    'editor.findMatchBackground': withOpacity(palette.keyword, 0.4),
    'editor.findMatchBorder': withOpacity(palette.keyword, 0.4),
    'editor.findMatchHighlightBackground': withOpacity(palette.keyword, 0.25),
    'editor.findMatchHighlightBorder': withOpacity(palette.keyword, 0.25),
    'editor.findRangeHighlightBackground': withOpacity(palette.keyword, 0.2),
    'editor.rangeHighlightBackground': withOpacity(palette.keyword, 0.2),
    'editorCursor.foreground': palette.primary,
    'editorLink.activeForeground': palette.primary,
    'editorWhitespace.foreground': withOpacity(palette.comment, 0.6),
    'editorIndentGuide.background1': withOpacity(palette.comment, 0.2),
    'editorIndentGuide.activeBackground1': withOpacity(palette.comment, 0.5),
    'editorRuler.foreground': withOpacity(palette.comment, 0.2),
    'editorCodeLens.foreground': withOpacity(palette.foreground, 0.55),
    'editorBracketMatch.background': withOpacity(palette.comment, 0.3),
    'editorBracketMatch.border': withOpacity(palette.comment, 0.3),
    'editor.snippetTabstopHighlightBackground': withOpacity(palette.string, 0.2),
    'editorError.foreground': palette.error,
    'editorWarning.foreground': palette.number,
    'editorLineNumber.foreground': palette.lineNumber,
    'editorLineNumber.activeForeground': lighten(palette.lineNumber, 0.3),
  }
}

function createActivityBarColors(palette: Palette): ThemeColors {
  return {
    // Activity Bar (minimal icons)
    'activityBar.background': palette.background,
    'activityBar.foreground': palette.foregroundDim,
    'activityBarBadge.background': palette.primary,
    'activityBarBadge.foreground': palette.background,
  }
}

function createSidebarColors(palette: Palette): ThemeColors {
  return {
    // Sidebar
    'sideBar.background': palette.background,
    'sideBar.foreground': palette.foregroundDim,
    'sideBarTitle.foreground': palette.foreground,
    'sideBarSectionHeader.background': palette.background,
    'sideBarSectionHeader.foreground': palette.foreground,
  }
}

function createListColors(palette: Palette): ThemeColors {
  return {
    // Lists (using neutral selection)
    'list.activeSelectionBackground': withOpacity(palette.neutralSelection, 0.15),
    'list.activeSelectionForeground': palette.foregroundBright,
    'list.hoverBackground': withOpacity(palette.neutralSelection, 0.15),
    'list.focusBackground': withOpacity(palette.neutralSelection, 0.15),
    'list.inactiveFocusBackground': withOpacity(palette.neutralSelection, 0.10),
    'list.inactiveFocusOutline': transparent,
    'list.inactiveSelectionBackground': withOpacity(palette.neutralSelection, 0.10),
    'list.focusOutline': transparent,
    'list.activeSelectionIconForeground': palette.foregroundBright,
    'list.errorForeground': palette.error,
    'list.invalidItemForeground': withOpacity(palette.error, 0.7),
    'list.deemphasizedForeground': palette.foregroundDim,
  }
}

function createStatusBarColors(palette: Palette): ThemeColors {
  return {
    // Status Bar (unified background)
    'statusBar.background': palette.background,
    'statusBar.foreground': palette.foregroundDim,
    'statusBar.border': palette.border,
    'statusBar.debuggingBackground': palette.debugStatusBar,
    'statusBar.debuggingForeground': palette.foregroundBright,
    'statusBar.debuggingBorder': transparent,
    'statusBar.noFolderBackground': palette.background,
    'statusBar.noFolderForeground': palette.foregroundDim,
    'statusBar.noFolderBorder': palette.border,
    'statusBarItem.hoverBackground': withOpacity(palette.foregroundDim, 0.15),
    'statusBarItem.activeBackground': withOpacity(palette.foregroundDim, 0.25),
    'statusBarItem.prominentBackground': palette.border,
    'statusBarItem.prominentForeground': palette.foreground,
    'statusBarItem.prominentHoverBackground': palette.surfaceLight,
    'statusBarItem.prominentHoverForeground': palette.foreground,
    'statusBarItem.remoteBackground': withOpacity(palette.primary, 0.2),
    'statusBarItem.remoteForeground': palette.foregroundBright,
  }
}

function createTitleBarColors(palette: Palette): ThemeColors {
  return {
    // Title Bar (unified background)
    'titleBar.activeBackground': palette.background,
    'titleBar.activeForeground': palette.foreground,
    'titleBar.inactiveBackground': palette.background,
    'titleBar.inactiveForeground': palette.comment,
  }
}

function createTabColors(palette: Palette): ThemeColors {
  return {
    // Tabs
    'editorGroupHeader.tabsBackground': palette.background,
    'editorGroupHeader.noTabsBackground': palette.background,
    'editorGroupHeader.tabsBorder': transparent,
    'tab.activeBackground': palette.background,
    'tab.activeForeground': palette.foregroundBright,
    'tab.activeBorder': palette.primary,
    'tab.inactiveBackground': palette.panelBackground,
    'tab.inactiveForeground': palette.comment,
    'tab.border': transparent,
  }
}

function createPanelColors(palette: Palette): ThemeColors {
  return {
    // Panel
    'panel.background': palette.background,
    'panel.border': palette.border,
    'panelTitle.activeForeground': palette.foreground,
    'panelTitle.inactiveForeground': palette.comment,
  }
}

function createTerminalColors(palette: Palette): ThemeColors {
  return {
    // Terminal
    'terminal.background': palette.background,
    'terminal.foreground': palette.foreground,
  }
}

function createInputColors(palette: Palette): ThemeColors {
  return {
    // Input
    'input.background': palette.surface,
    'input.foreground': palette.foreground,
    'input.border': palette.border,
    'input.placeholderForeground': palette.comment,
    'inputOption.activeBorder': palette.primary,
  }
}

function createInputValidationColors(palette: Palette): ThemeColors {
  return {
    // Input Validation
    'inputValidation.errorBackground': withOpacity(palette.error, 0.2),
    'inputValidation.errorBorder': palette.error,
    'inputValidation.warningBackground': withOpacity(palette.number, 0.2),
    'inputValidation.warningBorder': palette.number,
    'inputValidation.infoBackground': withOpacity(palette.primary, 0.2),
    'inputValidation.infoBorder': palette.primary,
  }
}

function createDropdownAndMenuColors(palette: Palette): ThemeColors {
  return {
    // Dropdown & Menus
    'dropdown.background': palette.overlay,
    'dropdown.border': palette.border,
    'dropdown.listBackground': palette.overlay,
    'menu.background': palette.overlay,
    'menu.border': palette.border,
    'menu.foreground': palette.foreground,
    'menu.selectionBackground': withOpacity(palette.primary, 0.3),
    'menu.selectionForeground': palette.foregroundBright,
    'menu.separatorBackground': palette.border,
    'menubar.selectionBackground': withOpacity(palette.primary, 0.28),
  }
}

function createQuickInputColors(palette: Palette): ThemeColors {
  return {
    // Quick Input (Command Palette) - using neutral selection
    'quickInput.background': palette.overlay,
    'quickInput.foreground': palette.foreground,
    'quickInputList.focusBackground': withOpacity(palette.neutralSelection, 0.15),
    'quickInputList.focusForeground': palette.foregroundBright,
    'quickInputList.focusIconForeground': palette.foregroundBright,
    'quickInputTitle.background': palette.overlay,
    'pickerGroup.border': palette.border,
    'pickerGroup.foreground': palette.primary,
    'editorWidget.background': palette.overlay,
    'editorWidget.border': withOpacity(palette.primary, 0.4),
    'editorWidget.foreground': palette.foreground,
  }
}

function createChatColors(palette: Palette): ThemeColors {
  return {
    // Chat / AI panels
    'chat.requestBackground': palette.overlay,
    'chat.requestBorder': palette.border,
  }
}

function createNotificationColors(palette: Palette): ThemeColors {
  return {
    // Notifications
    'notifications.background': palette.overlay,
    'notifications.border': palette.border,
    'notificationCenterHeader.background': palette.overlay,
  }
}

function createHoverWidgetColors(palette: Palette): ThemeColors {
  return {
    // Hover widgets
    'editorHoverWidget.background': palette.overlay,
    'editorHoverWidget.border': withOpacity(palette.primary, 0.4),
  }
}

function createButtonColors(palette: Palette): ThemeColors {
  return {
    // Button
    'button.background': palette.primary,
    'button.foreground': palette.background,
    'button.hoverBackground': darken(palette.primary, 0.05),
    'button.hoverForeground': palette.background,
    'button.secondaryBackground': palette.surface,
    'button.secondaryForeground': palette.foreground,
    'button.secondaryHoverBackground': palette.surfaceLight,
  }
}

function createProgressBarColors(palette: Palette): ThemeColors {
  return {
    // Progress Bar
    'progressBar.background': palette.primary,
  }
}

function createScrollbarColors(palette: Palette): ThemeColors {
  return {
    // Scrollbar
    'scrollbarSlider.background': withOpacity(palette.foregroundDim, 0.28),
    'scrollbarSlider.hoverBackground': withOpacity(palette.foregroundDim, 0.4),
    'scrollbarSlider.activeBackground': withOpacity(palette.primary, 0.5),
  }
}

function createBadgeColors(palette: Palette): ThemeColors {
  return {
    // Badge
    'badge.background': palette.primary,
    'badge.foreground': palette.background,
  }
}

function createMiscColors(palette: Palette): ThemeColors {
  return {
    // Misc
    'focusBorder': palette.primary,
    'sash.hoverBorder': palette.primary,
    'widget.shadow': transparent,
    'scrollbar.shadow': transparent,
  }
}

function createTextColors(palette: Palette): ThemeColors {
  return {
    // Text Links
    'textLink.foreground': palette.primary,
    'textLink.activeForeground': lighten(palette.primary, 0.15),
    'textPreformat.foreground': palette.string,
  }
}

function createIconColors(palette: Palette): ThemeColors {
  return {
    // Icons (minimal, subtle colors that don't distract from code)
    'icon.foreground': palette.foregroundDim,
  }
}

function createBreadcrumbColors(palette: Palette): ThemeColors {
  return {
    // Breadcrumb
    'breadcrumb.background': palette.background,
    'breadcrumb.foreground': palette.foregroundDim,
    'breadcrumb.focusForeground': palette.foreground,
    'breadcrumb.activeSelectionForeground': palette.foregroundBright,
  }
}

function createTreeColors(palette: Palette): ThemeColors {
  return {
    // Tree (file explorer)
    'tree.indentGuidesStroke': palette.border,
  }
}

function createSettingsColors(palette: Palette): ThemeColors {
  return {
    // Settings UI
    'settings.modifiedItemIndicator': palette.primary,
    'settings.headerForeground': palette.foregroundBright,
  }
}

function createGitDecorationColors(palette: Palette): ThemeColors {
  return {
    // Git Decorations
    'gitDecoration.modifiedResourceForeground': palette.modified,
    'gitDecoration.deletedResourceForeground': palette.deleted,
    'gitDecoration.untrackedResourceForeground': palette.added,
    'gitDecoration.ignoredResourceForeground': palette.ignored,
    'gitDecoration.conflictingResourceForeground': palette.conflicting,
  }
}

function createEditorGutterColors(palette: Palette): ThemeColors {
  return {
    // Editor Gutter
    'editorGutter.background': palette.background,
    'editorGutter.modifiedBackground': withOpacity(palette.primary, 0.8),
    'editorGutter.addedBackground': withOpacity(palette.added, 0.8),
    'editorGutter.deletedBackground': withOpacity(palette.deleted, 0.8),
  }
}

function createOverviewRulerColors(palette: Palette): ThemeColors {
  return {
    // Overview Ruler (scrollbar indicators)
    'editorOverviewRuler.modifiedForeground': palette.primary,
    'editorOverviewRuler.addedForeground': palette.added,
    'editorOverviewRuler.deletedForeground': palette.deleted,
    'editorOverviewRuler.errorForeground': palette.error,
    'editorOverviewRuler.warningForeground': palette.number,
    'editorOverviewRuler.infoForeground': palette.primary,
    'editorOverviewRuler.bracketMatchForeground': palette.primary,
  }
}

function createDiffEditorColors(palette: Palette): ThemeColors {
  return {
    // Diff Editor
    'diffEditor.insertedLineBackground': withOpacity(palette.added, 0.18),
    'diffEditor.removedLineBackground': withOpacity(palette.deleted, 0.18),
    'diffEditor.insertedTextBackground': withOpacity(palette.added, 0.28),
    'diffEditor.removedTextBackground': withOpacity(palette.deleted, 0.28),
  }
}

function createMinimapColors(palette: Palette): ThemeColors {
  return {
    // Minimap
    'minimap.selectionHighlight': withOpacity(palette.primary, 0.5),
    'minimap.errorHighlight': palette.error,
    'minimap.warningHighlight': palette.number,
    'minimap.findMatchHighlight': withOpacity(palette.keyword, 0.5),
    'minimapGutter.addedBackground': palette.added,
    'minimapGutter.modifiedBackground': palette.modified,
    'minimapGutter.deletedBackground': palette.deleted,
  }
}

function createPeekViewColors(palette: Palette): ThemeColors {
  return {
    // Peek View (unified background)
    'peekView.border': palette.primary,
    'peekViewEditor.background': palette.background,
    'peekViewEditor.matchHighlightBackground': withOpacity(palette.keyword, 0.3),
    'peekViewResult.background': palette.surface,
    'peekViewResult.fileForeground': palette.foregroundBright,
    'peekViewResult.lineForeground': palette.foreground,
    'peekViewResult.matchHighlightBackground': withOpacity(palette.keyword, 0.3),
    'peekViewResult.selectionBackground': withOpacity(palette.primary, 0.2),
    'peekViewResult.selectionForeground': palette.foregroundBright,
    'peekViewTitle.background': palette.surface,
    'peekViewTitleDescription.foreground': palette.foregroundDim,
    'peekViewTitleLabel.foreground': palette.foregroundBright,
  }
}

function createDebugColors(palette: Palette): ThemeColors {
  return {
    // Debug
    'debugToolBar.background': palette.overlay,
    'debugExceptionWidget.background': palette.overlay,
    'debugExceptionWidget.border': palette.error,
    'editor.focusedStackFrameHighlightBackground': withOpacity(palette.added, 0.2),
    'editor.stackFrameHighlightBackground': withOpacity(palette.number, 0.2),
  }
}

function createMergeConflictColors(palette: Palette): ThemeColors {
  return {
    // Merge Conflicts
    'merge.currentHeaderBackground': withOpacity(palette.added, 0.3),
    'merge.currentContentBackground': withOpacity(palette.added, 0.18),
    'merge.incomingHeaderBackground': withOpacity(palette.primary, 0.3),
    'merge.incomingContentBackground': withOpacity(palette.primary, 0.18),
    'merge.border': palette.border,
  }
}

function createTerminalAnsiColors(palette: Palette): ThemeColors {
  return {
    // Terminal ANSI
    'terminal.ansiBlack': palette.surfaceDark,
    'terminal.ansiRed': palette.red,
    'terminal.ansiGreen': palette.green,
    'terminal.ansiYellow': palette.yellow,
    'terminal.ansiBlue': palette.blue,
    'terminal.ansiMagenta': palette.magenta,
    'terminal.ansiCyan': palette.primary,
    'terminal.ansiWhite': palette.foreground,
    'terminal.ansiBrightBlack': palette.comment,
    'terminal.ansiBrightRed': lighten(palette.red, 0.15),
    'terminal.ansiBrightGreen': lighten(palette.green, 0.15),
    'terminal.ansiBrightYellow': lighten(palette.yellow, 0.15),
    'terminal.ansiBrightBlue': lighten(palette.blue, 0.15),
    'terminal.ansiBrightMagenta': lighten(palette.magenta, 0.15),
    'terminal.ansiBrightCyan': lighten(palette.primary, 0.15),
    'terminal.ansiBrightWhite': palette.foregroundBright,
  }
}

type TokenColor = {
  name: string
  scope: string[]
  settings: {
    foreground?: string
    fontStyle?: string
  }
}

const OPERATOR_MISC_SCOPES = [
  'constant.other.color',
  'punctuation',
  'meta.tag',
  'punctuation.definition.tag',
  'punctuation.separator.inheritance.php',
  'punctuation.definition.tag.html',
  'punctuation.definition.tag.begin.html',
  'punctuation.definition.tag.end.html',
  'punctuation.section.embedded',
  'keyword.other.template',
  'keyword.other.substitution',
]

const FUNCTION_SPECIAL_METHOD_SCOPES = [
  'entity.name.function',
  'meta.function-call',
  'variable.function',
  'keyword.other.special-method',
  // Note: support.function moved to LIBRARY_FUNCTION_SCOPES for better differentiation
]

const NUMBER_SCOPES = [
  'constant.numeric',
  'variable.parameter',
  'keyword.other.unit',
]

const CONSTANT_SCOPES = [
  'support.constant',
  'constant.character',
  'constant.escape',
  'keyword.other',
]

const STRING_AND_SYMBOL_SCOPES = [
  'string',
  'constant.other.symbol',
  'constant.other.key',
  'entity.other.inherited-class',
  'markup.heading',
  'markup.inserted.git_gutter',
  'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
]

const CLASS_SUPPORT_SCOPES = [
  'entity.name',
  'support.type',
  'support.class',
  'support.other.namespace.use.php',
  'meta.use.php',
  'support.other.namespace.php',
  'markup.changed.git_gutter',
  'support.type.sys-types',
]

const HTML_ATTRIBUTES_SCOPES = [
  'text.html.basic entity.other.attribute-name.html',
  'text.html.basic entity.other.attribute-name',
]

const LANGUAGE_VARIABLE_SCOPES = [
  'variable.language.this',
  'variable.language.self',
  'variable.language.super',
  'variable.language',
]

const OBJECT_PROPERTY_SCOPES = [
  'variable.other.property',
  'variable.other.object.property',
  'variable.other.readwrite',
  'support.variable.property',
  'support.variable.dom',
  'support.variable',
]

const LIBRARY_FUNCTION_SCOPES = [
  'support.function',
  'support.method',
]

const PACKAGE_KEYWORD_SCOPES = [
  'keyword.control.import',
  'keyword.control.export',
  'keyword.control.from',
  'keyword.control.as',
  'keyword.control.default',
  'storage.type.namespace',
  'storage.type.class',
  'storage.type.function',
  'storage.type.type',
  'storage.type.interface',
  'storage.type.enum',
]

const MARKDOWN_HEADING_SCOPES = [
  'markdown.heading',
  'markup.heading | markup.heading entity.name',
  'markup.heading.markdown punctuation.definition.heading.markdown',
]

function createCoreTokenColors(palette: Palette): TokenColor[] {
  return [
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.comment,
      },
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: palette.foregroundBright,
      },
    },
    {
      name: 'Object Properties (de-emphasized for clean property chains)',
      scope: OBJECT_PROPERTY_SCOPES,
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: palette.foregroundBright,
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: palette.error,
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Package/Module Keywords (import, export, from)',
      scope: PACKAGE_KEYWORD_SCOPES,
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Operator, Misc',
      scope: OPERATOR_MISC_SCOPES,
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Function, Special Method',
      scope: FUNCTION_SPECIAL_METHOD_SCOPES,
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Numbers',
      scope: NUMBER_SCOPES,
      settings: {
        foreground: palette.number,
      },
    },
    {
      name: 'Constants (support constants, escape chars)',
      scope: ['support.constant', 'constant.character', 'constant.escape', 'keyword.other'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: STRING_AND_SYMBOL_SCOPES,
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: 'Support (Built-in Types, Classes, Functions) - de-emphasized',
      scope: ['support'],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Class, Support',
      scope: CLASS_SUPPORT_SCOPES,
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.function,
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'HTML Attributes',
      scope: HTML_ATTRIBUTES_SCOPES,
      settings: {
        fontStyle: 'italic',
        foreground: palette.type,
      },
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: palette.added,
      },
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: palette.deleted,
      },
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Language Variables (this, self, super) - muted',
      scope: LANGUAGE_VARIABLE_SCOPES,
      settings: {
        fontStyle: 'italic',
        foreground: palette.foreground,
      },
    },
    {
      name: 'Library/Built-in Functions',
      scope: LIBRARY_FUNCTION_SCOPES,
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.constant,
      },
    },
  ]
}


function createMarkdownTokenColors(palette: Palette): TokenColor[] {
  return [
    // Markdown
    {
      name: 'Markdown - Plain',
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Heading',
      scope: MARKDOWN_HEADING_SCOPES,
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.constant,
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.constant,
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: palette.number,
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Fenced Code Block',
      scope: ['punctuation.definition.fenced.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: palette.foreground,
      },
    },
  ]
}

export function createTheme(palette: Palette) {
  const colors: ThemeColors = {
    ...createEditorColors(palette),
    ...createActivityBarColors(palette),
    ...createSidebarColors(palette),
    ...createListColors(palette),
    ...createStatusBarColors(palette),
    ...createTitleBarColors(palette),
    ...createTabColors(palette),
    ...createPanelColors(palette),
    ...createTerminalColors(palette),
    ...createInputColors(palette),
    ...createInputValidationColors(palette),
    ...createDropdownAndMenuColors(palette),
    ...createQuickInputColors(palette),
    ...createChatColors(palette),
    ...createNotificationColors(palette),
    ...createHoverWidgetColors(palette),
    ...createButtonColors(palette),
    ...createProgressBarColors(palette),
    ...createScrollbarColors(palette),
    ...createBadgeColors(palette),
    ...createMiscColors(palette),
    ...createTextColors(palette),
    ...createIconColors(palette),
    ...createBreadcrumbColors(palette),
    ...createTreeColors(palette),
    ...createSettingsColors(palette),
    ...createGitDecorationColors(palette),
    ...createEditorGutterColors(palette),
    ...createOverviewRulerColors(palette),
    ...createDiffEditorColors(palette),
    ...createMinimapColors(palette),
    ...createPeekViewColors(palette),
    ...createDebugColors(palette),
    ...createMergeConflictColors(palette),
    ...createTerminalAnsiColors(palette),
  }

  const tokenColors: TokenColor[] = [
    ...createCoreTokenColors(palette),
    ...createMarkdownTokenColors(palette),
  ]

  return {
    name: palette.name,
    type: 'dark',
    semanticHighlighting: true,
    colors,
    tokenColors,
  }
}
