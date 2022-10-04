import { Artcrime } from "../types";

const getArtcrimeById = async (uid: string): Promise<Artcrime> => {
    const res = await fetch(`https://api.fbi.gov/@artcrimes/${uid}`);
    return await res.json();
}

export default getArtcrimeById;