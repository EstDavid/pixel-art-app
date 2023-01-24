const Row = ({ columns, onClick, rowNumber, color, showGrid }) => {

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

const Pixel = ({ showGrid, color, onClick, rowNumber, columnNumber }) => {
    // Each col element uses the w-auto bootstrap property to give all columns equal 
    // width inside each row
    // Padding and margin need to be set to 0
    return (
        <div
            id={`${rowNumber}-${columnNumber}`}
            className={`col w-auto p-0 m-0 ${showGrid ? 'border border-dark' : null}`}
            style={{ backgroundColor: `rgba(${color[rowNumber][columnNumber]})`,
        borderStyle: 'none' }}
            onClick={onClick} >
        </div>
    )
}

const Canvas = ({
        showGrid,
        colorMatrix,
        handlePixelClick,
    }) => {

    const rows = colorMatrix.length
    const columns = colorMatrix[0].length

    // Initializing the arrays to generate the rows and columns components
    const rowsArray = []
    const columnsArray = []

    for(let i = 0; i < rows; i += 1) {
        rowsArray.push(i)
    }

    for(let i = 0; i <  columns; i += 1) {
        columnsArray.push(i)
    }

    // The canvas is structured in the the following manner:
    // - Page level. It's a bootstrap 'col' element inside the page's main 'row' element
    // - Inside the canvas itself:
    //    - A 'row' element which contains all the rows
    //    - Each row contains all the individual 'Pixel' components
        return(
        <div id="canvas" className="col-8 p-2 border border-dark">
            {// The aspectRatio css property ensures that the main canvas row will have equal height as the width
            // imposed by the bootstrap grid layout
            }
            <div className="row m-0 border border-dark" style={{aspectRatio: '1', backgroundColor: `rgba(255,0,0,0.1)`}}>
                {rowsArray.map((row, index) => <Row key={index} showGrid={showGrid} columns={columnsArray} onClick={handlePixelClick} rowNumber={index} color={colorMatrix} />)}
            </div>
        </div>
    )
}

export default Canvas