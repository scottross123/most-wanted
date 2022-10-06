import {Artcrime, WantedPerson} from "../types";
import fbi from "../assets/images/fbi.webp";
import {PaginationControls, CrimeCard} from "./index";

type PaginationPageProps = {
    title: string,
    page: number,
    pageSize: number,
    total: number,
    items: WantedPerson[] | Artcrime[],
    url: 'art-crimes' | 'wanted',
}

const PaginationPage = (props: PaginationPageProps) => {
    const {
        title,
        page,
        pageSize,
        total,
        items,
        url
    } = props;

    return (
        <div className="">
            <h1 className="text-6xl text-center mb-6">{title}</h1>
            <p className="text-center mb-6">Page {page}, {pageSize} results per page, and {total} results total.</p>
            <PaginationControls
                page={page}
                pageSize={pageSize}
                total={total}
            />
            <div className="grid grid-cols-5 gap-8">
                {
                    items.map((item: WantedPerson | Artcrime) => {
                        const { uid, title, images } = item;
                        const thumb = images[0] ? images[0].thumb : fbi.src;
                        return (
                            <CrimeCard
                                key={uid}
                                uid={uid}
                                title={title}
                                thumb={thumb}
                                url={url}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PaginationPage;