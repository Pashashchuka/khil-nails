import { FC } from 'react'

import catIcon from '../../assets/icons/cat.svg'
import firstNails from '../../assets/images/first-nails.jpg'
import thirdNails from '../../assets/images/third-nails.jpg'
import secondNails from '../../assets/images/second-nails.jpg'
import firstWideNails from '../../assets/images/first-wide-nails.jpg'
import thirdWideNails from '../../assets/images/third-wide-nails.jpg'
import secondWideNails from '../../assets/images/second-wide-nails.jpg'

import styles from './PortfolioSection.module.scss'

const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className={styles.block}>
      <h1 className={styles.title}>
        Мои <span className={styles.titleWord}>работы</span>
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
      <button className={styles.btn}>Больше работ</button>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default PortfolioSection
