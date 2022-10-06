import {Artcrimes} from "../types";

type getArtcrimesParameters = {
    pageSize?: number, // max page size is 60
    page?: number,
    sortOn?: 'publication' | 'modified',
    sortOrder?: 'desc' | 'asc',
    title?: string,
}

const getArtcrimes = async (args?: getArtcrimesParameters): Promise<Artcrimes> => {
    const params = new URLSearchParams(args as Record<string, string>);
    const res = await fetch(`https://api.fbi.gov/@artcrimes?${params.toString()}`);
    return await res.json();
}
export default getArtcrimes;