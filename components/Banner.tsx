import overlayImage from "../assets/images/overlay.jpeg";
import fbi from "../assets/images/fbi.webp"
import {Button, ButtonGroup, Hero} from "react-daisyui";
import Image from "next/image";
import {useRouter} from "next/router";

const Banner = () => {
    const router = useRouter();

    return(
        <Hero
            className="h-128"
            style={{
                backgroundImage: `url(${overlayImage.src})`,
            }}
        >
            <Hero.Overlay className="bg-opacity-30" />
            <Hero.Content className="text-white">
                <Image
                    src={fbi.src}
                    width={250}
                    height={250}
                    alt="fbi logo"
                />
                <div className="ml-8 max-w-md">
                    <h1 className="text-4xl font-bold">FBI&apos;s Most Wanted</h1>
                    <p className="text-sm py-6">
                        This app use the FBI&apos;s public API to fetch and display data on current crimes and wanted people.
                        Go to the &apos;Art Crimes&apos; or &apos;Most Wanted&apos; tabs to browse, and click on a card
                        to see more details. This app is open source and you can view the repo or raise an issue by clicking
                        the octocat icon in the navigation bar.
                    </p>

                    <ButtonGroup>
                        <Button onClick={() => router.push('/art-crimes')} size="sm" color="primary">View Art Crimes</Button>
                        <Button onClick={() => router.push('/wanted')} size="sm" color="primary">View Wanted Persons</Button>
                    </ButtonGroup>
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default Banner;