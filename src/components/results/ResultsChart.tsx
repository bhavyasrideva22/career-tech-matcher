
import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface ResultsChartProps {
  aiScore: number;
  servicenowScore: number;
  salesforceScore: number;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ aiScore, servicenowScore, salesforceScore }) => {
  const data = [
    {
      subject: 'Problem Solving',
      AI: aiScore * 0.9,
      ServiceNow: servicenowScore * 0.7,
      Salesforce: salesforceScore * 0.6,
    },
    {
      subject: 'Technical Skills',
      AI: aiScore * 1,
      ServiceNow: servicenowScore * 0.8,
      Salesforce: salesforceScore * 0.7,
    },
    {
      subject: 'Process Optimization',
      AI: aiScore * 0.6,
      ServiceNow: servicenowScore * 1,
      Salesforce: salesforceScore * 0.8,
    },
    {
      subject: 'Client Relationships',
      AI: aiScore * 0.5,
      ServiceNow: servicenowScore * 0.8,
      Salesforce: salesforceScore * 1,
    },
    {
      subject: 'Innovation',
      AI: aiScore * 1,
      ServiceNow: servicenowScore * 0.7,
      Salesforce: salesforceScore * 0.6,
    },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="AI"
            dataKey="AI"
            stroke="#1EAEDB"
            fill="#1EAEDB"
            fillOpacity={0.6}
          />
          <Radar
            name="ServiceNow"
            dataKey="ServiceNow"
            stroke="#9B87F5"
            fill="#9B87F5"
            fillOpacity={0.6}
          />
          <Radar
            name="Salesforce"
            dataKey="Salesforce"
            stroke="#00A1E0"
            fill="#00A1E0"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
