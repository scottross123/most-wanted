import {GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/Home.module.css";
import Link from "next/link";
import getWanted from "../../api/getWanted";
import {Wanted, WantedPerson} from "../../types";

type MostWantedProps = {
    wanted: Wanted;
}

const MostWanted: NextPage<MostWantedProps> = (props: MostWantedProps) => {
    const { wanted: { page, total, items } } = props;

    return (
        <Layout title="Wanted">
            <div className={styles.container}>
                <h1>wanted 🦹</h1>
                <p>page {page}, {total} wanted total</p>
                <ol>
                    {
                        items.map(({ uid, title }: WantedPerson) =>
                            <li key={uid}>
                                <Link href={`/wanted/${uid}`}>
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
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getWanted();
    return { props: { wanted: data } };
}

export default MostWanted;