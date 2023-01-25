import Pixel from "./Pixel"

const PixelsRow = ({ 
    columns,
    onClick,
    rowNumber,
    color,
    showGrid
}) => {

    // The row element uses the h-auto bootstrap property to give all rows equal 
    // height inside the main canvas row
    // Padding and margin need to be set to 0
    return (
        <div className="row h-auto p-0 m-0">
            {columns.map((row, index) =>
                <Pixel 
                    key={index}
                    showGrid={showGrid}
                    color={color}
                    onClick={onClick}
                    rowNumber={rowNumber}
                    columnNumber={index} />
            )}
        </div>
    )
}

export default PixelsRow