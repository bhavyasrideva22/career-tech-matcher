
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ScenarioQuestion from '@/components/quiz/ScenarioQuestion';
import SliderQuestion from '@/components/quiz/SliderQuestion';
import ChoiceQuestion from '@/components/quiz/ChoiceQuestion';
import ProgressBar from '@/components/quiz/ProgressBar';
import { Button } from '@/components/ui/button';
import { quizQuestions, QuizQuestion, QuizResult } from '@/data/quizData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  
  const handleNext = () => {
    if (isLastQuestion) {
      const results = calculateResults();
      navigate('/results', { state: { results } });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleScenarioChange = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
  };
  
  const handleSliderChange = (value: number[]) => {
    setAnswers({ ...answers, [currentQuestion.id]: value[0] });
  };
  
  const handleChoiceChange = (optionId: string) => {
    const currentAnswers = answers[currentQuestion.id] || [];
    let updatedAnswers;
    
    if (currentAnswers.includes(optionId)) {
      updatedAnswers = currentAnswers.filter((id: string) => id !== optionId);
    } else {
      updatedAnswers = [...currentAnswers, optionId];
    }
    
    setAnswers({ ...answers, [currentQuestion.id]: updatedAnswers });
  };
  
  const calculateResults = (): QuizResult => {
    let aiScore = 0;
    let servicenowScore = 0;
    let salesforceScore = 0;
    let totalPoints = 0;
    
    quizQuestions.forEach((question) => {
      const answer = answers[question.id];
      
      if (question.type === 'scenario' && answer) {
        const selectedOption = question.options?.find(opt => opt.id === answer);
        if (selectedOption) {
          aiScore += selectedOption.aiScore || 0;
          servicenowScore += selectedOption.servicenowScore || 0;
          salesforceScore += selectedOption.salesforceScore || 0;
          totalPoints += Math.max(
            selectedOption.aiScore || 0,
            selectedOption.servicenowScore || 0,
            selectedOption.salesforceScore || 0
          );
        }
      } else if (question.type === 'slider' && answer !== undefined) {
        const value = answer / 100;
        const inverseValue = 1 - value;
        
        aiScore += (question.aiWeight || 0) * (question.id === 'q3' ? inverseValue : value);
        servicenowScore += (question.servicenowWeight || 0) * 0.5;
        salesforceScore += (question.salesforceWeight || 0) * (question.id === 'q4' ? value : inverseValue);
        
        totalPoints += Math.max(
          question.aiWeight || 0,
          question.servicenowWeight || 0,
          question.salesforceWeight || 0
        );
      } else if (question.type === 'choice' && answer && Array.isArray(answer)) {
        answer.forEach((optionId) => {
          const selectedOption = question.options?.find(opt => opt.id === optionId);
          if (selectedOption) {
            aiScore += selectedOption.aiScore || 0;
            servicenowScore += selectedOption.servicenowScore || 0;
            salesforceScore += selectedOption.salesforceScore || 0;
            totalPoints += Math.max(
              selectedOption.aiScore || 0,
              selectedOption.servicenowScore || 0,
              selectedOption.salesforceScore || 0
            );
          }
        });
      }
    });
    
    // Convert to percentages
    return {
      ai: (aiScore / totalPoints) * 100,
      servicenow: (servicenowScore / totalPoints) * 100,
      salesforce: (salesforceScore / totalPoints) * 100
    };
  };
  
  const isNextDisabled = () => {
    const answer = answers[currentQuestion.id];
    
    if (!answer) return true;
    
    if (currentQuestion.type === 'choice') {
      return !Array.isArray(answer) || answer.length === 0;
    }
    
    return false;
  };
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'scenario':
        return (
          <ScenarioQuestion
            question={currentQuestion}
            selectedOption={answers[currentQuestion.id] || ''}
            onChange={handleScenarioChange}
          />
        );
      case 'slider':
        return (
          <SliderQuestion
            question={currentQuestion}
            value={answers[currentQuestion.id] !== undefined ? answers[currentQuestion.id] : 50}
            onChange={handleSliderChange}
          />
        );
      case 'choice':
        return (
          <ChoiceQuestion
            question={currentQuestion}
            selectedOptions={answers[currentQuestion.id] || []}
            onChange={handleChoiceChange}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <Layout fullHeight>
      <div className="max-w-3xl mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="mb-8">
          <ProgressBar
            currentStep={currentQuestionIndex + 1}
            totalSteps={quizQuestions.length}
          />
        </div>
        
        <div className="flex-grow flex flex-col">
          <div className="bg-white rounded-lg p-6 shadow-sm border flex-grow">
            {renderQuestion()}
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              variant="outline"
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className="flex items-center gap-1"
            >
              {isLastQuestion ? 'See Results' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
