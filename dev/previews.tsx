import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import PaginationPage from "../components/PaginationPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaginationPage">
                <PaginationPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;