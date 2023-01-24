export const tools = [
    {
        name: 'Paint',
        icon: 'bi bi-brush'
    },
    {
        name: 'Fill',
        icon: 'bi bi-paint-bucket'
    }
]

// colorPalettePure contains the RGB values of the palette colors without the transparency value
const colorPalettePure = [
    [255, 255, 255], // White
    [0, 0, 0], // Black
    [192, 0, 0], // Wine Red
    [255, 0, 0], // Red
    [255, 192, 0], // Orange
    [255, 255, 0], // Yellow
    [146, 208, 80], // Light Green
    [0, 176, 80], // Dark Green
    [0, 176, 240], // Sky Blue
    [0, 112, 192], // Ocean Blue
    [0, 32, 96], // Navy Blue
    [112, 48, 160] // Violet
]

const transparency = 1

// The colorPalette variable is exported with the parameter of transparency
export const colorPalette = colorPalettePure.map(color => color.concat(transparency))

export const canvasSizes = [
    [4, 4],
    [8, 8],
    [16, 16],
    [32, 32]
]

export const imageFormats = [
    'png',
    'jpg',
    'gif'
]

export const canvasSizeChangeDialogText = {
    index: 1,
    title: 'Canvas size change',
    message: 'Changing the canvas will erase the current image. Are you sure?',
    action: 'Change Canvas'
}

export const imageResetDialogText = {
    index: 2,
    title: 'Image reset',
    message: 'Current image will be erased. Are you sure?',
    action: 'Reset Image'
}