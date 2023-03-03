import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './404Page.module.scss'

const Page404: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 PAGE NOT FOUND</h1>
      <p onClick={() => navigate(-1)} className={styles.text}>
        Please, keep kalm and return to the previous page
      </p>
    </div>
  )
}

export default Page404
