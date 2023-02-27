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

const colorPaletteExpanded = [
    [255, 255, 255], // White
    [0, 0, 0], // Black
    [0, 102, 153],
    [0, 153, 204],
    [0, 102, 204],
    [0, 51, 204],
    [0, 0, 255],
    [51, 51, 255],
    [51, 51, 204],
    [102, 0, 255],
    [153, 51, 255],
    [204, 0, 255],
    [204, 0, 204],
    [204, 0, 153],
    [204, 51, 153],
    [214, 0, 147],
    [204, 0, 102],
    [204, 0, 0],
    [255, 0, 0],
    [255, 51, 0],
    [204, 102, 0],
    [255, 153, 0],
    [204, 153, 0],
    [204, 204, 0],
    [153, 204, 0],
    [102, 153, 0],
    [0, 153, 0],
    [0, 128, 0],
    [0, 204, 0],
    [0, 204, 102],
    [0, 204, 153],
    [0, 153, 153]
]

const transparency = 1

// The colorPalette variable is exported with the parameter of transparency
export const colorPalette = colorPaletteExpanded.map(color => color.concat(transparency))

export const canvasSizes = [
    [8, 8],
    [12, 12],
    [16, 16],
    [32, 32]
]

export const imageFormatOptions = {
    rowName: 'image-format',
    title: 'File format',
    options: [
        { name: 'png', value: 'png' },
        { name: 'jpg', value: 'jpg' },
        { name: 'gif', value: 'gif' }
    ]
}

export const showGridOptions = {
    rowName: 'show-grid',
    title: 'Show grid',
    options: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
    ]
}

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

export const imageSavedDialogText = {
    index: 3,
    title: 'Image saved',
    message: 'Current image was saved',
    action: ''
}