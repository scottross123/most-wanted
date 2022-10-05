import {GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/Home.module.css";
import Link from "next/link";
import getWanted from "../../lib/getWanted";
import {Wanted, WantedPerson} from "../../types";
import PaginationPage from "../../components/PaginationPage";

type MostWantedProps = {
    wanted: Wanted;
}

const MostWanted: NextPage<MostWantedProps> = (props: MostWantedProps) => {
    const { wanted: { page, total, items } } = props;
    const title = "Wanted 🦹";

    return (
        <Layout title={title}>
            <PaginationPage
                title={title}
                page={page}
                pageSize={20}
                total={total}
                items={items}
                url='wanted'
            />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getWanted();
    return { props: { wanted: data } };
}

export default MostWanted;