import { FC } from 'react'

import styles from './AboutSection.module.scss'

const AboutSection: FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>
        Обо <span className={styles.titleWord}>мне</span>
      </h1>
      <div className={styles.photoBlock}>
        {/* <img className={styles.firstAboutPhoto} src={zlataPhoto} alt="me" /> */}
        <div className={styles.firstFrame}></div>
        <div className={styles.textBlock}>
          <p className={styles.description}>
            Меня зовут Злата и уже более 4 лет я занимаюсь любимым делом на
            профессиональном уровне.
          </p>
          <p className={styles.description}>
            В начале своей карьеры я проходила множество курсов по маникюру,
            педикюру а так же и по сей день я изучаю и всё больше
            совершенствуюсь в своей профессии.
          </p>
          <p className={styles.description}>
            Буду рада стать вашим мастером по маникюру, а с меня уютная
            атмосфера, ароматный чай и вкусняшки.
          </p>
        </div>
        {/* <img className={styles.secondAboutPhoto} src={zlataPhoto} alt="me" /> */}
        <div className={styles.secondFrame}></div>
      </div>
    </div>
  )
}

export default AboutSection
