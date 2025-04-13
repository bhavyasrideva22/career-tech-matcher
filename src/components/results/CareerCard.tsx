
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CareerType } from '@/data/quizData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CareerCardProps {
  career: CareerType;
  matchPercentage: number;
  isPrimary?: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, matchPercentage, isPrimary = false }) => {
  const [expanded, setExpanded] = React.useState(isPrimary);
  
  const getBgClass = () => {
    switch (career.id) {
      case 'ai':
        return 'bg-ai/10 border-ai/20';
      case 'servicenow':
        return 'bg-servicenow/10 border-servicenow/20';
      case 'salesforce':
        return 'bg-salesforce/10 border-salesforce/20';
      default:
        return 'bg-white';
    }
  };

  const getGradientClass = () => {
    switch (career.id) {
      case 'ai':
        return 'ai-gradient';
      case 'servicenow':
        return 'servicenow-gradient';
      case 'salesforce':
        return 'salesforce-gradient';
      default:
        return '';
    }
  };

  return (
    <Card className={`transition-all ${getBgClass()} shadow-sm ${isPrimary ? 'scale-105 shadow-md' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{career.title}</CardTitle>
            <CardDescription>"{career.archetype}"</CardDescription>
          </div>
          <div className={`rounded-full w-16 h-16 flex items-center justify-center text-white font-bold ${getGradientClass()}`}>
            {Math.round(matchPercentage)}%
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{career.description}</p>
        
        {expanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            <div>
              <h4 className="font-semibold mb-2">Key Traits</h4>
              <ul className="list-disc list-inside space-y-1">
                {career.traits.map((trait, index) => (
                  <li key={index} className="text-sm">{trait}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Day in the Life</h4>
              <p className="text-sm">{career.dayInLife}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Salary Range</h4>
              <p className="text-sm">{career.salaryRange}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Recommended Certifications</h4>
              <ul className="list-disc list-inside space-y-1">
                {career.certifications.map((cert, index) => (
                  <li key={index} className="text-sm">{cert}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Suggested Next Steps</h4>
              <ul className="list-disc list-inside space-y-1">
                {career.nextSteps.map((step, index) => (
                  <li key={index} className="text-sm">{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2"
        >
          {expanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
