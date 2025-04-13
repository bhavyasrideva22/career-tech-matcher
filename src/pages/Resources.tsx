
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = {
    ai: [
      {
        title: "AI Fundamentals Course",
        description: "A comprehensive introduction to artificial intelligence and machine learning concepts.",
        link: "#"
      },
      {
        title: "TensorFlow Developer Certificate Preparation",
        description: "Resources to help you prepare for the TensorFlow Developer Certificate exam.",
        link: "#"
      },
      {
        title: "AI Project Portfolio Guide",
        description: "Tips for building an impressive AI project portfolio to showcase to employers.",
        link: "#"
      }
    ],
    servicenow: [
      {
        title: "ServiceNow Fundamentals",
        description: "Learn the basics of the ServiceNow platform and how to navigate its interface.",
        link: "#"
      },
      {
        title: "ServiceNow Admin Bootcamp",
        description: "Intensive training program for aspiring ServiceNow administrators.",
        link: "#"
      },
      {
        title: "ITSM Process Guide",
        description: "Understanding IT Service Management processes in the ServiceNow context.",
        link: "#"
      }
    ],
    salesforce: [
      {
        title: "Salesforce Trailhead",
        description: "Free online learning platform for Salesforce skills with guided learning paths.",
        link: "#"
      },
      {
        title: "Salesforce Admin Certification Guide",
        description: "Step-by-step preparation for the Salesforce Administrator certification.",
        link: "#"
      },
      {
        title: "Apex Coding Fundamentals",
        description: "Introduction to Apex programming for Salesforce developers.",
        link: "#"
      }
    ]
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Career Resources</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our curated resources to help you get started on your tech career journey.
          Whether you're interested in AI, ServiceNow, or Salesforce, we've got you covered.
        </p>
        
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full ai-gradient flex items-center justify-center text-white font-bold">
                AI
              </div>
              <h2 className="text-2xl font-bold">AI Development Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.ai.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{resource.description}</CardDescription>
                    <a href={resource.link} className="text-ai flex items-center gap-1 text-sm hover:underline">
                      Learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full servicenow-gradient flex items-center justify-center text-white font-bold">
                SN
              </div>
              <h2 className="text-2xl font-bold">ServiceNow Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.servicenow.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{resource.description}</CardDescription>
                    <a href={resource.link} className="text-servicenow flex items-center gap-1 text-sm hover:underline">
                      Learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full salesforce-gradient flex items-center justify-center text-white font-bold">
                SF
              </div>
              <h2 className="text-2xl font-bold">Salesforce Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.salesforce.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{resource.description}</CardDescription>
                    <a href={resource.link} className="text-salesforce flex items-center gap-1 text-sm hover:underline">
                      Learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg">Ready to find out which career path is right for you?</p>
          <Link to="/quiz" className="text-primary font-medium hover:underline">
            Take the Career Match Quiz
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
