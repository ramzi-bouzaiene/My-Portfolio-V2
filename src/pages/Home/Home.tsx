import styles from './Home.module.css'
import imdCode from '/images/ramzi.b.png'
import resumeEN from '../../assets/files/Ramzi_Bouzaiene_Software_Engineer_CV.pdf'
import resumeFR from '../../assets/files/Ramzi_Bouzaiene_CV_FR.pdf'
import { useTranslation } from 'react-i18next'
import { TypeWriter } from '../../components/TypeWriter/TypeWriter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoMedium } from 'react-icons/io5'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const handleResumeClick = () => {
    const selectedResume = i18n.language.startsWith('fr') ? resumeFR : resumeEN
    window.open(selectedResume, '_blank')
  }

  return (
    <>
      <div className={styles.meContainer}>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
        <div className={styles.paraContainer}>
          <div className={styles.title}>
            <span>{t('home.iam')}</span>{' '}
            <TypeWriter text="Ramzi Bouzaiene" speed={80} />
          </div>
          <p className={styles.mainPara}>
            {t('home.description')} <br /> {t('home.secondDescription')}
          </p>
          <div className={styles.ctaContainer}>
            <button className={styles.btnStyle} onClick={handleResumeClick}>
              {t('home.resume')}
            </button>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/ramzi-bouzaiene"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ramzibouzaiene/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://medium.com/@ramzibouzaiene.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium Blog"
                className={styles.socialIcon}
              >
                <IoLogoMedium />
              </a>
            </div>
          </div>
        </div>
        <img
          src={imdCode}
          className={styles.styleImage}
          alt="Ramzi Bouzaiene - Software Engineer"
          loading="eager"
        />
      </div>
    </>
  )
}
