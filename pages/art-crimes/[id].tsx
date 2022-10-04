import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/ArtCrimeDetails.module.css"

const ArtCrimeDetails: NextPage = ({ artcrime }: any) => {

    return (
        <Layout title={artcrime.title}>
            <div className={styles.detailsContainer}>
                <h1 className={styles.title}>{artcrime.title}</h1>
                <p className={styles.description}>{artcrime.description}</p>
                <figure className={styles.figure}>
                    <img src={"https://artcrimes" + artcrime.images[0].original.substring(11)} alt="image of art work" />
                    <figcaption>{artcrime.images[0].caption}</figcaption>
                </figure>
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