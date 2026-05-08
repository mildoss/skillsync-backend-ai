export interface CandidateVacancyPayload {
  vacancyTitle: string;
  vacancyDescription: string;
  candidateAbout?: string;
  candidateSkills: string[];
  candidateExperience?: string;
}

export interface VacancyBody {
  jobTitle: string;
  keywords: string[];
}