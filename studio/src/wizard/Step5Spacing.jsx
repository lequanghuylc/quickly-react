import React from 'react';
import { SPACING_OPTIONS } from '../presets';

export default function Step5Spacing({ preferences, updatePreferences }) {
  const { spacing, colors } = preferences;

  const handleSelect = (opt) => {
    updatePreferences({ spacing: { unitId: opt.id, unit: opt.unit } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div className="field-label">Spacing unit</div>
        <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 12 }}>
          The base unit (u) drives all margins and paddings. <code style={{ color: 'var(--accent-text)' }}>m1</code> = 1u, <code style={{ color: 'var(--accent-text)' }}>m2</code> = 2u, etc.
        </p>
        <div className="option-grid">
          {SPACING_OPTIONS.map(opt => (
            <button
              key={opt.id}
              className={`option-row${spacing.unitId === opt.id ? ' selected' : ''}`}
              onClick={() => handleSelect(opt)}
            >
              <div className="option-visual">
                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                  {[1, 2, 3, 4].map(n => (
                    <div
                      key={n}
                      style={{
                        width: n * opt.unit * 0.55,
                        height: n * opt.unit * 0.55,
                        backgroundColor: colors.primary,
                        borderRadius: 2,
                        opacity: 0.7 + n * 0.075,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="option-text">
                <div className="option-label">{opt.label}</div>
                <div className="option-desc">{opt.description}</div>
              </div>
              {spacing.unitId === opt.id && (
                <span style={{ color: 'var(--accent-text)', fontSize: 14 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Spacing scale visualizer */}
      <div>
        <div className="field-label">Scale preview (u = {spacing.unit}px)</div>
        <div className="spacing-rows">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <div key={n} className="spacing-row">
              <span className="spacing-label">m{n}</span>
              <div className="spacing-bar-wrap">
                <div
                  className="spacing-bar"
                  style={{ width: Math.max(3, n * spacing.unit * 3), backgroundColor: colors.primary + '33', borderLeftColor: colors.primary }}
                />
              </div>
              <span className="spacing-value">{n * spacing.unit}px</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '12px 14px',
        borderRadius: 8,
        background: 'var(--bg-3)',
        border: '1px solid var(--border)',
        fontSize: 12,
        color: 'var(--text-3)',
        lineHeight: 1.6,
      }}>
        The unit is passed to <code style={{ color: 'var(--accent-text)' }}>createBase()</code> as <code style={{ color: 'var(--accent-text)' }}>tokens.unit</code> and automatically generates all margin/padding shorthand props.
      </div>
    </div>
  );
}
