/*
the artcrimes api returns the wrong url for the images, should be artcrimes.fbi.gov not www.fbi.gov
this function transforms the urls so it works properly and returns the default image if its undefined
*/

import fbi from '../assets/images/fbi.webp';
import { CrimeImage } from '../types';

const getArtImages = (images: CrimeImage[] | undefined): CrimeImage[] => {
    console.log(images![0].original)
    if (images === undefined)
        return [
            {
                original: fbi.src,
                large: fbi.src,
                caption: fbi.src,
                thumb: fbi.src
            }
        ];

    return images.map((image: CrimeImage) => {
        const { original, large, caption, thumb } = image;
        console.log(original)
        return {
            original: `https://artcrimes${original.substring(11)}`,
            large: `https://artcrimes${large.substring(11)}`,
            caption: `https://artcrimes${caption.substring(11)}`,
            thumb: `https://artcrimes${thumb.substring(11)}`,
        };
    });
}

export default getArtImages;