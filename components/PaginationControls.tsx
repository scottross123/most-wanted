import {Button, Pagination} from "react-daisyui";
import usePagination, { PageNumber } from "../hooks/usePagination";
import { useRouter } from "next/router";

type PaginationButtonProps = {
    pageNumber: PageNumber,
    page: number,
    totalPages?: number,
}

const PaginationButton = (props: PaginationButtonProps) => {
    const { pageNumber, page, totalPages } = props;
    const router = useRouter();

    const handleClick = () => {
        // TODO this is probably going to break when i let the user chagne page size
        const pageQuery = router.query.page;
        if (typeof pageNumber === "number") return router.push({ query: `page=${pageNumber}` });
        const increment = pageNumber === "»" ? 1 : -1;
        if (pageQuery === undefined) return router.push({ query: "page=2"});
        const newPageNumber = parseInt(pageQuery as string) + increment;
        if (newPageNumber < 2) return router.push({ query: "" });
        return router.push({ query: `page=${newPageNumber}` });
    }

    return (
        <Button
            className={pageNumber === "..." || pageNumber === page ? "pointer-events-none" : undefined}
            onClick={pageNumber !== "..." && pageNumber != page ? handleClick : undefined}
            active={pageNumber === page}
            disabled={(pageNumber === "«" && page === 1) || (pageNumber === "»" && page === totalPages)}
            size="sm"
        >
                {pageNumber}
        </Button>
    );
}

type PaginationControlsProps = {
    page: number,
    pageSize: number,
    total: number,
}

const PaginationControls = (props: PaginationControlsProps) => {
    const { page, pageSize, total } = props;
    const pages = usePagination({page, pageSize, total});
    const totalPages = Math.ceil(total / pageSize);

    return (
        <div className="flex justify-center items-center mb-12">
            <Pagination>
                <PaginationButton
                    pageNumber="«"
                    page={page}
                />
                <>
                {
                    pages.map((pageNumber: PageNumber, i) =>
                        <PaginationButton
                            key={i}
                            pageNumber={pageNumber}
                            page={page}
                        />
                    )
                }
                </>
                <PaginationButton
                    pageNumber="»"
                    page={page}
                    totalPages={totalPages}
                />
            </Pagination>
        </div>
    )
}

export default PaginationControls