import fbi from "../assets/images/fbi.webp";
import Link from "next/link";
import { Card } from "react-daisyui";

type CrimeCardProps = {
    uid: string,
    title: string,
    thumb: string,
    url: 'art-crimes' | 'wanted',
    page: number,
}

const CrimeCard = (props: CrimeCardProps) => {
    const { uid, title, thumb, url, page } = props;
    // TODO add shadows to card
    return (
        <Link href={`/${url}/${uid}`}
        >
            <Card
                className="cursor-pointer border-b-base-200 border-b-4 p-4 transition transform hover:boxy-shadow "
                compact
            >
                <Card.Image
                    className="m-auto h-32 w-28"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src=`${fbi.src}`;
                    }}
                    src={thumb}
                    alt="crime image"
                />
                <Card.Body className="text-center">
                <Card.Title className="line-clamp-2 text-sm" tag={"h4"}>
                    {title}
                </Card.Title>
                    {/*<p className="">{description}</p> */}
                </Card.Body>
            </Card>
        </Link>
    );
}

export default CrimeCard;