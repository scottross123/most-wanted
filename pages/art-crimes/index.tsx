// noinspection SpellCheckingInspection

import styles from '../../styles/pages/Home.module.css'
import {GetStaticProps, NextPage} from "next";
import Link from "next/link";
import Layout from '../../components/Layout';
import {Artcrime, Artcrimes} from "../../types";
import getArtcrimes from "../../api/getArtcrimes";

type ArtcrimePreview = Pick<Artcrime, "uid" | "title">

type ArtCrimesProps = {
    artcrimes: Artcrimes;
}

const ArtCrimes: NextPage<ArtCrimesProps> = ({ artcrimes: { page, total, items } }: ArtCrimesProps) => {

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
                        <button>next</button>
                    </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getArtcrimes();
    return { props: { artcrimes: data } }
}

export default ArtCrimes;