// This component is the building block of the drawing area, the 'Canvas' component
const Pixel = ({ showGrid, color, onClick, rowNumber, columnNumber }) => {
    // Each col element uses the w-auto bootstrap property to give all columns equal width inside each row
    // Padding and margin need to be set to 0
    // The showGrid boolean allows to choose to display the canvas grid lines or not when saving the image
    return (
        <div
            id={`${rowNumber}-${columnNumber}`}
            className={`col w-auto p-0 m-0 ${showGrid ? 'border border-dark' : null}`}
            style={{
                backgroundColor: `rgba(${color[rowNumber][columnNumber]})`,
                borderStyle: 'none'
            }}
            onClick={onClick} >
        </div>
    )
}

export default Pixel