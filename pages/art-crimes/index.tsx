// noinspection SpellCheckingInspection

import styles from '../../styles/pages/Home.module.css'
import Navbar from "../../components/Navbar";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import Link from "next/link";
import {useState} from "react";
import Layout from '../../components/Layout';

const ArtCrimes: NextPage = ({ artcrimes }: any) => {

    return (
        <Layout title="Art Crimes">
            <div className={styles.container}>
                    <h1>art crimes 🖼️</h1>
                    <p>page {artcrimes.page}, {artcrimes.total} art crimes total</p>
                    <ol>
                        {
                            artcrimes.items.map((artcrime: any) =>
                                <li key={artcrime.uid}>
                                    <Link href={`/art-crimes/${artcrime.uid}`}>
                                        {artcrime.title}
                                    </Link>
                                </li>
                            )
                        }
                    </ol>
                    <div>
                        <button>prev</button>
                        <button>next</button>
                    </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.fbi.gov/@artcrimes?pageSize=50&page=1')
    const data = await res.json()

    return { props: { artcrimes: data } }
}

export default ArtCrimes;