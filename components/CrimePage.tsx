import {Artcrime, CrimeImage} from "../types";
import {Card, Table} from "react-daisyui";
import { Link } from "react-daisyui";

interface CrimePageProps extends Artcrime {
    fixedImages: CrimeImage[]
}

const CrimePage = (props: CrimePageProps) => {
    const {
        title,
        crimeCategory,
        description,
        additionalData,
        materials,
        maker,
        period,
        measurements,
        path,
        modified,
        fixedImages,
    } = props;

    const propertiesToCell = {
        "Category": crimeCategory,
        "Materials": materials,
        "Maker": maker,
        "Period": period,
        "Measurements": measurements,
        "Last Modified": modified // TODO transform into readable date
    };

    return (
        <div className="flex w-full gap-16 justify-center">
            <Card className="flex-1 p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Card.Image
                    className="m-auto"
                    src={fixedImages[0].original}
                    alt="picture of artwork"
                />
                <figcaption className="text-sm italic text-center">{fixedImages[0].caption}</figcaption>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{description}</p>
                    <p>{additionalData}</p>
                    <Link href={`https://artcrimes.fbi.gov/${path}`} target="_blank">NSAF Link</Link>
                    <Link href='https://tips.fbi.gov/' target="_blank">Submit a tip</Link>
                </Card.Body>
            </Card>

            <Card className="flex-1 flex flex-col justify-center p-8">
                <Table className="w-full">
                    <Table.Body>
                        {
                            Object.entries(propertiesToCell).map((row: [string, string]) => {
                                if (row[1] === null) return;
                                return (
                                    <Table.Row key={row[0]}>
                                        <span>{row[0]}</span>
                                        <span>{row[1]}</span>
                                    </Table.Row>
                                    )
                                }
                            )
                        }
                    </Table.Body>
                </Table>
            </Card>
        </div>
    );
}

export default CrimePage;