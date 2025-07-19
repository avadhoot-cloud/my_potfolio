// queries/getSkills.ts
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  // Hardcoded Avadhoot Pawaskar skills
  return [
    { name: 'Java', icon: 'FaJava', description: 'Experienced in Java for backend and desktop applications.', category: 'Languages' },
    { name: 'Python', icon: 'FaPython', description: 'Used for scripting, automation, and backend development.', category: 'Languages' },
    { name: 'JavaScript', icon: 'FaReact', description: 'Frontend and backend web development (React, Node.js).', category: 'Languages' },
    { name: 'Flutter', icon: 'FaReact', description: 'Cross-platform mobile app development.', category: 'Languages' },
    { name: 'SQL', icon: 'SiMysql', description: 'Database design and management.', category: 'Languages' },
    { name: 'React.js', icon: 'FaReact', description: 'Modern frontend web development.', category: 'Frontend' },
    { name: 'Next.js', icon: 'FaReact', description: 'React framework for SSR and SSG.', category: 'Frontend' },
    { name: 'MERN Stack', icon: 'FaNodeJs', description: 'MongoDB, Express, React, Node.js full stack.', category: 'Full Stack' },
    { name: 'JavaFX', icon: 'FaJava', description: 'Desktop GUI applications.', category: 'Frontend' },
    { name: 'Electron.js', icon: 'FaReact', description: 'Cross-platform desktop apps.', category: 'Frontend' },
    { name: 'Express', icon: 'FaNodeJs', description: 'Backend web framework for Node.js.', category: 'Backend' },
    { name: 'Django', icon: 'FaPython', description: 'Python web framework.', category: 'Backend' },
    { name: 'Flask', icon: 'FaPython', description: 'Lightweight Python web framework.', category: 'Backend' },
    { name: 'AWS', icon: 'FaAws', description: 'Cloud infrastructure and deployment.', category: 'Cloud/DevOps' },
    { name: 'GCP', icon: 'SiGooglecloud', description: 'Google Cloud Platform services.', category: 'Cloud/DevOps' },
    { name: 'DevOps', icon: 'FaTools', description: 'CI/CD, automation, and cloud-native tools.', category: 'Cloud/DevOps' },
    { name: 'Software Architecture', icon: 'FaTools', description: 'Designing scalable and maintainable systems.', category: 'Other' },
    { name: 'Cybersecurity', icon: 'FaTools', description: 'Security best practices and threat intelligence.', category: 'Other' },
    { name: 'Digital Forensics', icon: 'FaTools', description: 'Investigation and analysis of digital evidence.', category: 'Other' },
    { name: 'Deep Learning', icon: 'FaTools', description: 'Neural networks and AI.', category: 'Other' },
  ];
}
