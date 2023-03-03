import { FC } from 'react'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.menuList}>
            <a className={styles.link} href="about">
              Обо мне
            </a>
          </li>
          <li className={styles.menuList}>
            <a className={styles.link} href="portfolio">
              Портфолио
            </a>
          </li>
          <li className={styles.menuList}>
            <a className={styles.link} href="advantages">
              Преимущества
            </a>
          </li>
          <li className={styles.menuList}>
            <a className={styles.link} href="price">
              Прайс-лист
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
