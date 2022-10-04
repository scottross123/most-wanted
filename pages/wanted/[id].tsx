import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import getArtcrimeById from "../../lib/getArtcrimeById";
import getArtcrimes from "../../lib/getArtcrimes";
import {Artcrime, WantedPerson} from "../../types";
import getWantedPerson from "../../lib/getWantedPerson";
import getWanted from "../../lib/getWanted";

type WantedPersonProps = {
    wantedPerson: WantedPerson;
}

type WantedPersonDetailsParams = {
    id: string;
}

const WantedPersonDetails: NextPage<WantedPersonProps> = (props : WantedPersonProps) => {
    const { wantedPerson: { title, url, description, details, images } } = props;
    const detailsHTML = { __html: details };
    return (
        <Layout title={title}>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p dangerouslySetInnerHTML={detailsHTML} />
            </div>
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
    const paths = items.map(({ uid }: WantedPerson) => {
        return { params: { id: uid } }
    });
    return { paths, fallback: false };
}

export default WantedPersonDetails;