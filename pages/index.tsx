import type { NextPage } from 'next';
import Layout from '../components/Layout';
import {Hero, Button, ButtonGroup} from "react-daisyui";
import overlayImage from "../assets/images/overlay.jpeg"
import Banner from "../components/Banner";
import LandingCard from "../components/LandingCard";
import {GetStaticProps} from "next";
import getWantedPerson from "../lib/getWantedPerson";
import getWanted from "../lib/getWanted";
import getArtcrimes from "../lib/getArtcrimes";
import {Artcrime, WantedPerson} from "../types";

type HomeProps = {
    mostRecentArtcrime: Artcrime,
    mostRecentWanted: WantedPerson,
}

const Home = (props: HomeProps) => {
    const { mostRecentArtcrime, mostRecentWanted } = props;
    const landingDiv = "flex-1 h-64"
    const cardTitle = "text-center mb-4"

    return (
      <Layout title="FBI's Most Wanted" isLanding>
          <>
              <Banner />
              <div className="w-full m-16 px-16 flex justify-center gap-16">
                  <div className={landingDiv} >
                    <h1 className={cardTitle}>Most Recent Art Crime</h1>
                    <LandingCard url={`/art-crimes/${mostRecentArtcrime.uid}`} crime={mostRecentArtcrime} />
                  </div>

                  <div className={landingDiv}>
                    <h1 className={cardTitle}>Most Recent Wanted Person</h1>
                    <LandingCard url={`/wanted/${mostRecentWanted.uid}`} crime={mostRecentWanted}/>
                  </div>
              </div>
          </>
      </Layout>
    );
}

export default Home;

export const getStaticProps: GetStaticProps = async ( ) => {
    const { items: mostRecentArtcrime } = await getArtcrimes({ page: 1, pageSize: 1});

    const { items: mostRecentWanted } = await getWanted({ page: 1, pageSize: 1});
    return { props: { mostRecentArtcrime: mostRecentArtcrime[0], mostRecentWanted: mostRecentWanted[0] } };
}