
import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { QuizQuestion } from '@/data/quizData';

interface ChoiceQuestionProps {
  question: QuizQuestion;
  selectedOptions: string[];
  onChange: (optionId: string) => void;
  maxSelections?: number;
}

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({ 
  question, 
  selectedOptions, 
  onChange,
  maxSelections = 3 
}) => {
  const isOptionDisabled = (optionId: string) => {
    return selectedOptions.length >= maxSelections && !selectedOptions.includes(optionId);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">{question.question}</h2>
      <p className="text-center text-gray-500">Select up to {maxSelections} options</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          const disabled = isOptionDisabled(option.id);
          
          return (
            <div key={option.id} className="flex items-start space-x-2">
              <Checkbox
                id={option.id}
                checked={isSelected}
                onCheckedChange={() => {
                  if (!disabled || isSelected) {
                    onChange(option.id);
                  }
                }}
                disabled={disabled && !isSelected}
                className="mt-1"
              />
              <Label
                htmlFor={option.id}
                className="flex-1 cursor-pointer"
              >
                <Card className={`p-4 transition-all duration-200 ${
                  isSelected
                    ? 'border-primary ring-2 ring-primary/30'
                    : disabled
                    ? 'opacity-50'
                    : 'hover:border-gray-300'
                }`}>
                  <div className="font-medium">{option.text}</div>
                </Card>
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChoiceQuestion;
