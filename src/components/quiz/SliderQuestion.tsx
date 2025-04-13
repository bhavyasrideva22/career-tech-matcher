
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { QuizQuestion } from '@/data/quizData';

interface SliderQuestionProps {
  question: QuizQuestion;
  value: number;
  onChange: (value: number[]) => void;
}

const SliderQuestion: React.FC<SliderQuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center">{question.question}</h2>
      <div className="px-4">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>{question.sliderMin}</span>
          <span>{question.sliderMax}</span>
        </div>
        <Slider
          defaultValue={[50]}
          value={[value]}
          onValueChange={onChange}
          max={100}
          step={1}
          className="my-6"
        />
        <div className="h-12 bg-gradient-to-r from-ai to-servicenow to-salesforce opacity-20 rounded-md progress-path"></div>
      </div>
    </div>
  );
};

export default SliderQuestion;
