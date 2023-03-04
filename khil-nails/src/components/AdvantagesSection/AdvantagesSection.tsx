import { FC } from 'react'

import catIcon from '../../assets/icons/cat.svg'

import styles from './AdvantagesSection.module.scss'

const AdvantagesSection: FC = () => {
  return (
    <section id="advantages" className={styles.block}>
      <h1 className={styles.title}>
        Почему выбирают <span className={styles.titleWord}>меня</span>
      </h1>
      <div className={styles.advantagesBlock}>
        <div className={styles.lineBlock}>
          <div className={styles.line}>
            <div className={styles.card}>
              <p className={styles.text}>
                Выполняю работу быстро и качественно
              </p>
            </div>
            <div className={styles.arrow}></div>
            <div className={styles.card}>
              <p className={styles.text}>
                В работе использую только профессиональные инструменты
              </p>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.card}>
              <p className={styles.text}>Реализую любой дизайн на ваш вкус</p>
            </div>
            <div className={styles.arrow}></div>
            <div className={styles.card}>
              <p className={styles.text}>
                Все инструменты проходят двухэтапную стерилизацию
              </p>
            </div>
          </div>
        </div>
        <div className={styles.asideArrow}></div>
      </div>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default AdvantagesSection
