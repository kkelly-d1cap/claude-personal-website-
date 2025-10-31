export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'Platform Scaling Initiative',
    description: 'Led a strategic initiative to scale platform capacity by 300%, enabling support for enterprise-level clients while maintaining 99.9% uptime.',
    link: '#',
    tags: ['Operations', 'Strategy', 'Scaling'],
  },
  {
    title: 'Client Onboarding Optimization',
    description: 'Redesigned client onboarding process, reducing time-to-value from 6 weeks to 2 weeks and improving client satisfaction scores by 45%.',
    link: '#',
    tags: ['Process Improvement', 'Client Success'],
  },
  {
    title: 'Operational Excellence Program',
    description: 'Established comprehensive operational framework including KPIs, monitoring systems, and continuous improvement processes across all departments.',
    link: '#',
    tags: ['Operations', 'Team Building', 'Process Design'],
  },
];
