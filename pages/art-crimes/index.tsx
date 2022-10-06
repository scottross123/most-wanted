import { GetServerSideProps } from "next";
import { Artcrimes} from "../../types";
import getArtcrimes from "../../lib/getArtcrimes";
import { PaginationPage, Layout } from "../../components";

type ArtCrimesProps = {
    artcrimes: Artcrimes;
}

const ArtCrimes = (props: ArtCrimesProps) => {
    const { artcrimes: { page, total, items } } = props;
    const title = "Art Crimes 🖼️";

    return (
        <Layout title={title}>
            <PaginationPage
                title={title}
                page={page}
                pageSize={20}
                total={total}
                items={items}
                url='art-crimes'
            />
        </Layout>
    )
}

// TODO fix this GoofyScript if TypeScript stops being annoying
export const getServerSideProps: GetServerSideProps = async ({ query }: any) => {
    const data = await getArtcrimes(query);
    return { props: { artcrimes: data } }
}

export default ArtCrimes;