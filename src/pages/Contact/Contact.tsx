import styles from './Contact.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoMedium } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.titleContainer}>
        <hr className={styles.line} data-aos="slide-up" />
        <h1 className={styles.title} data-aos="slide-down">
          {t('contact.contactMe')}
        </h1>
        <hr className={styles.line} data-aos="slide-up" />
      </div>
      <div className={styles.container}>
        <p className={styles.contactText} data-aos="slide-up">
          <MdOutlineEmail style={{ color: '#fff' }} />
          <a
            href="mailto:ramzibouzaiene.dev@gmail.com"
            style={{ textDecoration: 'none', color: '#ffc86b' }}
          >
            ramzibouzaiene.dev@gmail.com
          </a>
        </p>
        <p className={styles.contactText} data-aos="slide-up">
          <FiPhone style={{ color: '#fff' }} />
          +216 58 275 298
        </p>
        <p className={styles.contactText} data-aos="slide-up">
          <MdOutlineLocationOn style={{ color: '#fff' }} />
          Tunisia, Sousse
        </p>
      </div>
      <div className={styles.secondTitleContainer}>
        <hr className={styles.line} />
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/ramzi-bouzaiene"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub
              style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
              className={styles.icons}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ramzibouzaiene/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin
              style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
              className={styles.icons}
            />
          </a>

          <a
            href="https://medium.com/@ramzibouzaiene.dev"
            target="_blank"
            aria-label="Medium"
          >
            <IoLogoMedium
              style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
              className={styles.icons}
            />
          </a>
        </div>

        <hr className={styles.line} />
      </div>
      <p className={styles.endTitle}>"{t('contact.thanks')}"</p>
      <div>
        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Ramzi Bouzaiene. {t('contact.copyRight')}
        </p>
      </div>
    </>
  )
}
