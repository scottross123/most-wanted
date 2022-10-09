import { Card, Button } from 'react-daisyui';
import {Artcrime, WantedPerson} from "../types";
import fbi from "../assets/images/fbi.webp";
import {useRouter} from "next/router";

type LandingCardProps = {
    crime: Artcrime | WantedPerson,
    url: string
}

const LandingCard = (props: LandingCardProps) => {
    const { crime, url } = props;
    const { title, images, description } = crime;
    const router = useRouter();
    const image = images[0].original;

    return (
        <Card className="flex-1 h-64" compact imageFull>
            <Card.Image
                className="overflow-hidden w-56"
                src={image}
                alt="crime image"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=`${fbi.src}`;
                }}
            />
            <Card.Body className="items-center text-center">
                <Card.Title tag="h2">{title}</Card.Title>
                <p>{description}</p>
                <Card.Actions className="justify-end">
                    <Button
                        variant="link"
                        onClick={() => router.push(`${url}`)}
                    >
                        Go to
                    </Button>
                </Card.Actions>
            </Card.Body>
        </Card>
    )
}

export default LandingCard;

