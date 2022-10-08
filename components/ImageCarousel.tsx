import {CrimeImage} from "../types";
import {useState} from "react";
import {Button} from "react-daisyui";
import Image from "next/image";

type ImageCarouselProps = {
    images: CrimeImage[]
}

const ImageCarousel = (props: ImageCarouselProps) => {
    const { images } = props;
    const [currentImage, setCurrentImage] = useState<number>(0);

    return (
        <div className="flex flex-col items-center grow-0">
            <div className="">
                <figure className="flex flex-col gap-2 p-4">
                    <Image
                        src={images[currentImage].original}
                        width={200}
                        height={250}
                        alt="picture of artwork"
                    />
                    <figcaption className="text-sm italic text-center">{images[currentImage].caption}</figcaption>
                </figure>
            </div>

            <div className="flex justify-center items-center">
                {
                    images.map((image: CrimeImage, i) => {
                        if (images.length === 1) return;
                        return (
                            <Button
                                key={i}
                                size="xs"
                                color="ghost"
                                onClick={() => setCurrentImage(i)}
                            >
                                {i + 1}
                            </Button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ImageCarousel;