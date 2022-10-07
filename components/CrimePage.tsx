import {Artcrime, CrimeImage, WantedPerson} from "../types";
import {Button, Card, Table} from "react-daisyui";
import { Link } from "react-daisyui";
import getArtImages from "../utils/getArtImages";
import {useRouter} from "next/router";

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
        materials,
        maker,
        period,
        measurements,
        path,
        modified,
        images,
        publication,
        crimeType,
    } = props;

    const fixedImages = crimeType === 'artcrime' ? getArtImages(images) : images;
    const router = useRouter();

    const propertiesToCell = {
        "Category": crimeCategory,
        "Materials": materials,
        "Maker": maker,
        "Period": period,
        "Measurements": measurements,
        "Last Modified": modified, // TODO transform into readable date, maybe using that javascript library?
        "Publication": publication,
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

            <Card className="flex-1 flex flex-col justify-center p-8">
                <Table className="w-full">
                    <Table.Body>
                        {
                            Object.entries(propertiesToCell).map((row: [string, string | undefined]) => {
                                if (row[1] === null || row[1] === undefined) return;
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