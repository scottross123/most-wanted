import fbi from "../assets/images/fbi.webp";
import Link from "next/link";
import { Card } from "react-daisyui";
import {useRouter} from "next/router";

type CrimeCardProps = {
    uid: string,
    title: string,
    thumb: string,
    url: 'art-crimes' | 'wanted',
    page: number,
}

const CrimeCard = (props: CrimeCardProps) => {
    const { uid, title, thumb, url, page } = props;
    const router = useRouter();

    return (
        <Card
            className="bg-secondary cursor-pointer border-secondary-content border-b-4 border-r-4 p-4 transition transform hover:boxy-shadow text-secondary-content"
            compact
            onClick={() => router.push(`/${url}/${uid}`)}
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
            </Card.Body>
        </Card>
    );
}

export default CrimeCard;