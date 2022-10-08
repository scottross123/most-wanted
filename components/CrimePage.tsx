import {Artcrime, CrimeImage, WantedPerson} from "../types";
import {Button, Card, Carousel, Table} from "react-daisyui";
import { Link } from "react-daisyui";
import getArtImages from "../utils/getArtImages";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import ImageCarousel from "./ImageCarousel";

// TODO maybe write a more explicit type definition for this
interface CrimePageProps extends Partial<Artcrime>, Partial<WantedPerson> {
    crimeType: 'artcrime' | 'wanted',
    images: CrimeImage[]
}

const CrimePage = (props: CrimePageProps) => {
    const {
        title,
        crimeCategory,
        description,
        additionalData,
        details,
        materials,
        remarks,
        maker,
        period,
        measurements,
        path,
        modified,
        images,
        publication,
        warning_message,
        additional_information,
        caution,
        crimeType,
        age_max,
        age_min,
        height_max,
        height_min,
        weight_max,
        weight_min,
        aliases,
        legat_names,
        person_classification,
        ncic,
        eyes_raw,
        hair_raw,
        sex,
        race_raw,
        nationality,
        build,
        scars_and_marks,
        complexion,
        occupations,
        possible_countries,
        possible_states,
        status
    } = props;

    const fixedImages = crimeType === 'artcrime' ? getArtImages(images) : images;
    const router = useRouter();

    const propertiesToCell = {
        "Category": crimeCategory,
        "Materials": materials,
        "Maker": maker,
        "Period": period,
        "Measurements": measurements,

        "Aliases": aliases?.join(", "),
        "Legal Names": legat_names?.join(", "),
        "Status": status,
        "Classification": person_classification,
        "NCIC": ncic,
        "Age": `${age_min} - ${age_max}`,
        "Weight": `${weight_min} lb - ${weight_max} lb`,
        "Height": `${height_min} in - ${height_max} in`, // TODO add getRange function
        "Eyes": eyes_raw,
        "Hair": hair_raw,
        "Build": build,
        "Sex": sex,
        "Race": race_raw,
        "Nationality": nationality,
        "Scars and Marks": scars_and_marks,
        "Complexion": complexion,
        "Occupations": occupations,
        "Possible Countries": possible_countries?.join(", "),
        "Possible States": possible_states?.join(", "),

        "Last Modified": modified, // TODO transform into readable date, maybe using that javascript library?
        "Publication": publication,


    };

    const cardParagraphs = [
        `<p class="text-warning font-extrabold">${warning_message}</p>`,
        description,
        additionalData,
        additional_information,
        details,
        caution,
        remarks
    ]

    const carouselButtonStyle = (value: string) => {
        return <Button size="xs" color="ghost">{value}</Button>
    }

    return (
        <div className="flex w-full gap-16 justify-center">
            <Card className="flex-1 p-4">
                <ImageCarousel images={fixedImages} />
                <Card.Body className="grow">
                    <Card.Title>{title}</Card.Title>
                    <>
                        {
                            cardParagraphs.map((paragraph, i) => {
                                if (paragraph === undefined) return;
                                return <p key={i} className="text-xs" dangerouslySetInnerHTML={{__html: paragraph}}/>;
                                }
                            )
                        }
                    </>
                    <Link className="text-xs" href={`https://artcrimes.fbi.gov/${path}`} target="_blank">NSAF Link</Link>
                    <Link className="text-xs" href='https://tips.fbi.gov/' target="_blank">Submit a tip</Link>
                    <Button
                        className='mt-4 w-1/3 normal-case'
                        variant="outline"
                        size='xs'
                        onClick={() => router.back()}
                    >
                        Go back to results
                    </Button>
                </Card.Body>
            </Card>

            <div className="border rounded-lg h-fit flex-1">
                <Table className="w-full" compact>
                    <Table.Body>
                        {
                            Object.entries(propertiesToCell).map((row: [string, string | undefined]) => {
                                if (row[1] === null || row[1] === undefined) return;
                                return (
                                    <Table.Row key={row[0]}>
                                        <span className="p-4 text-xs">{row[0]}</span>
                                        <span className="p-4 text-xs">{row[1]}</span>
                                    </Table.Row>
                                    )
                                }
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default CrimePage;