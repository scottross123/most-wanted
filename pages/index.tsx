import type { NextPage } from 'next'
import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css'
import {GetStaticProps} from "next";
import {baseUrl} from "../utils/baseUrl";

const Home: NextPage = () => {
  return (
      <Layout title="Home">
        <div className={styles.container}>
            hey whats up
        </div>
      </Layout>
  )
}

export default Home;
