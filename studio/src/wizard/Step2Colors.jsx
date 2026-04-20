import React from 'react';
import { COLOR_PALETTES } from '../presets';

const PALETTE_ENTRIES = Object.entries(COLOR_PALETTES);

const PALETTE_NAMES = {
  indigo: 'Indigo',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  emerald: 'Emerald',
  purple: 'Purple',
  pink: 'Pink',
  rose: 'Rose',
  orange: 'Orange',
  amber: 'Amber',
  slate: 'Slate',
};

export default function Step2Colors({ preferences, updatePreferences }) {
  const { colors } = preferences;

  const handlePaletteSelect = (id, palette) => {
    updatePreferences({
      colors: {
        ...colors,
        palette: id,
        primary: palette.primary,
        primaryLight: palette.primaryLight,
        primaryDark: palette.primaryDark,
        bgAccent: palette.bgAccent,
      },
    });
  };

  const handleCustomPrimary = (e) => {
    const hex = e.target.value;
    updatePreferences({
      colors: {
        ...colors,
        palette: 'custom',
        primary: hex,
        primaryLight: lightenHex(hex, 35),
        primaryDark: darkenHex(hex, 20),
        bgAccent: hex + '1a',
      },
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Palette bar preview */}
      <div>
        <div className="field-label">Current palette</div>
        <div className="color-preview-bar">
          {[colors.primaryDark, colors.primary, colors.primaryLight, colors.bgAccent.replace('rgba', 'rgb').replace(/,[\d.]+\)/, ')')].map((c, i) => (
            <div key={i} className="color-preview-segment" style={{ backgroundColor: i === 3 ? colors.primary + '33' : c }} />
          ))}
          {['#10B981','#F59E0B','#EF4444'].map((c, i) => (
            <div key={`s${i}`} className="color-preview-segment" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>

      {/* Preset swatches */}
      <div>
        <div className="field-label">Brand color</div>
        <div className="palette-grid">
          {PALETTE_ENTRIES.map(([id, palette]) => (
            <div
              key={id}
              className={`palette-swatch${colors.palette === id ? ' selected' : ''}`}
              style={{ backgroundColor: palette.primary }}
              title={PALETTE_NAMES[id]}
              onClick={() => handlePaletteSelect(id, palette)}
            />
          ))}
          {/* Custom color picker */}
          <label
            title="Custom color"
            style={{
              width: 36, height: 36, borderRadius: 8, cursor: 'pointer',
              border: '2px dashed var(--border-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, color: 'var(--text-3)', flexShrink: 0,
              position: 'relative', overflow: 'hidden',
            }}
          >
            +
            <input
              type="color"
              value={colors.primary}
              onChange={handleCustomPrimary}
              style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
            />
          </label>
        </div>
        <div className="field-hint">
          Selected: <span style={{ color: colors.primary, fontWeight: 600 }}>{colors.primary}</span>
        </div>
      </div>

      {/* Neutral / surface colors (fixed, informational) */}
      <div>
        <div className="field-label">Neutral scale (fixed)</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['#F9FAFB','#F3F4F6','#E5E7EB','#D1D5DB','#9CA3AF','#6B7280','#4B5563','#374151','#1F2937','#111827'].map((c, i) => (
            <div
              key={i}
              style={{
                flex: 1, height: 24, backgroundColor: c,
                borderRadius: i === 0 ? '6px 0 0 6px' : i === 9 ? '0 6px 6px 0' : 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Semantic colors */}
      <div>
        <div className="field-label">Semantic colors (fixed)</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Success', color: '#10B981' },
            { label: 'Warning', color: '#F59E0B' },
            { label: 'Error',   color: '#EF4444' },
            { label: 'Info',    color: '#3B82F6' },
          ].map(({ label, color }) => (
            <div key={label} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 28, backgroundColor: color, borderRadius: 6, marginBottom: 4 }} />
              <span style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function lightenHex(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + amount);
  const b = Math.min(255, (num & 0xff) + amount);
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function darkenHex(hex, amount) {
  return lightenHex(hex, -amount);
}
