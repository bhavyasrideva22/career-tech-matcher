
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-8 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Tech<span className="text-ai">Matcher</span></h3>
          <p className="text-sm text-gray-600">
            Helping engineering students find their perfect tech career path through personalized assessments.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
            <li><Link to="/quiz" className="text-sm text-gray-600 hover:text-primary">Take the Quiz</Link></li>
            <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">Career Resources</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Contact Us</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-center text-gray-600">
          © {new Date().getFullYear()} TechMatcher. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
