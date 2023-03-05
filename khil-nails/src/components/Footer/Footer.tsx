import { FC } from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink
          className={styles.link}
          to="https://www.instagram.com/khil_nails/"
          target="_blank"
        >
          Instagram
        </NavLink>
      </div>
    </div>
  )
}

export default Footer
