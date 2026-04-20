export const COLOR_PALETTES = {
  indigo:  { primary: '#4F46E5', primaryLight: '#818CF8', primaryDark: '#3730A3', bgAccent: 'rgba(79,70,229,0.10)' },
  blue:    { primary: '#2563EB', primaryLight: '#60A5FA', primaryDark: '#1D4ED8', bgAccent: 'rgba(37,99,235,0.10)' },
  cyan:    { primary: '#0891B2', primaryLight: '#67E8F9', primaryDark: '#0E7490', bgAccent: 'rgba(8,145,178,0.10)' },
  teal:    { primary: '#0D9488', primaryLight: '#5EEAD4', primaryDark: '#0F766E', bgAccent: 'rgba(13,148,136,0.10)' },
  emerald: { primary: '#059669', primaryLight: '#6EE7B7', primaryDark: '#047857', bgAccent: 'rgba(5,150,105,0.10)' },
  purple:  { primary: '#7C3AED', primaryLight: '#C4B5FD', primaryDark: '#6D28D9', bgAccent: 'rgba(124,58,237,0.10)' },
  pink:    { primary: '#DB2777', primaryLight: '#F9A8D4', primaryDark: '#BE185D', bgAccent: 'rgba(219,39,119,0.10)' },
  rose:    { primary: '#E11D48', primaryLight: '#FDA4AF', primaryDark: '#BE123C', bgAccent: 'rgba(225,29,72,0.10)' },
  orange:  { primary: '#EA580C', primaryLight: '#FED7AA', primaryDark: '#C2410C', bgAccent: 'rgba(234,88,12,0.10)' },
  amber:   { primary: '#D97706', primaryLight: '#FDE68A', primaryDark: '#B45309', bgAccent: 'rgba(217,119,6,0.10)' },
  slate:   { primary: '#475569', primaryLight: '#94A3B8', primaryDark: '#334155', bgAccent: 'rgba(71,85,105,0.10)' },
};

export const FONT_OPTIONS = [
  { id: 'Inter',              label: 'Inter',              category: 'Modern Sans-Serif',  sample: 'Design with clarity' },
  { id: 'Poppins',            label: 'Poppins',            category: 'Geometric & Friendly', sample: 'Design with clarity' },
  { id: 'DM Sans',            label: 'DM Sans',            category: 'Minimal & Clean',    sample: 'Design with clarity' },
  { id: 'Nunito',             label: 'Nunito',             category: 'Rounded & Warm',     sample: 'Design with clarity' },
  { id: 'Outfit',             label: 'Outfit',             category: 'Contemporary',       sample: 'Design with clarity' },
  { id: 'Plus Jakarta Sans',  label: 'Plus Jakarta Sans',  category: 'Professional',       sample: 'Design with clarity' },
];

export const RADIUS_OPTIONS = [
  { id: 'sharp',   label: 'Sharp',   value: 0,  description: 'Enterprise / Serious' },
  { id: 'sm',      label: 'Slight',  value: 4,  description: 'Professional / Subtle' },
  { id: 'default', label: 'Default', value: 8,  description: 'Modern / Balanced' },
  { id: 'lg',      label: 'Rounded', value: 12, description: 'Friendly / Approachable' },
  { id: 'xl',      label: 'Soft',    value: 16, description: 'Playful / Casual' },
];

export const SPACING_OPTIONS = [
  { id: 'compact',  label: 'Compact',  unit: 6,  description: 'Dense, information-heavy (u=6px)' },
  { id: 'standard', label: 'Standard', unit: 8,  description: 'Balanced, recommended (u=8px)' },
  { id: 'relaxed',  label: 'Relaxed',  unit: 10, description: 'Breathable, editorial (u=10px)' },
  { id: 'spacious', label: 'Spacious', unit: 12, description: 'Premium, luxurious (u=12px)' },
];

export const SHADOW_OPTIONS = [
  { id: 'none',   label: 'Flat',   description: 'No elevation — flat design' },
  { id: 'subtle', label: 'Subtle', description: 'Barely-there depth' },
  { id: 'medium', label: 'Medium', description: 'Clear elevation (recommended)' },
  { id: 'strong', label: 'Strong', description: 'Bold, dramatic depth' },
];

export const INDUSTRY_PRESETS = [
  {
    id: 'saas',
    label: 'SaaS / Product',
    icon: '⚡',
    description: 'Clean, focused, trustworthy',
    palette: 'indigo',
    font: 'Inter',
    radius: 'default',
    spacing: 'standard',
    shadow: 'subtle',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: '🛍️',
    description: 'Bold, inviting, conversion-focused',
    palette: 'purple',
    font: 'Poppins',
    radius: 'lg',
    spacing: 'standard',
    shadow: 'medium',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: '🏥',
    description: 'Calm, accessible, trustworthy',
    palette: 'teal',
    font: 'DM Sans',
    radius: 'default',
    spacing: 'relaxed',
    shadow: 'subtle',
  },
  {
    id: 'finance',
    label: 'Finance / Banking',
    icon: '💼',
    description: 'Authoritative, precise, secure',
    palette: 'slate',
    font: 'Inter',
    radius: 'sm',
    spacing: 'compact',
    shadow: 'none',
  },
  {
    id: 'creative',
    label: 'Creative / Agency',
    icon: '🎨',
    description: 'Vibrant, expressive, bold',
    palette: 'orange',
    font: 'Outfit',
    radius: 'xl',
    spacing: 'relaxed',
    shadow: 'strong',
  },
  {
    id: 'social',
    label: 'Social / Consumer',
    icon: '💬',
    description: 'Friendly, engaging, fun',
    palette: 'pink',
    font: 'Nunito',
    radius: 'lg',
    spacing: 'standard',
    shadow: 'medium',
  },
];

export function buildPreferences(preset) {
  const palette = COLOR_PALETTES[preset.palette];
  const radiusOption = RADIUS_OPTIONS.find(r => r.id === preset.radius);
  const spacingOption = SPACING_OPTIONS.find(s => s.id === preset.spacing);

  return {
    industry: preset.id,
    colors: {
      palette: preset.palette,
      primary: palette.primary,
      primaryLight: palette.primaryLight,
      primaryDark: palette.primaryDark,
      bgAccent: palette.bgAccent,
      // Fixed neutrals
      neutral50:  '#F9FAFB',
      neutral100: '#F3F4F6',
      neutral200: '#E5E7EB',
      neutral300: '#D1D5DB',
      neutral400: '#9CA3AF',
      neutral500: '#6B7280',
      neutral600: '#4B5563',
      neutral700: '#374151',
      neutral800: '#1F2937',
      neutral900: '#111827',
      // Semantic
      success: '#10B981',
      error:   '#EF4444',
      warning: '#F59E0B',
      info:    '#3B82F6',
      // Surfaces
      bgPrimary:   '#FFFFFF',
      bgSecondary: '#F9FAFB',
      bgTertiary:  '#F3F4F6',
      // Text
      textPrimary:   '#111827',
      textSecondary: '#6B7280',
      textTertiary:  '#9CA3AF',
      textInverse:   '#FFFFFF',
      border: '#E5E7EB',
    },
    typography: {
      fontFamily: preset.font,
    },
    borders: {
      radiusId: preset.radius,
      radius: radiusOption?.value ?? 8,
    },
    spacing: {
      unitId: preset.spacing,
      unit: spacingOption?.unit ?? 8,
    },
    shadows: {
      style: preset.shadow,
    },
  };
}

export const DEFAULT_PREFERENCES = buildPreferences(INDUSTRY_PRESETS[0]);
