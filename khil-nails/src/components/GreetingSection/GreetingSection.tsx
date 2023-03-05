import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import catIcon from '../../assets/icons/cat.svg'
import zlataPhoto from '../../assets/images/photo-zlata.JPG'

import styles from './GreetingSection.module.scss'

export const GreetingSection: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.block}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>{t('greeting')}</h1>
        <button className={styles.btn}>
          <NavLink
            className={styles.link}
            to="https://www.instagram.com/khil_nails/"
            target="_blank"
          >
            {t('signUp')}
          </NavLink>
        </button>
      </div>
      <div className={styles.photoBlock}>
        <img className={styles.photo} src={zlataPhoto} alt="me" />
        <div className={styles.frame}></div>
      </div>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </div>
  )
}

export default GreetingSection
