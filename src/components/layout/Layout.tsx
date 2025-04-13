
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullHeight }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow pt-20 ${fullHeight ? 'flex flex-col' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
