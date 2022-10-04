import {GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/Home.module.css";
import Link from "next/link";
import getWanted from "../../api/getWanted";

const Wanted: NextPage = ({ wanted }: any) => {
    return (
        <Layout title="Wanted">
            <div className={styles.container}>
                <h1>wanted 🦹</h1>
                <p>page {wanted.page}, {wanted.total} wanted total</p>
                <ol>
                    {
                        wanted.items.map((wanted: any) =>
                            <li key={wanted.uid}>
                                <Link href="">
                                    {wanted.title}
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

export default Wanted;