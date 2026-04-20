import React from 'react';
import Step1Industry from './Step1Industry';
import Step2Colors from './Step2Colors';
import Step3Typography from './Step3Typography';
import Step4Shape from './Step4Shape';
import Step5Spacing from './Step5Spacing';

const STEPS = [Step1Industry, Step2Colors, Step3Typography, Step4Shape, Step5Spacing];
const STEP_LABELS = ['Industry', 'Colors', 'Typography', 'Shape & Shadows', 'Spacing'];

export default function WizardPanel({
  currentStep,
  setCurrentStep,
  preferences,
  updatePreferences,
  onDownload,
  totalSteps,
}) {
  const StepComponent = STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast  = currentStep === totalSteps - 1;

  return (
    <aside className="wizard-panel">
      <div className="wizard-content">
        <div className="step-header">
          <span className="step-number">Step {currentStep + 1} of {totalSteps}</span>
          <h2 className="step-title">{STEP_LABELS[currentStep]}</h2>
        </div>

        <div className="step-body">
          <StepComponent
            preferences={preferences}
            updatePreferences={updatePreferences}
          />
        </div>
      </div>

      <div className="wizard-footer">
        {!isFirst && (
          <button className="btn-wizard btn-back" onClick={() => setCurrentStep(s => s - 1)}>
            ← Back
          </button>
        )}
        {!isLast ? (
          <button className="btn-wizard btn-next" onClick={() => setCurrentStep(s => s + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn-wizard btn-download" onClick={onDownload}>
            ↓ Download Design System
          </button>
        )}
      </div>
    </aside>
  );
}
