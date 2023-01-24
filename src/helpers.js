export const compareColors = (color1, color2) => {
    // Since color is stored as an array, the arrays are converted to strings for comparison
    return color1.toString() === color2.toString()
}

export const fillColor = (color, colorMatrix, row, column) => {
    // Saving the original color of the pixel clicked by the user
    // This variable will be used to check adjacent pixels with same color
    const previousColor = colorMatrix[row][column]

    // Getting the size of the matrix
    const rows = colorMatrix.length
    // A square matrix is assumed
    const columns = rows

    // Creating a copy of the input matrix
    const newMatrix = [...colorMatrix]

    // If the new color is the same as the color that the clicked pixel
    // already has, then return the matrix without changes
    if(compareColors(previousColor, color)) return newMatrix

    // The pixelsToColor array will be populated with the coordinates all the 
    // pixels connected with pixel which was clicked by the user
    const pixelsToColor = [[row, column]]

    // The following while loop:
    // - Updates the color of all the pixels in the pixelsToColor variable
    // - Checks for the adjancent pixels and pushes it to the pixelsToColor array if 
    //   they are of the same color as the pixel that was clicked by the user
    // - Removes the pixel which was updated
    // pixels referenced in the 
    while(pixelsToColor.length > 0) {
        // Getting coordinates of current pixel and removing cit pixel from pixelsToColor
        const [currentRow, currentColumn] = pixelsToColor.pop()

        // console.log(pixelsToColor, pixelsToColor.length, currentRow, currentColumn, rows, columns)

        // Updating color of the current pixel
        newMatrix[currentRow][currentColumn] = color

        // The following nested for loop goes around the coordinates
        // of the adjacent pixels
        // Adjacent means that they have coinciding sides
        for(let i = - 1; i <= + 1; i += 1) {
            for(let j = - 1; j <= + 1; j += 1 ) {               
                // Skip when the candidate pixel is diagonal to the current pixel, or is the current pixel
                if(Math.abs(i) === Math.abs(j)) continue

                const candidateRow = currentRow + i
                const candidateColumn = currentColumn + j

                // Skip when the pixel is in the limit of the color matrix
                if(candidateRow < 0 || candidateRow >= rows || candidateColumn < 0 || candidateColumn >= columns) continue

                // There's a max of four possible adjacent pixels (up, down, left, right)
                const candidatePixelColor = newMatrix[candidateRow][candidateColumn]
                // Checking if the candidate pixel has the same color as the pixel that was clicked
                if(compareColors(candidatePixelColor, previousColor)) {
                        // Add the candidate pixel's coordinates to the pixelsToColor array
                    pixelsToColor.push([candidateRow, candidateColumn])
                }
            }
        }       
    }

    return newMatrix
}