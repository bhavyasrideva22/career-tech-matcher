
import React from 'react';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { QuizQuestion } from '@/data/quizData';

interface ScenarioQuestionProps {
  question: QuizQuestion;
  selectedOption: string;
  onChange: (optionId: string) => void;
}

const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({ question, selectedOption, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">{question.question}</h2>
      <RadioGroup value={selectedOption} onValueChange={onChange} className="space-y-4">
        {question.options?.map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <RadioGroupItem
              value={option.id}
              id={option.id}
              className="mt-1"
            />
            <Label
              htmlFor={option.id}
              className="flex-1 cursor-pointer"
            >
              <Card className={`p-4 transition-all duration-200 ${
                selectedOption === option.id
                  ? 'border-primary ring-2 ring-primary/30'
                  : 'hover:border-gray-300'
              }`}>
                <div className="font-medium">{option.text}</div>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ScenarioQuestion;
