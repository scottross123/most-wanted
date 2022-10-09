import {Artcrime, CrimeImage, WantedPerson} from "../types";
import {Button, Card, Carousel, Table} from "react-daisyui";
import { Link } from "react-daisyui";
import getArtImages from "../utils/getArtImages";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import ImageCarousel from "./ImageCarousel";
import getRange from "../utils/getRange";

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
        status,
        subjects,
        dates_of_birth_used,
    } = props;

    const fixedImages = crimeType === 'artcrime' ? getArtImages(images) : images;
    const router = useRouter();

    const convertDate = (dateString: string | undefined) => {
        if (dateString === undefined) return;
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
    }

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
        "Age": getRange(age_min, age_max, 'age'),
        "Weight": getRange(weight_min, weight_max, 'weight'),
        "Height": getRange(height_min, height_max, 'height'),
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
        "Subjects": subjects?.join(", "),
        "Dates of Birth Used": dates_of_birth_used?.join(", "),
        // "Files": maybe list link to files later

        "Last Modified": convertDate(modified), // TODO transform into readable date, maybe using that javascript library?
        "Publication": convertDate(publication),


    };

    const cardParagraphs = [
        (warning_message === null || warning_message === undefined ? undefined : `<p class="text-warning font-extrabold">${warning_message}</p>`),
        description,
        additionalData,
        additional_information,
        details,
        caution,
        remarks
    ]

    const link = crimeType === 'artcrime' ? `https://artcrimes.fbi.gov/${path}` : `https://www.fbi.gov/${path}`

    return (
        <div className="flex w-full gap-16 justify-center">
            <Card className="flex-1 p-4 w-1/2 border border-secondary-content bg-secondary text-secondary-content">
                <ImageCarousel images={fixedImages} />
                <Card.Body className="">
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
                    <Link className="text-xs" href={link} target="_blank">Original Link</Link>
                    <Link className="text-xs" href='https://tips.fbi.gov/' target="_blank">Submit a tip</Link>
                    <Button
                        className='mt-4 w-1/3'
                        variant="outline"
                        size='xs'
                        onClick={() => router.back()}
                    >
                        Go back
                    </Button>
                </Card.Body>
            </Card>

            <div className="border rounded-lg h-fit flex-1 w-1/2 overflow-x-auto border-secondary-content ">
                <Table className="w-full max-w-4xl overflow-hidden bg-secondary text-secondary-content" compact>
                    <Table.Body className="bg-secondary">
                        {
                            Object.entries(propertiesToCell).map((row: [string, string | undefined]) => {
                                if (row[1] === null || row[1] === undefined) return;
                                return (
                                    <Table.Row className="break-words " key={row[0]}>
                                        <span className="break-all p-4 text-xs ">{row[0]}</span>
                                        <span className="break-all p-4 text-xs">{row[1]}</span>
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