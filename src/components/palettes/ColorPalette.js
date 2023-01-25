import {colorPalette } from '../../parameters'  // Palette of available colors to paint the image
import ColorSelector from '../buttons/ColorSelector'

// This component shows all the available colors in the form of squares (ColorSelector)
const ColorPalette = ({ handleColorChange }) => {
    return (
        <div className="col-12 col-lg-4 p-1">
            <div className="d-flex flex-wrap justify-content-center p-0 m-0" >
                {colorPalette.map((color, index) => {
                    return (
                        <ColorSelector
                            key={index}
                            color={color}
                            onClick={handleColorChange} />
                    )
                })}
            </div>
        </div>
    )
}

export default ColorPalette