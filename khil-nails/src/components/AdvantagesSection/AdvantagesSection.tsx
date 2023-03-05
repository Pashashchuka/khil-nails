import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SanitizerOutlinedIcon from '@mui/icons-material/SanitizerOutlined'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined'

import catIcon from '../../assets/icons/cat.svg'

import styles from './AdvantagesSection.module.scss'

const AdvantagesSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section id="advantages" className={styles.block}>
      <h1 className={styles.title}>
        {t('whyChoose')}{' '}
        <span className={styles.titleWord}>{t('chooseMe')}</span>
      </h1>
      <div className={styles.advantagesBlock}>
        <div className={styles.line}>
          <div className={styles.card}>
            <p className={styles.text}>{t('firstAdvantage')}</p>
            <AccessTimeIcon className={styles.icon} />
          </div>
          <div className={styles.card}>
            <p className={styles.text}>{t('secondAdvantage')}</p>
            <DoneAllIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.card}>
            <p className={styles.text}>{t('thirdAdvantage')}</p>
            <ThumbUpOffAltOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.card}>
            <p className={styles.text}>{t('fourAdvantage')}</p>
            <SanitizerOutlinedIcon className={styles.icon} />
          </div>
        </div>
      </div>
      <img className={styles.cat} src={catIcon} alt="cat" />
    </section>
  )
}

export default AdvantagesSection
