import {CrimeImage} from "./crimeImage";

export type WantedPerson = {
    id: string,
    uid: string,
    title: string,
    description: string,
    images: CrimeImage[],
    files:
        {
            url: string,
            name: string
        }[],
    warning_message: string,
    remarks: string,
    details: string,
    additional_information: string,
    caution: string,
    reward_text: string,
    reward_min: number,
    reward_max: number,
    dates_of_birth_used: string[]
    place_of_birth: string,
    locations: string[]
    field_offices: string[]
    legat_names: [],
    status: string,
    person_classification: string,
    ncic: string,
    age_min: number,
    age_max: number,
    weight_min: number,
    weight_max: number,
    height_min: number,
    height_max: number,
    eyes: string,
    hair: string,
    build: string,
    sex: string,
    race: string,
    eyes_raw: string,
    hair_raw: string,
    race_raw: string,
    aliases: string[],
    nationality: string,
    scars_and_marks: string,
    complexion: string,
    occupations: string,
    possible_countries: string[],
    possible_states: string[],
    modified: string,
    publication: string,
    path: string,
    url: string,
    languages: string
}

export type Wanted = {
    total: number,
    page: number,
    items: WantedPerson[],
}

