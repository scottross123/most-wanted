import {CrimeImage} from "./crimeImage";

export type Artcrime = {
    id: string,
    uid: string,
    title: string,
    description: string,
    images: CrimeImage[]
    crimeCategory: string,
    maker: string,
    materials: string,
    measurements: string,
    period: string,
    additionalData: string,
    modified: string,
    publication: string,
    path: string
}

export type Artcrimes = {
    total: number,
    page: number,
    items: Artcrime[],
}