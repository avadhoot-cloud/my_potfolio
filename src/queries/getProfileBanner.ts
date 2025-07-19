// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Hardcoded Avadhoot Pawaskar data
  return {
    backgroundImage: { url: '/static/media/blue.png' }, // Use a suitable banner image
    headline: 'Avadhoot Pawaskar',
    resumeLink: { url: '/Avadhoot_resume.pdf' },
    linkedinLink: 'https://www.linkedin.com/in/avadhoot-pawaskar-223809279',
    profileSummary: 'Full Stack Web Developer | Cloud & DevOps Enthusiast | React | Node.js | Django | Flutter | AWS | GCP | DevOps | Open to new opportunities and collaborations.'
  };
}
