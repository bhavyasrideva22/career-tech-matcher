
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ResultsChart from '@/components/results/ResultsChart';
import CareerCard from '@/components/results/CareerCard';
import ShareResults from '@/components/results/ShareResults';
import { Button } from '@/components/ui/button';
import { QuizResult, careerTypes } from '@/data/quizData';
import { RefreshCw } from 'lucide-react';

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results as QuizResult;
  
  if (!results) {
    // Redirect to quiz if no results available
    navigate('/quiz');
    return null;
  }
  
  // Get sorted careers by match percentage
  const sortedCareers = [
    { id: 'ai', score: results.ai },
    { id: 'servicenow', score: results.servicenow },
    { id: 'salesforce', score: results.salesforce },
  ].sort((a, b) => b.score - a.score);
  
  const primaryCareer = sortedCareers[0].id;
  const primaryScore = sortedCareers[0].score;
  
  // Find detailed data for each career
  const careerDetails = sortedCareers.map(career => ({
    ...careerTypes.find(type => type.id === career.id)!,
    score: career.score
  }));
  
  const handleRetakeQuiz = () => {
    navigate('/quiz');
  };
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Your Tech Career Match Results</h1>
        <p className="text-center text-gray-600 mb-8">
          Based on your responses, here's how you match with different tech career paths.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Your Career Match</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">AI Developer</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-ai h-2.5 rounded-full" 
                        style={{ width: `${Math.round(results.ai)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{Math.round(results.ai)}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">ServiceNow</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-servicenow h-2.5 rounded-full" 
                        style={{ width: `${Math.round(results.servicenow)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{Math.round(results.servicenow)}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salesforce</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-salesforce h-2.5 rounded-full" 
                        style={{ width: `${Math.round(results.salesforce)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{Math.round(results.salesforce)}%</span>
                  </div>
                </div>
              </div>
              
              <ShareResults 
                primaryCareer={primaryCareer} 
                matchPercentage={primaryScore} 
              />
              
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={handleRetakeQuiz} 
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Retake Quiz
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h3 className="text-xl font-semibold mb-4">Your Skills Profile</h3>
              <ResultsChart 
                aiScore={results.ai} 
                servicenowScore={results.servicenow} 
                salesforceScore={results.salesforce} 
              />
            </div>
            
            <p className="text-center text-gray-600 mb-6">
              Based on your unique profile, here's what each tech career path offers you:
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {careerDetails.map((career, index) => (
            <CareerCard 
              key={career.id} 
              career={career} 
              matchPercentage={career.score} 
              isPrimary={index === 0} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to start your journey in your matched career path?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="/resources">Explore Learning Resources</a>
            </Button>
            <Button variant="outline" onClick={handleRetakeQuiz}>
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
