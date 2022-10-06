import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import Layout from "../../components/Layout";
import {Artcrime} from "../../types";
import getArtcrimeById from "../../lib/getArtcrimeById";
import {ParsedUrlQuery} from "querystring";
import getArtcrimes from "../../lib/getArtcrimes";
import {useRouter} from "next/router";
import CrimePage from "../../components/CrimePage";
import getArtImages from "../../utils/getArtImages";

type ArtCrimeDetailsProps = {
    artcrime: Artcrime;
}

interface ArtCrimeDetailsParams extends ParsedUrlQuery {
    id: string,
}

const ArtCrimeDetails: NextPage<ArtCrimeDetailsProps> = (props: ArtCrimeDetailsProps) => {
    const { artcrime } = props;
    const { title, description } = artcrime;
    artcrime.images = getArtImages(artcrime.images);
    const router = useRouter();
    // image url from lib call is broken and fixed here, should be 'artcrimes' not 'lib'

    return (
        <Layout title={title}>
            {/*<div >
                <h1 >{title}</h1>
                <p >{description}</p>
                <figure >
                    <img src={imageUrl} alt="image of art work" />
                    <figcaption>{images[0].caption}</figcaption>
                </figure>
            </div> */}

            <CrimePage {...artcrime} />
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
    /*const total = await getTotalArtcrimes();
    const PAGE_SIZE = 60;
    type Path = { params: { id: string } }
    const paths: Path[] = [];
    for (let i = 0; i < Math.ceil(total / PAGE_SIZE); i = i + 1) {
        const { items } = await getArtcrimes({ page: i, pageSize: PAGE_SIZE });
        const subPaths = items.map(({uid}: Artcrime) => {
            return {params: {id: uid}}
        });
        paths.push(...subPaths);
    } */
    const { items } = await getArtcrimes();
    const paths = items.map(({uid}: Artcrime) => {
        return {params: {id: uid}}
    });
    return { paths, fallback: true }; // tbh im not really sure why changing fallback: false to fallback: true fixes this but it does
}

export default ArtCrimeDetails;