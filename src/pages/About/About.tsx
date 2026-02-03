import { useTranslation } from 'react-i18next'
import styles from './About.module.css'

export const About = () => {
  const { t } = useTranslation()

  const stats = [
    { number: '4+', label: t('about.stats.years') },
    { number: '1M+', label: t('about.stats.users') },
    { number: '20+', label: t('about.stats.projects') },
    { number: '15+', label: t('about.stats.technologies') },
  ]

  const highlights = [
    {
      icon: '🚀',
      title: t('about.highlights.scalable.title'),
      description: t('about.highlights.scalable.description'),
    },
    {
      icon: '🏦',
      title: t('about.highlights.banking.title'),
      description: t('about.highlights.banking.description'),
    },
    {
      icon: '🤖',
      title: t('about.highlights.ai.title'),
      description: t('about.highlights.ai.description'),
    },
  ]

  return (
    <section className={styles.aboutSection}>
      <h1 data-aos="fade-down" data-aos-duration="800">
        {t('about.title')}
      </h1>

      <div className={styles.aboutContainer}>
        {/* Left Side - Image & Stats */}
        <div className={styles.leftColumn} data-aos="fade-right" data-aos-duration="1000">
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img
              src="/images/Developer activity-bro.png"
              alt="Developer Icon"
              className={styles.imageStyle}
            />
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={styles.statCard}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.rightColumn} data-aos="fade-left" data-aos-duration="1000">
          <div className={styles.introBox}>
            <h2 className={styles.name}>{t('about.name')}</h2>
            <div className={styles.roleTag}>
              <span className={styles.roleDot}></span>
              {t('about.highlight')}
            </div>
          </div>

          <p className={styles.aboutPara}>
            {t('about.description')}
          </p>

          {/* Highlight Cards */}
          <div className={styles.highlightsContainer}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className={styles.highlightCard}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className={styles.highlightIcon}>{item.icon}</span>
                <div className={styles.highlightContent}>
                  <h4 className={styles.highlightTitle}>{item.title}</h4>
                  <p className={styles.highlightDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className={styles.techStack} data-aos="fade-up" data-aos-delay="300">
            <span className={styles.techLabel}>{t('about.techStack')}</span>
            <div className={styles.techPills}>
              {['Java', 'Spring Boot', 'React','Angular', 'TypeScript', 'Node.js'].map(
                (tech, index) => (
                  <span key={index} className={styles.techPill}>
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
