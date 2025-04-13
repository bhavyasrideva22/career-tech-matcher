
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-ai via-servicenow to-salesforce p-0.5 rounded-lg">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Tech Career?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Take our 5-minute assessment and discover which specialized tech career aligns with your unique skills, interests, and work style.
            </p>
            <Button size="lg" asChild>
              <Link to="/quiz">Start Your Career Match Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
