// queries/getCertifications.ts
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  // Hardcoded Avadhoot Pawaskar certifications
  return [
    { title: 'Fortinet Network Security Expert Level 3: Certified Associate', issuer: 'Fortinet', issuedDate: 'Feb 2025', link: 'src/images/fortinet.pdf', iconName: 'university' },
    { title: 'Zscaler Fundamentals of Cybersecurity', issuer: 'Zscaler', issuedDate: 'Jul 2024', link: 'src/images/zscalar.pdf', iconName: 'university' },
    { title: 'React and Redux Certification', issuer: 'Coursera', issuedDate: 'Aug 2023', link: '', iconName: 'coursera' },
    { title: 'Google Cloud Certified Associate Cloud Engineer', issuer: 'Google Cloud', issuedDate: '2024', link: '', iconName: 'udemy' },
    { title: 'Frontend Web Design Certification', issuer: 'FreeCodeCamp', issuedDate: '2023', link: '', iconName: 'udemy' },
    { title: 'Palo Alto Networks Cybersecurity Fundamentals', issuer: 'Palo Alto Networks', issuedDate: '2024', link: 'src/images/palo alto.pdf', iconName: 'university' },
  ];
}
