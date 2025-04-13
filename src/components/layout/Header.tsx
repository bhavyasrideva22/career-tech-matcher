
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex justify-between items-center bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="h-8 w-8 rounded-md ai-gradient flex items-center justify-center text-white font-bold">
              TM
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full servicenow-gradient"></div>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full salesforce-gradient"></div>
          </div>
          <span className="text-xl font-semibold text-neutral-dark">Tech<span className="text-ai">Matcher</span></span>
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 items-center">
        <Button variant="link" asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/resources">Resources</Link>
        </Button>
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link to="/quiz">Start Quiz</Link>
        </Button>
      </nav>
      <Button variant="outline" className="md:hidden border-primary text-primary hover:bg-primary/10">
        <Link to="/quiz">Start Quiz</Link>
      </Button>
    </header>
  );
};

export default Header;
