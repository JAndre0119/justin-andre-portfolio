const GITHUB_USERNAME = 'jandre0119'

export interface Project {
  slug: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'ai-study-buddy',
    title: 'AI Study Buddy',
    description:
      'Capstone project featuring a retrieval-augmented generation (RAG) pipeline built with the Anthropic Claude API, AWS S3 for document storage, and automated deployments via GitHub Actions CI/CD.',
    techStack: ['React', 'TypeScript', 'Claude API', 'AWS S3', 'GitHub Actions'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/ai-study-buddy`,
    imageUrl: '/images/projects/ai-study-buddy.png',
  },
  {
    slug: 'ledgerly',
    title: 'Ledgerly',
    description:
      'A full-stack personal finance tracker with a Flask REST API for managing transactions, budgets, and spending insights.',
    techStack: ['React', 'TypeScript', 'Flask', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com/JAndre0119/finance-tracker-Ledgerly-',
    imageUrl: '/images/projects/ledgerly.png',
  },
  {
    slug: 'bitecircle',
    title: 'BiteCircle',
    description:
      'A social food-sharing platform where users can post, discover, and save recipes and meals shared by their community.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/CSUF-CPSC362-2025Su/project-bitecircle',
    imageUrl: '/images/projects/bitecircle.png',
  },
  {
    slug: 'godzilla-film-vault',
    title: 'Godzilla Film Vault',
    description:
      'A catalog site for the Godzilla film franchise demonstrating array and object manipulation with filtering, searching, and sorting.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/godzilla-film-vault`,
    liveUrl: 'https://jandre0119.github.io/godzilla-film-vault/',
    imageUrl: '/images/projects/godzilla-film-vault.png',
  },
]
