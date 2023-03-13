import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import catIcon from '../../assets/icons/cat.svg'
import firstNails from '../../assets/images/first-nails.jpg'
import thirdNails from '../../assets/images/third-nails.jpg'
import secondNails from '../../assets/images/second-nails.jpg'
import firstWideNails from '../../assets/images/first-wide-nails.jpg'
import thirdWideNails from '../../assets/images/third-wide-nails.jpg'
import secondWideNails from '../../assets/images/second-wide-nails.jpg'

import styles from './PortfolioSection.module.scss'

const PortfolioSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className={styles.block}>
      <h1 className={styles.title}>
        {t('my')} <span className={styles.titleWord}>{t('jobs')}</span>
      </h1>
      <div className={styles.photoBlock}>
        <div className={styles.photoLine}>
          <img className={styles.widePhoto} src={firstWideNails} alt="nails" />
          <img className={styles.photo} src={firstNails} alt="nails" />
        </div>
        <div className={styles.photoLine}>
          <img className={styles.photo} src={secondNails} alt="nails" />
          <img className={styles.widePhoto} src={secondWideNails} alt="nails" />
        </div>
        <div className={styles.photoLine}>
          <img className={styles.widePhoto} src={thirdWideNails} alt="nails" />
          <img className={styles.photo} src={thirdNails} alt="nails" />
        </div>
      </div>
      <button className={styles.btn}>
        <NavLink
          className={styles.link}
          to="https://www.instagram.com/khil_nails/"
          target="_blank"
        >
          {t('seeMore')}
        </NavLink>
      </button>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default PortfolioSection
