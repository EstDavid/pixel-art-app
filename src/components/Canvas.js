import PixelsRow from "./canvas/PixelsRow"

// Component that contains the image and is made of rows of Pixel components
const Canvas = ({
        showGrid,
        colorMatrix,
        handlePixelClick,
    }) => {

    // Getting the number of rows and columns from the size of the matrix
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
        <div id="canvas" className="col-12 col-lg-4 p-2">
            {// The aspect-ratio css property ensures that the main canvas row will have equal height as the width
            // imposed by the bootstrap grid layout
            // This property is applied in the .canvas-container class
            }
            <div className="row m-0 p-0 order-0 border border-dark canvas-container">
                {rowsArray.map((row, index) => {
                    return (
                        <PixelsRow
                            key={index}
                            showGrid={showGrid}
                            columns={columnsArray}
                            onClick={handlePixelClick}
                            rowNumber={index}
                            color={colorMatrix}
                        />)}
                    )
                }
            </div>
        </div>
    )
}

export default Canvas