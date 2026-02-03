import styles from './Services.module.css'
import front from '/images/front.png'
import back from '/images/code.png'
import fullStack from '/images/image.png'
import devOps from '/images/devOps.png'
import image from '/images/maintain.png'
import training from '/images/support.png'
import { useTranslation } from 'react-i18next'

export const Services = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1 className={styles.serviceTitle} data-aos="slide-down">
        {t('services.title')}
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={front} width={100} height={100} />
          <h2 className={styles.title}>{t('services.frontend.title')}</h2>
          <p className={styles.para}>{t('services.frontend.description')}</p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={back} width={100} height={100} />
          <h2 className={styles.title}>{t('services.backend.title')}</h2>
          <p className={styles.para}>{t('services.backend.description')}</p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={fullStack} width={100} height={100} />
          <h2 className={styles.title}>{t('services.fullstack.title')}</h2>
          <p className={styles.para}>{t('services.fullstack.description')}</p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={devOps} width={100} height={100} />
          <h2 className={styles.title}>{t('services.devops.title')}</h2>
          <p className={styles.para}>{t('services.devops.description')}</p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={image} width={100} height={100} />
          <h2 className={styles.title}>{t('services.maintenance.title')}</h2>
          <p className={styles.para}>{t('services.maintenance.description')}</p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={training} width={100} height={100} />
          <h2 className={styles.title}>{t('services.consulting.title')}</h2>
          <p className={styles.para}>{t('services.consulting.description')}</p>
        </div>
      </div>
    </>
  )
}
