import type { NextPage } from 'next';
import Layout from '../components/Layout';
import {GetStaticProps} from "next";
import {baseURL} from "../utils/baseUrl";

const Home: NextPage = () => {
  return (
      <Layout title="Home">
        <div className="">
            hey whats up
        </div>
      </Layout>
  )
}

export default Home;
