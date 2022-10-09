import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Artcrime, WantedPerson} from "../../types";
import getWantedPerson from "../../lib/getWantedPerson";
import getWanted from "../../lib/getWanted";
import CrimePage from "../../components/CrimePage";
import {useRouter} from "next/router";

type WantedPersonProps = {
    wantedPerson: WantedPerson;
}

type WantedPersonDetailsParams = {
    id: string;
}

const WantedPersonDetails= (props : WantedPersonProps) => {
    const { wantedPerson } = props;
    //if (wantedPerson.title === undefined) wantedPerson.title = "not found";
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading... </div>
    }
    return (
        <Layout title={wantedPerson.title}>
            <CrimePage
                crimeType='wanted'
                {...wantedPerson}
            />
        </Layout>
    );
}

// TODO maybe type this properly but TypeScript was being very unfriendly
export const getStaticProps: GetStaticProps = async ({ params } ) => {
    const { id } = params as WantedPersonDetailsParams;
    const data =  await getWantedPerson(id)
    return { props: { wantedPerson: data } };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { items } = await getWanted();
    const paths = items.map((item: WantedPerson) => {
        const { uid } = item;
        return { params: { id: uid } }
    });
    return { paths, fallback: 'blocking' };
}

export default WantedPersonDetails;