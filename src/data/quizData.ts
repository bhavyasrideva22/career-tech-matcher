
export type QuestionType = 'scenario' | 'slider' | 'choice';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: {
    id: string;
    text: string;
    image?: string;
    aiScore?: number;
    servicenowScore?: number;
    salesforceScore?: number;
  }[];
  sliderMin?: string;
  sliderMax?: string;
  aiWeight?: number;
  servicenowWeight?: number;
  salesforceWeight?: number;
}

export interface QuizResult {
  ai: number;
  servicenow: number;
  salesforce: number;
}

export interface CareerType {
  id: string;
  title: string;
  description: string;
  archetype: string;
  traits: string[];
  dayInLife: string;
  salaryRange: string;
  certifications: string[];
  nextSteps: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'scenario',
    question: 'Which work environment energizes you the most?',
    options: [
      {
        id: 'q1a',
        text: 'A research lab where I can experiment with cutting-edge AI models',
        image: 'ai-workspace.jpg',
        aiScore: 10,
        servicenowScore: 3,
        salesforceScore: 2
      },
      {
        id: 'q1b',
        text: 'A collaborative workspace where I build workflow solutions for companies',
        image: 'servicenow-workspace.jpg',
        aiScore: 3,
        servicenowScore: 10,
        salesforceScore: 6
      },
      {
        id: 'q1c',
        text: 'A client-facing environment where I customize CRM solutions',
        image: 'salesforce-workspace.jpg',
        aiScore: 2,
        servicenowScore: 6,
        salesforceScore: 10
      }
    ]
  },
  {
    id: 'q2',
    type: 'scenario',
    question: 'Would you rather spend your day:',
    options: [
      {
        id: 'q2a',
        text: 'Debugging an AI model or optimizing machine learning algorithms',
        aiScore: 10,
        servicenowScore: 4,
        salesforceScore: 2
      },
      {
        id: 'q2b',
        text: 'Designing and implementing business workflow automation',
        aiScore: 5,
        servicenowScore: 10,
        salesforceScore: 6
      },
      {
        id: 'q2c',
        text: 'Customizing CRM dashboards and client relationship tools',
        aiScore: 3,
        servicenowScore: 5,
        salesforceScore: 10
      }
    ]
  },
  {
    id: 'q3',
    type: 'slider',
    question: 'How do you balance innovation versus stability in your work?',
    sliderMin: 'Cutting-edge innovation',
    sliderMax: 'Proven stability',
    aiWeight: 10,
    servicenowWeight: 6,
    salesforceWeight: 4
  },
  {
    id: 'q4',
    type: 'slider',
    question: 'Do you prefer working independently or collaboratively?',
    sliderMin: 'Solo deep work',
    sliderMax: 'Team collaboration',
    aiWeight: 7,
    servicenowWeight: 5,
    salesforceWeight: 9
  },
  {
    id: 'q5',
    type: 'scenario',
    question: 'Which project sounds most exciting to you?',
    options: [
      {
        id: 'q5a',
        text: 'Building and training a machine learning model to solve a specific problem',
        aiScore: 10,
        servicenowScore: 3,
        salesforceScore: 2
      },
      {
        id: 'q5b',
        text: 'Automating business processes and creating efficient workflows',
        aiScore: 4,
        servicenowScore: 10,
        salesforceScore: 5
      },
      {
        id: 'q5c',
        text: 'Creating custom applications that help businesses understand their customers better',
        aiScore: 4,
        servicenowScore: 5,
        salesforceScore: 10
      }
    ]
  },
  {
    id: 'q6',
    type: 'choice',
    question: "Choose 3 skills you'd most like to develop:",
    options: [
      {
        id: 'q6a',
        text: 'Data modeling & algorithm development',
        aiScore: 10,
        servicenowScore: 5,
        salesforceScore: 3
      },
      {
        id: 'q6b',
        text: 'Machine learning & neural networks',
        aiScore: 10,
        servicenowScore: 2,
        salesforceScore: 1
      },
      {
        id: 'q6c',
        text: 'Business process automation',
        aiScore: 4,
        servicenowScore: 10,
        salesforceScore: 6
      },
      {
        id: 'q6d',
        text: 'IT service management',
        aiScore: 3,
        servicenowScore: 10,
        salesforceScore: 4
      },
      {
        id: 'q6e',
        text: 'CRM configuration & customization',
        aiScore: 2,
        servicenowScore: 5,
        salesforceScore: 10
      },
      {
        id: 'q6f',
        text: 'Client relationship building',
        aiScore: 1,
        servicenowScore: 4,
        salesforceScore: 10
      }
    ]
  }
];

export const careerTypes: CareerType[] = [
  {
    id: 'ai',
    title: 'AI Developer',
    description: 'AI Developers create and implement machine learning models and algorithms to solve complex problems. They work on cutting-edge technology to build intelligent systems that can learn from data and make decisions.',
    archetype: 'The AI Innovator',
    traits: [
      'Analytical thinking',
      'Love for data and algorithms',
      'Enjoys independent deep work',
      'Problem-solving oriented'
    ],
    dayInLife: 'Analyzing datasets, building and training machine learning models, optimizing algorithms, and collaborating with data scientists to implement AI solutions.',
    salaryRange: '$90,000 - $140,000',
    certifications: [
      'TensorFlow Developer Certificate',
      'AWS Machine Learning Specialty',
      'Microsoft Azure AI Engineer'
    ],
    nextSteps: [
      'Complete an AI fundamentals course',
      'Build a portfolio of machine learning projects',
      'Join AI developer communities'
    ]
  },
  {
    id: 'servicenow',
    title: 'ServiceNow Developer',
    description: 'ServiceNow Developers design and implement workflow automation solutions that streamline business processes. They build custom applications and integrations within the ServiceNow platform.',
    archetype: 'The ServiceNow Problem-Solver',
    traits: [
      'Structured thinking',
      'Process optimization skills',
      'Balance of technical and business focus',
      'Enjoys solving organizational challenges'
    ],
    dayInLife: 'Configuring workflows, creating custom applications, integrating systems, and collaborating with stakeholders to automate business processes.',
    salaryRange: '$85,000 - $130,000',
    certifications: [
      'ServiceNow Certified System Administrator',
      'ServiceNow Certified Application Developer',
      'ServiceNow Certified Implementation Specialist'
    ],
    nextSteps: [
      'Take ServiceNow fundamentals training',
      'Practice on ServiceNow developer instance',
      'Join ServiceNow community forums'
    ]
  },
  {
    id: 'salesforce',
    title: 'Salesforce Developer',
    description: 'Salesforce Developers create customized CRM solutions that help businesses manage their customer relationships. They design and implement applications within the Salesforce ecosystem.',
    archetype: 'The Salesforce Connector',
    traits: [
      'Client-focused mindset',
      'Relationship-building skills',
      'Balance of technical and business acumen',
      'Collaborative work style'
    ],
    dayInLife: 'Customizing Salesforce instances, building custom applications, integrating with other systems, and working with business stakeholders to enhance customer relationships.',
    salaryRange: '$80,000 - $135,000',
    certifications: [
      'Salesforce Platform Developer I',
      'Salesforce Platform App Builder',
      'Salesforce Administrator'
    ],
    nextSteps: [
      'Complete Salesforce Trailhead modules',
      'Work on practice projects in a developer org',
      'Join Salesforce developer community'
    ]
  }
];
