// queries/getTimeline.ts
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Hardcoded Avadhoot Pawaskar timeline
  return [
    {
      timelineType: 'work',
      title: 'Full Stack Web Developer',
      name: 'CS TENNIS ACADEMY',
      techStack: 'Django, Python, React, MySQL',
      summaryPoints: [
        'Built and maintained a coaching management platform for tennis and padel programs.',
        'Implemented payment tracking, schedule management, and event display.'
      ],
      dateRange: 'Dec 2023 - Present',
    },
    {
      timelineType: 'work',
      title: 'Technical Team Member',
      name: 'CSI DBIT',
      techStack: 'React, Node.js, DevOps',
      summaryPoints: [
        'Contributed to the development and deployment of society event platforms.',
        'Managed technical infrastructure.'
      ],
      dateRange: 'Oct 2023 - Oct 2024',
    },
    {
      timelineType: 'work',
      title: 'Cross-Platform App Developer',
      name: 'CS Tournament App',
      techStack: 'Flutter, Django, MySQL',
      summaryPoints: [
        'Developed a mobile app for managing sports tournaments, player rankings, and real-time court bookings.'
      ],
      dateRange: 'Feb 2025 - Present',
    },
    {
      timelineType: 'education',
      title: 'Bachelor of Engineering in Information Technology (Honors in Cybersecurity)',
      name: 'DON BOSCO INSTITUTE OF TECHNOLOGY',
      techStack: '',
      summaryPoints: [
        'Graduated with honors, specialized in cybersecurity.'
      ],
      dateRange: 'Nov 2022 - May 2026',
    },
  ];
}
