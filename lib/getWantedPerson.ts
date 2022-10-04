import { WantedPerson } from "../types";

const getWantedPerson = async (uid: string): Promise<WantedPerson> => {
    const res: Response = await fetch(`https://api.fbi.gov/@wanted-person/${uid}`);
    return await res.json();
}

export default getWantedPerson;