// noinspection SpellCheckingInspection

import styles from '../../styles/Home.module.css'
import {Navbar} from "../../components/Navbar";
import Head from "next/head";

const ArtCrimes = ({ artcrimes }: any) => {
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
                                <li key={artcrime.id}>{artcrime.title}</li>
                            )
                        }
                    </ol>
                </main>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://api.fbi.gov/@artcrimes?pageSize=50&page=3')
    const data = await res.json()

    return { props: { artcrimes: data } }
}

export default ArtCrimes;