export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    company: 'FinTech Platform Co.',
    title: 'Director of Operations',
    date: '2021 - Present',
    description: [
      'Led operational strategy for high-growth FinTech platform serving 500+ enterprise clients',
      'Built and managed cross-functional operations team of 15+ professionals',
      'Improved client delivery efficiency by 40% through process optimization and automation',
      'Established scalable operational frameworks supporting 3x revenue growth',
    ],
  },
  {
    company: 'Digital Payments Inc.',
    title: 'Senior Operations Manager',
    date: '2018 - 2021',
    description: [
      'Managed day-to-day operations for payment processing platform',
      'Collaborated with product and engineering teams to improve platform reliability',
      'Implemented client success programs resulting in 95% retention rate',
      'Led training and development initiatives for operations team',
    ],
  },
  {
    company: 'Financial Services Group',
    title: 'Operations Specialist',
    date: '2015 - 2018',
    description: [
      'Supported operational workflows for financial services platform',
      'Developed process documentation and training materials',
      'Coordinated with clients to resolve issues and optimize workflows',
      'Contributed to platform improvements based on operational insights',
    ],
  },
];
