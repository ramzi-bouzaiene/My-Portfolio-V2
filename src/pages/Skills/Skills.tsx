import styles from './Skills.module.css'
import html from '/programming-logo/html.png'
import css from '/programming-logo/css.png'
import javascript from '/programming-logo/javascript.png'
import reactjs from '/programming-logo/react.png'
import angular from '/programming-logo/icons8-angular-96.png'
import java from '/programming-logo/java.png'
import springboot from '/programming-logo/spring-boot.png'
import kubernetes from '/programming-logo/kubernetes.png'
import docker from '/programming-logo/docker.png'
import postgres from '/programming-logo/icons8-postgres-96.png'
import nodejs from '/programming-logo/icons8-nodejs-96 (1).png'
import expressjs from '/programming-logo/icons8-express-js-96.png'
import typescript from '/programming-logo/icons8-typescript-96.png'
import mongodb from '/programming-logo/icons8-mongodb-96.png'
import { useTranslation } from 'react-i18next'

export const Skills = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1 className={styles.aboutTitle} data-aos="slide-down">
        {t('skills.skills')}
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={html} width={100} height={100} />
          <h5>HTML</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={css} width={100} height={100} />
          <h5>CSS</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={javascript} width={100} height={100} />
          <h5>JAVASCRIPT</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={typescript} width={100} height={100} />
          <h5>TYPESCRIPT</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={reactjs} width={100} height={100} />
          <h5>REACT JS</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={angular} width={100} height={100} />
          <h5>ANGULAR</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={java} width={100} height={100} />
          <h5>JAVA</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={springboot} width={100} height={100} />
          <h5>SPRING BOOT</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={nodejs} width={100} height={100} />
          <h5>NODE JS</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={expressjs} width={100} height={100} />
          <h5>EXPRESS JS</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={kubernetes} width={100} height={100} />
          <h5>KUBERNETES</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={docker} width={100} height={100} />
          <h5>DOCKER</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={postgres} width={100} height={100} />
          <h5>POSTGRES</h5>
        </div>
        <div className={styles.techContainer} data-aos="slide-up">
          <img src={mongodb} width={100} height={100} />
          <h5>MONGO DB</h5>
        </div>
      </div>
    </>
  )
}
