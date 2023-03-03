import { FC } from 'react'

import Layout from '../../components/Layout'
import AboutSection from '../../components/AboutSection'
import GreetingSection from '../../components/GreetingSection'
import PortfolioSection from '../../components/PortfolioSection'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <GreetingSection />
        <AboutSection />
        <PortfolioSection />
      </div>
    </Layout>
  )
}

export default HomePage
