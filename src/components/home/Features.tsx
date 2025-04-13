
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonStanding, LightbulbIcon, LineChart, Share2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <PersonStanding className="h-10 w-10 text-ai" />,
      title: "Personalized Assessment",
      description: "Answer interactive questions about your work style, interests, and values to receive a customized career match."
    },
    {
      icon: <LineChart className="h-10 w-10 text-servicenow" />,
      title: "Detailed Results",
      description: "Visualize your career fit with detailed charts and see exactly why each tech path matches your profile."
    },
    {
      icon: <LightbulbIcon className="h-10 w-10 text-salesforce" />,
      title: "Actionable Insights",
      description: "Get practical next steps and resources to help you move forward in your chosen tech career path."
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Shareable Results",
      description: "Share your career match results with friends, mentors, and potential employers with a single click."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How TechMatcher Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our scientific assessment helps you find the perfect tech career based on your personality, interests, and work style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
