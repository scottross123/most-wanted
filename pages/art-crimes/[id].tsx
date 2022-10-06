import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import Layout from "../../components/Layout";
import {Artcrime} from "../../types";
import getArtcrimeById from "../../lib/getArtcrimeById";
import {ParsedUrlQuery} from "querystring";
import getArtcrimes from "../../lib/getArtcrimes";
import {useRouter} from "next/router";
import CrimePage from "../../components/CrimePage";
import getArtImages from "../../utils/getArtImages";
import {Button} from "react-daisyui";

type ArtCrimeDetailsProps = {
    artcrime: Artcrime;
}

interface ArtCrimeDetailsParams extends ParsedUrlQuery {
    id: string,
}

const ArtCrimeDetails = (props: ArtCrimeDetailsProps) => {
    const { artcrime } = props;
    const { title, description } = artcrime;
     const fixedImages =  getArtImages(artcrime.images);
    const router = useRouter();
    // image url from lib call is broken and fixed here, should be 'artcrimes' not 'lib'

    return (
        <Layout title={title}>
            <CrimePage fixedImages={fixedImages} {...artcrime} />
            {/*<Button onClick={() => router.back()}>go back nerd</Button>*/}
        </Layout>
    );
}

// TODO maybe type this properly but TypeScript was being very unfriendly
export const getStaticProps: GetStaticProps = async ({ params } ) => {
    const { id } = params as ArtCrimeDetailsParams;
    const data =  await getArtcrimeById(id)
    return { props: { artcrime: data } };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { items } = await getArtcrimes();
    const paths = items.map(({uid}: Artcrime) => {
        return {params: {id: uid}}
    });
    return { paths, fallback: true }; // tbh im not really sure why changing fallback: false to fallback: true fixes this but it does
}

export default ArtCrimeDetails;