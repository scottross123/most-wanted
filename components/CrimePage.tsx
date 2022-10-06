import {Artcrime} from "../types";
import {Table} from "react-daisyui";
import Image from "next/image";

type CrimePageProps = Artcrime;

const CrimePage = (props: CrimePageProps) => {
    const {
        images,
        crimeCategory,
        description,
        additionalData,
        materials,
        maker,
        period,
        measurements,
        path,
        modified
    } = props;

    const propertiesToCell = {
        "Category": crimeCategory,
        "Materials": materials,
        "Maker": maker,
        "Period": period,
        "Measurements": measurements,
        "Modified": modified
    };

    return (
        <div className="flex">
            <div>

            </div>

            <div>
                <Table>
                    <Table.Body>
                        {
                            Object.entries(propertiesToCell).map((row: [string, string]) =>
                                <Table.Row key={row[0]}>
                                    <span>{row[0]}</span>
                                    <span>{row[1]}</span>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default CrimePage; //<Image src={images} />