import { contactMethods, type ContactIcon } from '../../data/contact'
import styles from './Contact.module.css'

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

const ICONS: Record<ContactIcon, () => React.JSX.Element> = {
  email: EmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section className={styles.contact} aria-label="Contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.links}>
          {contactMethods.map((method) => {
            const address = method.emailParts?.join('@')
            const href = address ? `mailto:${address}` : method.url ?? '#'
            const displayValue = address ?? method.value ?? ''
            const isExternal = !address
            const Icon = ICONS[method.icon]

            return (
              <a
                key={method.label}
                href={href}
                className={styles.link}
                aria-label={`${method.label}: ${displayValue}`}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.iconWrap}>
                  <Icon />
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{method.label}</span>
                  <span className={styles.linkValue}>{displayValue}</span>
                </span>
              </a>
            )
          })}
        </div>
        <p className={styles.footerNote}>
          &copy; {currentYear} Justin Andre. Built with React + TypeScript.
        </p>
      </div>
    </section>
  )
}

export default Contact
