// noinspection SpellCheckingInspection

import styles from '../../styles/Home.module.css'
import {Navbar} from "../../components/Navbar";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import Link from "next/link";
import {useState} from "react";

const ArtCrimes: NextPage = ({ artcrimes }: any) => {

    return (
        <>
            <Head>
                <title>Art Crimes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>yo yo yo im gonna steal your art</h1>
                    <p>page {artcrimes.page}, {artcrimes.total} art crimes total</p>
                    <ol>
                        {
                            artcrimes.items.map((artcrime: any) =>
                                <Link key={artcrime.uid} href={`/art-crimes/${artcrime.uid}`}>
                                    <li><a>{artcrime.title}</a></li>
                                </Link>
                            )
                        }
                    </ol>
                    <div>
                        <button>prev</button>
                        <button>next</button>
                    </div>
                </main>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.fbi.gov/@artcrimes?pageSize=50&page=1')
    const data = await res.json()

    return { props: { artcrimes: data } }
}

export default ArtCrimes;