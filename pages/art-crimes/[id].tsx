import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {Navbar} from "../../components/Navbar";

const ArtCrimeDetails: NextPage = ({artcrime}: any) => {
    console.log("https://artcrimes" + artcrime.images[0].original.substring(11))
    return (
        <>
            <Head>
                <title>Art Crimes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <h1>{artcrime.title}</h1>
            <p>{artcrime.description}</p>
            <img src={"https://artcrimes" + artcrime.images[0].original.substring(11)} alt="image of art work" />
        </>
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