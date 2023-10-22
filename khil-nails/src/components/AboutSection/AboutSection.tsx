import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import workPhoto from '../../assets/images/second-about-photo.PNG'
import zlataPhoto from '../../assets/images/first-about-photo.jpg'
import catIcon from '../../assets/icons/cat.svg'

import styles from './AboutSection.module.scss'

const AboutSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.block}>
      <h1 className={styles.title}>
        {t('about')} <span className={styles.titleWord}>{t('me')}</span>
      </h1>
      <div className={styles.photoBlock}>
        <img className={styles.firstPhoto} src={zlataPhoto} alt="me" />
        <div className={styles.firstFrame}></div>
        <div className={styles.textBlock}>
          <p className={styles.description}>{t('firstDescriptionText')}</p>
          <p className={styles.description}>{t('secondDescriptionText')}</p>
          <p className={styles.description}>{t('thirdDescriptionText')}</p>
        </div>
        <img className={styles.secondPhoto} src={workPhoto} alt="me" />
        <div className={styles.secondFrame}></div>
      </div>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default AboutSection
