
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The quiz helped me realize I was better suited for AI development than I thought. Now I'm pursuing my dream career!",
      author: "Alex K.",
      role: "Computer Science Student"
    },
    {
      quote: "I was torn between different tech paths. TechMatcher showed me that ServiceNow was the perfect fit for my skills and interests.",
      author: "Jamie L.",
      role: "Information Systems Major"
    },
    {
      quote: "The personalized insights were so accurate! I'm now exploring Salesforce development and couldn't be happier with my choice.",
      author: "Taylor R.",
      role: "Recent Engineering Graduate"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join thousands of engineering students who found their perfect tech career match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl text-gray-400">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
