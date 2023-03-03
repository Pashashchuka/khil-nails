import { FC } from 'react'

import catIcon from '../../assets/icons/cat.svg'
import zlataPhoto from '../../assets/images/photo-zlata.JPG'

import styles from './GreetingSection.module.scss'

export const GreetingSection: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>
          Порадую вас новым маникюром и уютной атмосферой
        </h1>
        <button className={styles.btn}>Записаться</button>
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
