import {useState, useEffect} from 'react'
import { toBlob } from 'dom-to-image'
import Canvas from './components/Canvas'
import ColorPalette from './components/ColorPalette'
import SaveFileMenu from './components/SaveFileMenu'
import { ToolsPalette } from './components/ToolsPalette'
import { fillColor } from './helpers'
import {tools, colorPalette, canvasSizes} from './parameters'

function App() {
  const [selectedCanvasSize, setCanvasSize] = useState(canvasSizes[0])
  const [selectedColor, setColor] = useState(colorPalette[0])
  const [selectedTool, setTool] = useState(tools[0])


  // The borders of the canvas grid are shown for edition and hidden for saving the image
  const [savingImage, setSavingImage] = useState(true)

  // File name and format
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('')

  // For future functionalities, the user could also set the initial background color
  const [backgroundColor, setBackgroundColor] = useState(colorPalette[0])

  // Generating the initial color matrix
  const [rows, columns] = selectedCanvasSize
  const initialColorMatrix = []

      for(let i = 0; i < rows; i+=1) {
      const rowArray = []
      for(let j = 0; j < columns; j+=1) {
          rowArray.push(backgroundColor)
      }
      initialColorMatrix.push(rowArray)
  }

  // Function to erase the current image
  const resetColorMatrix = () => {
    setColorMatrix(initialColorMatrix)
  }

  // If the canvas size is changed, the color matrix is reset (image is erased)
  useEffect(() => {
      resetColorMatrix()
  }, [selectedCanvasSize])

  const [colorMatrix, setColorMatrix] = useState(initialColorMatrix)


  const handleColorChange = (color) => {
    setColor(color) 
  }

  const handleCanvasSizeChange = (size) => {
    setCanvasSize(size)
  }

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
        setColorMatrix(fillColor(selectedColor, colorMatrix, row, column))
    } else {
        const newColorMatrix = [...colorMatrix]
        newColorMatrix[row][column] = selectedColor
        setColorMatrix(newColorMatrix)
    }
  }

  // This useEffect hook saves the image when 'savingImage' is set to true  
  useEffect(() => {

    if(savingImage) {
      const element = document.getElementById('canvas')

      toBlob(element)
        .then(function (imageBlob) {
          const dataUrl = URL.createObjectURL(imageBlob)

          // An if-statement is needed to prevent the download dialog from 
          // appearing when the user hasn't entered file info
          if (fileName !== '' && fileFormat !== '') {
            const link = document.createElement("a")
            link.download = `${fileName}.${fileFormat}`
            link.href = dataUrl
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        })

      setSavingImage(false)
    }
  }, [savingImage])

  
  const saveImage = (event, name, format) => {
    event.preventDefault()

    if(name === '')  return

    setFileName(name)
    setFileFormat(format)
    setSavingImage(true)
    
  }

  return (
    <div className="App">
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
            <Canvas
              showGrid={!savingImage}
              colorMatrix={colorMatrix}
              handlePixelClick={handlePixelClick}
            />
          <ToolsPalette
            handleCanvasSize={handleCanvasSizeChange}
            canvasSize={selectedCanvasSize}
            selectedColor={selectedColor}
            handleToolSelection={handleToolSelection}
            selectedTool={selectedTool} />
        </div>
        <div className="row align-items-start">
          <ColorPalette
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
          <SaveFileMenu 
            resetColorMatrix={resetColorMatrix}
            saveImage={saveImage}
             />
        </div>
      </div>
    </div>
  );
}

export default App;
