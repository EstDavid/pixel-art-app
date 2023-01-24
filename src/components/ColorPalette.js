import {colorPalette } from '../parameters'

const ColorSelector = ({color, onClick}) => {
    return (
        <div
            className='p-1 m-2 border border-dark-subtle border-2'
            style={{ 
                backgroundColor: `rgba(${color})`,
                minWidth: 60, aspectRatio: '1',
            }}
            onClick={() => onClick(color)} >
        </div>
    )
}

const ColorPalette = ({ handleColorChange }) => {
    return (
        <div className="col-8 p-1 border border-dark">
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