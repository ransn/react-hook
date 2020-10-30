import React from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'
const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
            primaryImg="https://via.placeholder.com/100" 
            secondaryImg="https://via.placeholder.com/200" />
        </div>
    ) 
};
export default ImageChangeOnMouseOver;