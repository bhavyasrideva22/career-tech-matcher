
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
