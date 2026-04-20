import React from 'react';
import { RADIUS_OPTIONS, SHADOW_OPTIONS } from '../presets';

const SHADOW_CSS = {
  none:   'none',
  subtle: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
  medium: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
  strong: '0 10px 25px -5px rgba(0,0,0,0.18), 0 4px 6px -2px rgba(0,0,0,0.08)',
};

export default function Step4Shape({ preferences, updatePreferences }) {
  const { borders, shadows } = preferences;

  const handleRadius = (opt) => {
    updatePreferences({ borders: { ...borders, radiusId: opt.id, radius: opt.value } });
  };

  const handleShadow = (opt) => {
    updatePreferences({ shadows: { style: opt.id } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Border radius */}
      <div>
        <div className="field-label">Border radius</div>
        <div className="option-grid">
          {RADIUS_OPTIONS.map(opt => (
            <button
              key={opt.id}
              className={`option-row${borders.radiusId === opt.id ? ' selected' : ''}`}
              onClick={() => handleRadius(opt)}
            >
              <div className="option-visual">
                <div style={{
                  width: 36,
                  height: 24,
                  backgroundColor: preferences.colors.primary,
                  borderRadius: opt.value,
                  opacity: 0.85,
                }} />
              </div>
              <div className="option-text">
                <div className="option-label">{opt.label}</div>
                <div className="option-desc">{opt.description} — {opt.value}px</div>
              </div>
              {borders.radiusId === opt.id && (
                <span style={{ color: 'var(--accent-text)', fontSize: 14 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Shadow */}
      <div>
        <div className="field-label">Elevation / Shadow</div>
        <div className="option-grid">
          {SHADOW_OPTIONS.map(opt => (
            <button
              key={opt.id}
              className={`option-row${shadows.style === opt.id ? ' selected' : ''}`}
              onClick={() => handleShadow(opt)}
            >
              <div className="option-visual">
                <div style={{
                  width: 36,
                  height: 24,
                  backgroundColor: '#ffffff',
                  borderRadius: 6,
                  boxShadow: SHADOW_CSS[opt.id],
                  border: '1px solid #e5e7eb',
                }} />
              </div>
              <div className="option-text">
                <div className="option-label">{opt.label}</div>
                <div className="option-desc">{opt.description}</div>
              </div>
              {shadows.style === opt.id && (
                <span style={{ color: 'var(--accent-text)', fontSize: 14 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
