import { Artcrimes } from "../types";

type getArtcrimesParameters = {
    pageSize?: number,
    page?: number,
    sortOn?: 'publication' | 'modified',
    sortOrder?: 'desc' | 'asc',
    title?: string,
}

const getArtcrimes = async (args?: getArtcrimesParameters): Promise<Artcrimes> => {
    const params = new URLSearchParams(args as Record<string, string>);
    const res = await fetch(`https://api.fbi.gov/@artcrimes?${params.toString()}`);
    const data = await res.json();

    return data;
}
export default getArtcrimes;