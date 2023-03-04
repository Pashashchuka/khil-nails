import { FC } from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SanitizerOutlinedIcon from '@mui/icons-material/SanitizerOutlined'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined'

import catIcon from '../../assets/icons/cat.svg'

import styles from './AdvantagesSection.module.scss'

const AdvantagesSection: FC = () => {
  return (
    <section id="advantages" className={styles.block}>
      <h1 className={styles.title}>
        Почему выбирают <span className={styles.titleWord}>меня</span>
      </h1>
      <div className={styles.advantagesBlock}>
        <div className={styles.line}>
          <div className={styles.card}>
            <p className={styles.text}>Выполняю работу быстро и качественно</p>
            <AccessTimeIcon className={styles.icon} />
          </div>
          <div className={styles.card}>
            <p className={styles.text}>
              В работе использую только профессиональные инструменты
            </p>
            <DoneAllIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.card}>
            <p className={styles.text}>Реализую любой дизайн на ваш вкус</p>
            <ThumbUpOffAltOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.card}>
            <p className={styles.text}>
              Все инструменты проходят двухэтапную стерилизацию
            </p>
            <SanitizerOutlinedIcon className={styles.icon} />
          </div>
        </div>
      </div>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default AdvantagesSection
