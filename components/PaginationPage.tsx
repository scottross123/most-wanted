import {FC} from "react";
import {Artcrime, WantedPerson} from "../types";
import CrimeCard from "./CrimeCard";
import fbi from "../assets/images/fbi.webp";

type PaginationPageProps = {
    title: string,
    page: number,
    pageSize: number,
    total: number,
    items: WantedPerson[] | Artcrime[],
    url: 'art-crimes' | 'wanted',
}

const PaginationPage: FC<PaginationPageProps> = (props: PaginationPageProps) => {
    const {
        title,
        page,
        pageSize,
        total,
        items,
        url
    } = props;

    return (
        <div className="d">
            <h1 className="text-6xl text-center mb-12">{title}</h1>
            <p className="text-center mb-12">Page {page}, {pageSize} results per page, and {total} results total.</p>
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