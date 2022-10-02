import type { NextPage } from 'next'
import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
      <Layout title="Next App">
        <div className={styles.container}>
          bruh
        </div>
      </Layout>
  )
}

export default Home;
