import fbi from "../assets/images/fbi.webp";
import Link from "next/link";
import {Card} from "react-daisyui";

type CrimeCardProps = {
    uid: string,
    title: string,
    description: string,
    thumb: string,
    url: 'art-crimes' | 'wanted',
}

const CrimeCard = (props: CrimeCardProps) => {
    const { uid, title, description, thumb, url } = props;
    // TODO add shadows to card
    return (
        <Card
            className="bg-primary p-8 rounded-none"
            compact
        >
            <Card.Image
                className="m-auto max-h-36 m-w-28"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=`${fbi.src}`;
                }}
                src={thumb}
                alt="crime image"
            />
            <Card.Body className="text-center">
            <Card.Title tag={"h4"}>
                <Link href={`/${url}/${uid}`}>{title}</Link>
            </Card.Title>
                {/*<p className="">{description}</p> */}
            </Card.Body>
        </Card>
    );
}

export default CrimeCard;