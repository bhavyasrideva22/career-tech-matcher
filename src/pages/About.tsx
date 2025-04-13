
import React from 'react';
import Layout from '@/components/layout/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About TechMatcher</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            TechMatcher is a specialized platform designed to help engineering students and early career professionals
            discover their perfect fit in the world of niche tech careers. Our focus is on three high-demand areas:
            AI Development, ServiceNow, and Salesforce.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            We believe that finding the right career path shouldn't be about guesswork. By combining personality assessments,
            work style preferences, and interest mapping, we help students make informed decisions about their tech career paths.
          </p>
          
          <h2>The Science Behind Our Quiz</h2>
          <p>
            Our assessment is built on research into both personality traits and the specific requirements of each tech career path.
            We analyze factors like:
          </p>
          <ul>
            <li>Problem-solving approaches</li>
            <li>Work environment preferences</li>
            <li>Communication styles</li>
            <li>Technical interests</li>
            <li>Long-term career values</li>
          </ul>
          
          <h2>Career Paths We Focus On</h2>
          
          <h3>AI Development</h3>
          <p>
            Perfect for analytical minds who enjoy working with data, algorithms, and cutting-edge technology.
            AI Developers create and implement machine learning models and build intelligent systems.
          </p>
          
          <h3>ServiceNow</h3>
          <p>
            Ideal for process-oriented individuals who enjoy solving organizational challenges.
            ServiceNow specialists build workflow automation solutions that streamline business operations.
          </p>
          
          <h3>Salesforce</h3>
          <p>
            Great for people-oriented tech enthusiasts who thrive on building relationships.
            Salesforce developers create customized CRM solutions that help businesses better connect with their customers.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            Have questions about TechMatcher or suggestions for improvement?
            Reach out to us at <a href="mailto:info@techmatcher.com">info@techmatcher.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
