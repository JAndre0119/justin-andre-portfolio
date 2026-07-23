export type ContactIcon = 'email' | 'github' | 'linkedin'

export interface ContactMethod {
  label: string
  value?: string
  url?: string
  icon: ContactIcon
  /** Split into parts so the address isn't stored as one scrapeable string; joined at render time. */
  emailParts?: [user: string, domain: string]
}

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    icon: 'email',
    emailParts: ['justinandre0119', 'outlook.com'],
  },
  {
    label: 'GitHub',
    value: 'JAndre0119',
    url: 'https://github.com/JAndre0119',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'justin-andre-330586159',
    url: 'https://linkedin.com/in/justin-andre-330586159',
    icon: 'linkedin',
  },
]
