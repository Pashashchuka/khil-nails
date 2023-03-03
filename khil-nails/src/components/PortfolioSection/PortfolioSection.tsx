import React from 'react'

import styles from './PortfolioSection.module.scss'

const PortfolioSection = () => {
  return (
    <section id="portfolio" className={styles.block}>
      <h1 className={styles.title}>
        Мои <span className={styles.titleWord}>работы</span>
      </h1>
    </section>
  )
}

export default PortfolioSection
