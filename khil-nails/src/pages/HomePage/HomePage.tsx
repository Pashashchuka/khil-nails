import { FC } from 'react'

import Layout from '../../components/Layout'
import catIcon from '../../assets/icons/cat.svg'
import zlataPhoto from '../../assets/images/photo-zlata.JPG'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
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
        <img className={styles.firstCat} src={catIcon} alt="cat" />
      </div>
    </Layout>
  )
}

export default HomePage
