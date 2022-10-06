import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/Home.module.css";
import Link from "next/link";
import getWanted from "../../lib/getWanted";
import {Wanted, WantedPerson} from "../../types";
import PaginationPage from "../../components/PaginationPage";

type MostWantedProps = {
    wanted: Wanted;
}

const MostWanted = (props: MostWantedProps) => {
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

// TODO fix this GoofyScript if TypeScript stops being annoying
export const getServerSideProps: GetServerSideProps = async ({ query }: any) => {
    const data = await getWanted(query);
    return { props: { wanted: data } };
}

export default MostWanted;