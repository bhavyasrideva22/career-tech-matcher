
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1">
        <span>Start</span>
        <span>Results</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-ai via-servicenow to-salesforce progress-path"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="mt-1 text-center text-sm text-gray-600">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
