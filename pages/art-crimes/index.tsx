// noinspection SpellCheckingInspection

import styles from '../../styles/pages/Home.module.css'
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import Link from "next/link";
import Layout from '../../components/Layout';
import {Artcrime, Artcrimes} from "../../types";
import getArtcrimes from "../../lib/getArtcrimes";
import {useRouter} from "next/router";

type ArtcrimePreview = Pick<Artcrime, "uid" | "title">

type ArtCrimesProps = {
    artcrimes: Artcrimes;
}

const ArtCrimes: NextPage<ArtCrimesProps> = ({ artcrimes: { page, total, items } }) => {
    const router = useRouter();
    const isPrevDisabled = (router.query.page === undefined || router.query.page === "1");

    const incrementPageNumber = (increment: number) => {
        const { page } = router.query;
        if (page === undefined) return router.push({ query: "page=2"});
        const newPageNumber = parseInt(page as string) + increment;
        if (newPageNumber < 2) return router.push({ query: "" });
        return router.push({ query: `page=${newPageNumber}` });
    }

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
                    <div className="">
                        <button onClick={() => incrementPageNumber(-1)} disabled={isPrevDisabled}>prev</button>
                        <button onClick={() => incrementPageNumber(1)}>next</button>
                    </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: any) => {
    const data = await getArtcrimes(query);
    return { props: { artcrimes: data } }
}

export default ArtCrimes;