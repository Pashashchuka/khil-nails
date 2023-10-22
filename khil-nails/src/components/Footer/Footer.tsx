import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <HeartIcon className={styles.heart__icon} />
        <p className={styles.text}>{t('name')}</p>
      </div>
      <div className={styles.block}>
        <LocationOnOutlinedIcon className={styles.icon} />
        <p className={styles.text}>{t('location')}</p>
      </div>
      <div className={styles.block}>
        <InstagramIcon className={styles.icon} />
        <NavLink
          className={styles.link}
          to="https://www.instagram.com/khil_nails/"
          target="_blank"
        >
          {t('instagram')}
        </NavLink>
      </div>
    </div>
  )
}

export default Footer
