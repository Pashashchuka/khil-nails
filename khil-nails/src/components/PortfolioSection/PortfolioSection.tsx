import React from 'react'

import catIcon from '../../assets/icons/cat.svg'
import zlataPhoto from '../../assets/images/photo-zlata.JPG'

import styles from './PortfolioSection.module.scss'

const PortfolioSection = () => {
  return (
    <section id="portfolio" className={styles.block}>
      <h1 className={styles.title}>
        Мои <span className={styles.titleWord}>работы</span>
      </h1>
      <div className={styles.photoBlock}>
        <div className={styles.photoLine}>
          <img className={styles.widePhoto} src={zlataPhoto} alt="nails" />
          <img className={styles.photo} src={zlataPhoto} alt="nails" />
        </div>
        <div className={styles.photoLine}>
          <img className={styles.photo} src={zlataPhoto} alt="nails" />
          <img className={styles.widePhoto} src={zlataPhoto} alt="nails" />
        </div>
        <div className={styles.photoLine}>
          <img className={styles.widePhoto} src={zlataPhoto} alt="nails" />
          <img className={styles.photo} src={zlataPhoto} alt="nails" />
        </div>
      </div>
      <button className={styles.btn}>Больше работ</button>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default PortfolioSection
