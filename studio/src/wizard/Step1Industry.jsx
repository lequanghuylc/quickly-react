import React from 'react';
import { INDUSTRY_PRESETS, buildPreferences } from '../presets';

export default function Step1Industry({ preferences, updatePreferences }) {
  const handleSelect = (preset) => {
    const newPrefs = buildPreferences(preset);
    updatePreferences(newPrefs);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
        Pick your industry to auto-fill all design preferences with battle-tested defaults.
        You can fine-tune every setting in the next steps.
      </p>

      <div className="industry-grid">
        {INDUSTRY_PRESETS.map(preset => (
          <button
            key={preset.id}
            className={`industry-card${preferences.industry === preset.id ? ' selected' : ''}`}
            onClick={() => handleSelect(preset)}
          >
            <div className="industry-icon">{preset.icon}</div>
            <div className="industry-name">{preset.label}</div>
            <div className="industry-desc">{preset.description}</div>
          </button>
        ))}
      </div>

      <div style={{
        padding: '12px 14px',
        borderRadius: 8,
        background: 'var(--accent-light)',
        border: '1px solid rgba(99,102,241,0.2)',
        fontSize: 12,
        color: 'var(--accent-text)',
        lineHeight: 1.6,
      }}>
        💡 Each preset follows real-world UI conventions for that industry — colors, type, spacing, and shadow are all considered together.
      </div>
    </div>
  );
}
