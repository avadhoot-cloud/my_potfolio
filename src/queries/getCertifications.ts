// queries/getCertifications.ts
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  // Hardcoded Avadhoot Pawaskar certifications
  return [
    { title: 'Fortinet Network Security Expert Level 3: Certified Associate', issuer: 'Fortinet', issuedDate: 'Feb 2025', link: '', iconName: 'university' },
    { title: 'Zscaler Fundamentals of Cybersecurity', issuer: 'Zscaler', issuedDate: 'Jul 2024', link: '', iconName: 'university' },
    { title: 'React and Redux Certification', issuer: 'Coursera', issuedDate: 'Aug 2023', link: '', iconName: 'coursera' },
    { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', issuedDate: '2024', link: '', iconName: 'udemy' },
    { title: 'Google Cloud Certified Associate Cloud Engineer', issuer: 'Google Cloud', issuedDate: '2024', link: '', iconName: 'udemy' },
    { title: 'FreeCodeCamp Back End Development and APIs', issuer: 'FreeCodeCamp', issuedDate: '2023', link: '', iconName: 'udemy' },
  ];
}
