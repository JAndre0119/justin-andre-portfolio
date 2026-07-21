import { technicalSkills, certifications } from '../../data/skills'
import styles from './Skills.module.css'

const LANGUAGES_AND_FRAMEWORKS = technicalSkills.slice(0, 6)
const CLOUD_AND_INFRA = technicalSkills.slice(6)

function Skills() {
  return (
    <section className={styles.skills} aria-label="Skills">
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.tagRows}>
          <div className={styles.tagRow}>
            {LANGUAGES_AND_FRAMEWORKS.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
          <div className={styles.tagRow}>
            {CLOUD_AND_INFRA.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <h3 className={styles.subheading}>Certifications</h3>
        <ul className={styles.certList}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.certItem}>
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certIssuer}>{cert.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
