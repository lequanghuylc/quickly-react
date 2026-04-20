import React, { useState, useCallback } from 'react';
import WizardPanel from './wizard/WizardPanel';
import PreviewPanel from './preview/PreviewPanel';
import { DEFAULT_PREFERENCES } from './presets';
import { generateAndDownload } from './codegen/generator';

const STEP_LABELS = ['Industry', 'Colors', 'Typography', 'Shape', 'Spacing'];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  const updatePreferences = useCallback((updates) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  }, []);

  const handleDownload = useCallback(() => {
    generateAndDownload(preferences);
  }, [preferences]);

  return (
    <div className="studio-app">
      <header className="studio-header">
        <div className="studio-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Design System Studio</span>
          <span className="logo-badge">quickly-react</span>
        </div>

        <div className="header-steps">
          {STEP_LABELS.map((label, i) => (
            <button
              key={i}
              className={`step-pill${i === currentStep ? ' active' : ''}${i < currentStep ? ' done' : ''}`}
              onClick={() => setCurrentStep(i)}
            >
              {i < currentStep ? `✓ ${label}` : `${i + 1}. ${label}`}
            </button>
          ))}
        </div>

        <button className="download-btn" onClick={handleDownload}>
          ↓ Download Code
        </button>
      </header>

      <div className="studio-body">
        <WizardPanel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          preferences={preferences}
          updatePreferences={updatePreferences}
          onDownload={handleDownload}
          totalSteps={STEP_LABELS.length}
        />
        <PreviewPanel preferences={preferences} />
      </div>
    </div>
  );
}
