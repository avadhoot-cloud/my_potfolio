// queries/getProjects.ts
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  // Hardcoded Avadhoot Pawaskar projects
  return [
    {
      title: 'PlantNav: Smart Plant Recognition & 3D Creator',
      description: 'Developed PlantNav with a team, a smart platform using React and Node.js for plant species recognition from images, 3D visualization, and commerce integration.',
      techUsed: 'React, Node.js, Blender, External APIs',
      image: { url: require('../images/plantnav.webp') },
    },
    {
      title: 'CRM : Customer Relationship Manager',
      description: 'Built a desktop CRM for fitness studios using Java, JavaFX, and MySQL. Features include attendance, scheduling, fitness tracking, and multi-role management.',
      techUsed: 'Java, JavaFX, MySQL',
      image: { url: require('../images/crm.webp') },
    },
    {
      title: 'CS Tennis Academy Platform',
      description: 'Full stack web platform for tennis/padel coaching, event management, and payment tracking. Built with Django, HTML5, and CSS3.',
      techUsed: 'HTML5, CSS3, Django, MySQL',
      image: { url: require('../images/tennis_academy.webp') },
    },
    {
      title: 'CS Tournament App',
      description: 'Cross-platform mobile app for sports tournament management, player rankings, and real-time court booking. Built with Flutter and Django.',
      techUsed: 'Flutter, Django, MySQL',
      image: { url: require('../images/tournament_app.webp') },
    },
    {
      title: 'Portfolio & Blog',
      description: 'Personal portfolio and blog site built with React and Next.js, featuring project showcases, blogs, and contact forms.',
      techUsed: 'React, Next.js',
      image: { url: require('../images/portfolio_blog.webp') },
    },
  ];
}
