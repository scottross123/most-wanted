// noinspection SpellCheckingInspection

import styles from '../../styles/pages/Home.module.css'
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import Link from "next/link";
import Layout from '../../components/Layout';
import {Artcrime, Artcrimes} from "../../types";
import getArtcrimes from "../../lib/getArtcrimes";
import {useRouter} from "next/router";
import {useState} from "react";

type ArtcrimePreview = Pick<Artcrime, "uid" | "title">

type ArtCrimesProps = {
    artcrimes: Artcrimes;
}

const ArtCrimes: NextPage<ArtCrimesProps> = ({ artcrimes: { page, total, items } }) => {
    const router = useRouter();
    const [pageNum, setPageNum] = useState<number>(1);

    return (
        <Layout title="Art Crimes">
            <div className={styles.container}>
                    <h1>art crimes 🖼️</h1>
                    <p>page {page}, {total} art crimes total</p>
                    <ol>
                        {
                            items.map(({ uid, title }: ArtcrimePreview) =>
                                <li key={uid}>
                                    <Link href={`/art-crimes/${uid}`}>
                                        {title}
                                    </Link>
                                </li>
                            )
                        }
                    </ol>
                    <div>
                        <button>prev</button>
                        <button onClick={() => router.push({query: "page=2"})}>next</button>
                    </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: any) => {
    console.log(query);
    const data = await getArtcrimes(query);
    return { props: { artcrimes: data } }
}

export default ArtCrimes;