import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useHeader } from './hooks'
import ThemeSwitcher from '../ThemeSwitcher'

import styles from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTranslation()
  const { isRussian, handleClickBtn } = useHeader()

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.menuList}>
            <a className={styles.link} href="#about">
              {t('aboutMe')}
            </a>
          </li>
          <li className={styles.menuList}>
            <a className={styles.link} href="#portfolio">
              {t('portfolio')}
            </a>
          </li>
          <li className={styles.menuList}>
            <a className={styles.link} href="#advantages">
              {t('advantages')}
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.settingsBlock}>
        <ThemeSwitcher />
        <button onClick={handleClickBtn} className={styles.btn}>
          {isRussian ? t('ru') : t('en')}
        </button>
      </div>
    </div>
  )
}

export default Header
