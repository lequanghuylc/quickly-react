import React from 'react';
import { FONT_OPTIONS } from '../presets';

const TYPE_SCALE = [
  { name: 'h1',      size: 48, weight: 700 },
  { name: 'h2',      size: 36, weight: 700 },
  { name: 'h3',      size: 24, weight: 600 },
  { name: 'h4',      size: 20, weight: 600 },
  { name: 'body lg', size: 17, weight: 400 },
  { name: 'body',    size: 15, weight: 400 },
  { name: 'small',   size: 13, weight: 400 },
  { name: 'caption', size: 11, weight: 400 },
];

export default function Step3Typography({ preferences, updatePreferences }) {
  const currentFont = preferences.typography.fontFamily;

  const handleSelect = (fontId) => {
    updatePreferences({ typography: { fontFamily: fontId } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Font picker */}
      <div>
        <div className="field-label">Font family</div>
        <div className="font-grid">
          {FONT_OPTIONS.map(font => (
            <button
              key={font.id}
              className={`font-card${currentFont === font.id ? ' selected' : ''}`}
              onClick={() => handleSelect(font.id)}
            >
              <span
                className="font-sample"
                style={{ fontFamily: `'${font.id}', sans-serif` }}
              >
                {font.sample}
              </span>
              <div className="font-meta">
                <div className="font-name">{font.label}</div>
                <div className="font-category">{font.category}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Type scale preview */}
      <div>
        <div className="field-label">Type scale preview</div>
        <div style={{
          background: 'var(--bg-2)',
          borderRadius: 10,
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>
          {TYPE_SCALE.map(({ name, size, weight }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 12,
                paddingBlock: 5,
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: 10, color: 'var(--text-3)', width: 48, flexShrink: 0, fontWeight: 500 }}>
                {name}
              </span>
              <span
                style={{
                  fontSize: Math.min(size * 0.6, 28),
                  fontWeight: weight,
                  color: 'var(--text-1)',
                  fontFamily: `'${currentFont}', sans-serif`,
                  lineHeight: 1.3,
                }}
              >
                {name === 'h1' || name === 'h2' ? 'Hello World' : 'The quick brown fox'}
              </span>
              <span style={{ fontSize: 10, color: 'var(--text-3)', marginLeft: 'auto' }}>
                {size}px / {weight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '10px 14px',
        borderRadius: 8,
        background: 'var(--bg-3)',
        border: '1px solid var(--border)',
        fontSize: 12,
        color: 'var(--text-3)',
        lineHeight: 1.6,
      }}>
        All font weights (300–800) are loaded via Google Fonts. The generated code uses platform-specific font family names for React Native.
      </div>
    </div>
  );
}
