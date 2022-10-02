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
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.fbi.gov/@artcrimes?pageSize=50&page=1')
    const data = await res.json()

    return { props: { artcrimes: data } }
}

export default ArtCrimes;