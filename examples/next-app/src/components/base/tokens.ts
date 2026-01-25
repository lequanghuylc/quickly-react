/**
 * Color tokens extracted from shadcn/ui Figma design system
 * These values match the original shadcn/ui design system
 */
export const COLOR = {
  // Background & Foreground (shadcn/ui semantic tokens)
  BACKGROUND: '#FFFFFF',
  FOREGROUND: '#0A0A0A',
  
  // Primary colors (from shadcn/ui Figma design)
  PRIMARY: '#0F172A', // hsl(222.2, 47.4%, 11.2%)
  PRIMARY_FOREGROUND: '#FFFFFF',
  PRIMARY_500: '#0F172A',
  PRIMARY_400: '#1E293B',
  PRIMARY_300: '#334155',
  PRIMARY_200: '#475569',
  PRIMARY_100: '#64748B',

  // Secondary colors (shadcn/ui)
  SECONDARY: '#F1F5F9', // hsl(210, 40%, 96.1%)
  SECONDARY_FOREGROUND: '#0F172A',
  SECONDARY_500: '#F1F5F9',
  SECONDARY_400: '#E2E8F0',
  SECONDARY_300: '#CBD5E1',
  SECONDARY_200: '#94A3B8',
  SECONDARY_100: '#64748B',

  // Muted colors (shadcn/ui)
  MUTED: '#F1F5F9',
  MUTED_FOREGROUND: '#64748B',

  // Accent colors (shadcn/ui)
  ACCENT: '#F1F5F9',
  ACCENT_FOREGROUND: '#0F172A',

  // Destructive (shadcn/ui)
  DESTRUCTIVE: '#EF4444', // hsl(0, 84.2%, 60.2%)
  DESTRUCTIVE_FOREGROUND: '#FFFFFF',

  // Border & Input (shadcn/ui)
  BORDER: '#E2E8F0', // hsl(214.3, 31.8%, 91.4%)
  INPUT: '#E2E8F0',
  RING: '#0F172A',

  // Semantic colors (from shadcn/ui Figma)
  SUCCESS: '#10B981',
  INFO: '#3B82F6',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  DISABLED: '#94A3B8',

  // Slate scale (shadcn/ui uses slate for grays)
  SLATE_950: '#020617',
  SLATE_900: '#0F172A',
  SLATE_800: '#1E293B',
  SLATE_700: '#334155',
  SLATE_600: '#475569',
  SLATE_500: '#64748B',
  SLATE_400: '#94A3B8',
  SLATE_300: '#CBD5E1',
  SLATE_200: '#E2E8F0',
  SLATE_100: '#F1F5F9',
  SLATE_50: '#F8FAFC',

  // Legacy greyscale (mapped to slate for compatibility)
  GREYSCALE_900: '#0F172A',
  GREYSCALE_800: '#1E293B',
  GREYSCALE_700: '#334155',
  GREYSCALE_600: '#475569',
  GREYSCALE_500: '#64748B',
  GREYSCALE_400: '#94A3B8',
  GREYSCALE_300: '#CBD5E1',
  GREYSCALE_200: '#E2E8F0',
  GREYSCALE_100: '#F1F5F9',
  GREYSCALE_50: '#F8FAFC',

  // Base colors
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TRANSPARENT: 'transparent',
};

/**
 * Spacing unit from shadcn/ui Figma design system
 * shadcn/ui uses 4px as the base spacing unit
 */
export const SPACING_UNIT = 4;

/**
 * Typography tokens from shadcn/ui Figma design system
 * These values match the original shadcn/ui typography scale
 */
export const TYPOGRAPHY = {
  fontFamily: 'Inter, sans-serif', // shadcn/ui standard font
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14, // shadcn/ui base font size
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5, // shadcn/ui standard line height
    relaxed: 1.75,
  },
};
