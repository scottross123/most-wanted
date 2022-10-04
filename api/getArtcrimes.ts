import { Artcrimes } from "../types";

type getArtcrimesParameters = {
    pageSize?: number,
    page?: number,
    sortOn?: 'publication' | 'modified',
    sortOrder?: 'desc' | 'asc',
    title?: string,
}

const getArtcrimes = async (pageSize: number, pageNumber: number): Promise<Artcrimes> => {
    const res = await fetch(`https://api.fbi.gov/@artcrimes?pageSize=${pageSize}&page=${pageNumber}`);
    const data = await res.json();

    return data;
}
export default getArtcrimes;