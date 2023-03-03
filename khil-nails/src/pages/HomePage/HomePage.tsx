import { FC } from 'react'

import Layout from '../../components/Layout'
import AboutSection from '../../components/AboutSection'
import GreetingSection from '../../components/GreetingSection'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <GreetingSection />
        <AboutSection />
      </div>
    </Layout>
  )
}

export default HomePage
