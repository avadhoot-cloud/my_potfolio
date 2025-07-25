// queries/getContactMe.ts
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  // Hardcoded Avadhoot Pawaskar data
  return {
    profilePicture: { url: require('../images/avadhoot.webp') }, // You may need to add your image to images folder
    name: 'Avadhoot Pawaskar',
    title: 'Full Stack Web Developer | Cloud & DevOps Enthusiast',
    summary: 'Engineer with a passion for building scalable web and cloud solutions. Experienced in React, Node.js, Django, Flutter, AWS, GCP, and DevOps. Open to new opportunities and collaborations.',
    companyUniversity: 'DON BOSCO INSTITUTE OF TECHNOLOGY, Mumbai',
    linkedinLink: 'https://www.linkedin.com/in/avadhoot-pawaskar-223809279',
    email: 'avadhoot.pawaskar23@gmail.com',
    phoneNumber: '9004722004',
  };
}
