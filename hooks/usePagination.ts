export type PageNumber = number | "«" | "»" | "...";

type UsePaginationProps = {
    page: number,
    pageSize: number,
    total: number,
}

const dots = '...';

const getPages = (length: number, inc: number = 1) =>
    Array.from({ length }, (_, i) => i + inc)

const usePagination = (props: UsePaginationProps): PageNumber[] => {
    const { page, pageSize, total } = props;
    const totalPages = Math.ceil(total / pageSize);
    //console.log("total pages", totalPages)
    //console.log("page", page);
    if (page < 9) return [1, 2, 3, 4, 5, 6, 7, 8, 9, dots, totalPages];

    const leftPages = Array(3).fill(page).map((pageNumber, i) => page - 1 - i).reverse();
    //console.log("left apges", leftPages)
    const rightPages = Array(3).fill(page).map((pageNumber, i) => page + 1 + i);
    //console.log("right pages", rightPages)

    if (page < totalPages - 7)
        return [
            1,
            dots,
            ...leftPages,
            page,
            ...rightPages,
            dots,
            totalPages
        ];

    return [1, dots, ...getPages(9, totalPages - 8)];
}

export default usePagination;