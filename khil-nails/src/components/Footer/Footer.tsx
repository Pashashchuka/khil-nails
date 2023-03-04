import { FC } from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Злата Хильмон</p>
      <div className={styles.block}>
        <LocationOnOutlinedIcon className={styles.icon} />
        <p className={styles.text}>Минск, Беларусь</p>
      </div>
      <div className={styles.block}>
        <InstagramIcon className={styles.icon} />
        <a className={styles.link} href="advantages">
          Instagram
        </a>
      </div>
      <div className={styles.block}>
        <TelegramIcon className={styles.icon} />
        <a className={styles.link} href="price">
          Telegram
        </a>
      </div>
    </div>
  )
}

export default Footer
