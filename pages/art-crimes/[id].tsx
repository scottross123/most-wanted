import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";

const ArtCrimeDetails: NextPage = ({ artcrime }: any) => {

    return (
        <Layout title={artcrime.title}>
            <div>
                <h1>{artcrime.title}</h1>
                <p>{artcrime.description}</p>
                <img src={"https://artcrimes" + artcrime.images[0].original.substring(11)} alt="image of art work" />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://api.fbi.gov/@artcrimes/${params!.id}`);
    const data = await res.json();

    return { props: { artcrime: data } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://api.fbi.gov/@artcrimes?pageSize=50&page=1');
    const data = await res.json();
    const paths = data.items.map((artcrime: any) => {
        return {params: {id: artcrime.uid}}
    })

    return { paths, fallback: false };
}

export default ArtCrimeDetails;