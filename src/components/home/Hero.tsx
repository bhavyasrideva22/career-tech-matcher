
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const taglines = [
  'Find Your Tech Tribe',
  'AI, ServiceNow, or Salesforce?',
  'Discover Your Perfect Tech Career',
  'Match Your Skills to the Right Path'
];

const Hero: React.FC = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block">Tech Career</span>
              <span className="relative">
                <span className="inline-block h-12 overflow-hidden">
                  <span 
                    className="block transition-transform duration-500"
                    style={{ transform: `translateY(${currentTaglineIndex * -100}%)` }}
                  >
                    {taglines.map((tagline, index) => (
                      <span 
                        key={index}
                        className={`block h-12 ${index === 0 ? 'text-ai' : index === 1 ? 'text-servicenow' : 'text-salesforce'}`}
                      >
                        {tagline}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Find your perfect tech career match with our personalized assessment. It only takes 5 minutes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/quiz" className="flex items-center gap-2">
                  Start Your 5-Minute Match Quiz
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative z-10">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg ai-gradient animate-float shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                  <p className="font-medium text-lg">AI Development</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-lg servicenow-gradient animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                  <p className="font-medium text-lg">ServiceNow Solutions</p>
                </div>
              </div>
              <div className="absolute bottom-10 right-10 w-1/2 h-1/2 rounded-lg salesforce-gradient animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                  <p className="font-medium">Salesforce Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
