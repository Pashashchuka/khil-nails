import { FC } from 'react'

import AdvantagesSection from '../../components/AdvantagesSection'
import PortfolioSection from '../../components/PortfolioSection'
import GreetingSection from '../../components/GreetingSection'
import AboutSection from '../../components/AboutSection'
import Layout from '../../components/Layout'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <GreetingSection />
        <AboutSection />
        <PortfolioSection />
        <AdvantagesSection />
      </div>
    </Layout>
  )
}

export default HomePage
