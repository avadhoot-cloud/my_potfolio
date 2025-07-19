// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  // Hardcoded Avadhoot Pawaskar work permit data
  return {
    visaStatus: 'Student Visa (Tier 4)',
    expiryDate: new Date('2026-05-31'),
    summary: 'Currently studying at a UK university with valid work permissions.',
    additionalInfo: 'Eligible for part-time work during studies and full-time work during holidays.'
  };
}
