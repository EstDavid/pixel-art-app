import {useState, useEffect} from 'react'
import Canvas from './components/Canvas'
import ColorPalette from './components/palettes/ColorPalette'
import ActionsPalette from './components/palettes/ActionsPalette'
import ToolsPalette from './components/palettes/ToolsPalette'
import { fillColor, generateDownloadImage } from './helpers'
import {tools, colorPalette, canvasSizes} from './parameters'
import Title from './components/Title'

function App() {
  /////////////////////
  // STATE VARIABLES //
  /////////////////////

  // Initializing canvas size, selected color and tool state variables
  const [selectedCanvasSize, setCanvasSize] = useState(canvasSizes[0])
  const [selectedColor, setColor] = useState(colorPalette[0])
  const [selectedTool, setTool] = useState(tools[0])


  // The borders of the canvas grid are shown for edition
  // The user can choose to have the grid showing or not in the downloaded image
  const [savingImage, setSavingImage] = useState(true)
  const [showGrid, setShowGrid] = useState(true)

  // File name and format state variables
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('')

  // For future functionalities, the user could also set the initial background color
  const [backgroundColor, setBackgroundColor] = useState(colorPalette[0])

  // Generating the initial color matrix
  // A square matrix is assumed (same number of rows and columns)
  const [rows, columns] = selectedCanvasSize

  // Creating blank matrix with the default background color
  const initialColorMatrix = []

  for(let i = 0; i < rows; i+=1) {
    const rowArray = []
    for(let j = 0; j < columns; j+=1) {
        // 
        rowArray.push(backgroundColor)
    }
  initialColorMatrix.push(rowArray)
  }

  // Initializing color matrix state variable with the values of the color of each pixel
  const [colorMatrix, setColorMatrix] = useState(initialColorMatrix)


  /////////////////////
  //   EFFECT HOOKS  //
  /////////////////////

  // If the canvas size is changed, the color matrix is reset (image is erased)
  useEffect(() => {
    resetColorMatrix()
  }, [selectedCanvasSize])

  // This useEffect hook saves the image when 'savingImage' is set to true 
  // It also hides the grid if the user wants to sabe the image without grid 
  useEffect(() => {

    if (savingImage) {
      // Retrieve canvas element
      const element = document.getElementById('canvas')

      // Save image
      generateDownloadImage(element, fileName, fileFormat)

      // Show grid again for edition
      setShowGrid(true)

      // Saving image is set to false.
      // The rest of options (format, show grid, file name) remain unchanged
      setSavingImage(false)
    }
  }, [savingImage])


  /////////////////////
  //    FUNCTIONS    //
  /////////////////////

  // Function to erase the current image
  const resetColorMatrix = () => {
    setColorMatrix(initialColorMatrix)
  }

  // Handling change in selected color
  const handleColorChange = (color) => {
    setColor(color) 
  }

  // Handling change in canvas size
  const handleCanvasSizeChange = (size) => {
    setCanvasSize(size)
  }

  // Handling change in selected tool
  const handleToolSelection = (tool) => {
    setTool(tool)
  }

  // This function handles the click on each 'Pixel' element
  const handlePixelClick = (event) => {
    // Getting the row and column number from the element id
    const coordinates = event.target.id.split('-')
    const row = parseInt(coordinates[0])
    const column = parseInt(coordinates[1])

    if(selectedTool.name === 'Fill') {
        // If the selected tool is 'Fill', the fillColor helper function is called
        // to get the new resulting color matrix
        setColorMatrix(fillColor(selectedColor, colorMatrix, row, column))
    } else {
        // Otherwise a copy of the current matrix is generated and 
        // the color value of the pixel that was clicked is updated
        const newColorMatrix = [...colorMatrix]
        newColorMatrix[row][column] = selectedColor
        setColorMatrix(newColorMatrix)
    }
  }
  
  // This function handles saving the image
  const saveImage = (name, format, show) => {
    // Return if the user didn't enter a file name
    if(name === '') return

    // Set the grid to show (show === true) or not show (show === false) on the saved image
    setShowGrid(show)

    // Set the name of the file
    setFileName(name)

    // Set the file format
    setFileFormat(format)

    // Set the savingImage state variable to true in order to trigger the corresponding effect hook
    setSavingImage(true)
  }

  return (
    <div className="App">
      <Title />
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-start">
          <Canvas
            showGrid={!savingImage || showGrid}
            colorMatrix={colorMatrix}
            handlePixelClick={handlePixelClick}
          />
          <ToolsPalette
            handleCanvasSize={handleCanvasSizeChange}
            canvasSize={selectedCanvasSize}
            selectedColor={selectedColor}
            handleToolSelection={handleToolSelection}
            selectedTool={selectedTool} />
          <ColorPalette
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
          <ActionsPalette 
            resetColorMatrix={resetColorMatrix}
            saveImage={saveImage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
