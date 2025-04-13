
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Share } from 'lucide-react';

interface ShareResultsProps {
  primaryCareer: string;
  matchPercentage: number;
}

const ShareResults: React.FC<ShareResultsProps> = ({ primaryCareer, matchPercentage }) => {
  const { toast } = useToast();
  
  const getShareText = () => {
    const archetypeMap: Record<string, string> = {
      'ai': 'an AI Innovator',
      'servicenow': 'a ServiceNow Problem-Solver',
      'salesforce': 'a Salesforce Connector'
    };
    
    const archetype = archetypeMap[primaryCareer] || 'a Tech Professional';
    return `I'm ${Math.round(matchPercentage)}% ${archetype}! 🚀 Find your tech match at TechMatcher.`;
  };
  
  const handleShare = async () => {
    const text = getShareText();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My TechMatcher Results',
          text: text,
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
        copyToClipboard(text);
      }
    } else {
      copyToClipboard(text);
    }
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Share your results with friends and colleagues.",
      });
    });
  };
  
  return (
    <Card className="p-4 text-center">
      <h3 className="text-lg font-semibold mb-3">Share Your Results</h3>
      <p className="text-sm text-gray-600 mb-4">
        Let others know about your tech career fit!
      </p>
      <div className="flex justify-center">
        <Button onClick={handleShare} className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share Results
        </Button>
      </div>
    </Card>
  );
};

export default ShareResults;
