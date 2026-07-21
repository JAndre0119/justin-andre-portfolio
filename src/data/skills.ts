export interface Certification {
  name: string
  issuer: string
}

export const technicalSkills: string[] = [
  'Python',
  'React',
  'TypeScript',
  'Flask',
  'Java',
  'C++',
  'AWS',
  'Docker',
  'Kubernetes',
  'SQL',
]

export const certifications: Certification[] = [
  {
    name: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
  },
  {
    name: 'LFS158 Kubernetes Certification',
    issuer: 'The Linux Foundation',
  },
]
