import { Wanted } from "../types";

type getWantedParameters = {
    pageSize?: number,
    page?: number,
    sort_on?: 'publication' | 'modified',
    sort_order?: 'desc' | 'asc',
    title?: string,
    field_offices?: string,
    person_classification?: 'Main' | 'Victim' | 'Accomplice',
    status?: 'na' | 'captured' | 'recovered' | 'located' | 'surrendered' | 'deceased',
}

const getWanted = async (args?: getWantedParameters): Promise<Wanted> => {
    const params = new URLSearchParams(args as Record<string, string>);
    const res = await fetch(`https://api.fbi.gov/@wanted?${params.toString()}`)
    return await res.json();
}

export default getWanted;