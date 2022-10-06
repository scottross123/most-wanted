import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import Layout from "../../components/Layout";
import {Artcrime} from "../../types";
import getArtcrimeById from "../../lib/getArtcrimeById";
import {ParsedUrlQuery} from "querystring";
import getArtcrimes from "../../lib/getArtcrimes";

type ArtCrimeDetailsProps = {
    artcrime: Artcrime;
}

interface ArtCrimeDetailsParams extends ParsedUrlQuery {
    id: string;
}

const ArtCrimeDetails: NextPage<ArtCrimeDetailsProps> = (props: ArtCrimeDetailsProps) => {
    const { artcrime: { title, description, images } } = props;
    const imageUrl = `https://artcrimes${images[0].original.substring(11)}`;
    // image url from lib call is broken and fixed here, should be 'artcrimes' not 'lib'

    return (
        <Layout title={title}>
            <div >
                <h1 >{title}</h1>
                <p >{description}</p>
                <figure >
                    <img src={imageUrl} alt="image of art work" />
                    <figcaption>{images[0].caption}</figcaption>
                </figure>
            </div>
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
    const paths = items.map(({ uid }: Artcrime) => {
        return { params: { id: uid } }
    });
    return { paths, fallback: false };
}

export default ArtCrimeDetails;