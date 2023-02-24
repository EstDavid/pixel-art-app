import { useState } from 'react'
import { imageFormatOptions, imageResetDialogText, imageSavedDialogText } from "../../parameters"
import SaveFileButton from '../buttons/SaveFileButton'
import ModalDialog from "../dialogs/ModalDialog"
import SaveFileForm from "../inputs/SaveFileForm"

// This component handles the save file form and also allows the user to generate a new blank image
const ActionsPalette = ({ resetColorMatrix, saveImage }) => {
    // This state boolean controls showing or not showin the SaveFileForm component
    const [showSaveFileForm, setShowSaveFileForm] = useState(false)

    // State variables controlling the parameters of the file that will be saved (name, format grid lines)
    const [fileFormat, setFileFormat] = useState(imageFormatOptions.options[0].value)
    const [fileName, setFileName] = useState('')
    const [showGrid, setShowGrid] = useState(false)

    // Function handling the user selecting a different file format
    const handleFormatChange = (format) => {
        setFileFormat(format)
    }

    // Function handling the user choosing between showinfg or not showing grid lines in the saved image
    const handleShowGridChange = (show) => {
        setShowGrid(show)
    } 

    // Function handling the user keying the name of the file
    const handleFilenameChange = (event) => {
        const name = event.target.value
        setFileName(name)
    }

    // Function allowing to cancel or show the SaveFileForm component
    const toggleFileDialog = () => {
        setShowSaveFileForm(!showSaveFileForm)
    }

     // Function calling the saveImage function in the App component and hiding the form afterwards
     const handleSaveImage = () => {
        saveImage(fileName, fileFormat, showGrid)
        setShowSaveFileForm(false)
    }

    return (
        <div className="col-12 col-lg-4 order-3 p-1 justify-content-center">
            <div className="row justify-content-center">
                {/* Save image button which displays the SaveFileForm component*/}
                <SaveFileButton
                    name='Save Image'
                    onClick={toggleFileDialog}
                    icon={<i className="bi bi-download pe-2"></i>}
                    classOptions='btn-outline-primary w-75'
                />
                {showSaveFileForm ? 
                // SaveFileForm component
                <SaveFileForm 
                        saveImage={handleSaveImage}
                        cancel={toggleFileDialog}
                        handleFormatChange={handleFormatChange}
                        handleShowGridChange={handleShowGridChange}
                        handleFilenameChange={handleFilenameChange}
                        fileFormat={fileFormat}
                        showGrid={showGrid}
                        fileName={fileName}
                    /> 
                    : 
                    null
                }
            </div>
            <div className="row justify-content-center">
            {/* Reset image button which eliminates the content of the current image*/}
            <SaveFileButton 
                name='Reset Image'
                target={`#modalDialog-${imageResetDialogText.index}`}
                icon={<i className="bi bi-trash pe-2"></i>}
                classOptions='btn-outline-secondary w-75'
                />
            </div>
            <div className="row justify-content-center">
            {/* Reset image button which eliminates the content of the current image*/}
            <SaveFileButton 
                name='View on Github'
                linkUrl='https://github.com/EstDavid/pixel-art-app'
                icon={<i className="bi bi-github pe-2"></i>}
                classOptions='btn-outline-dark w-75 mt-4'
                />
            </div>
            {/* Dialog to confirm resetting of the image*/}
            <ModalDialog 
                onAccept={resetColorMatrix}
                dialogText={imageResetDialogText}
            />
            {/* Dialog to inform that the image was saved*/}
            <ModalDialog
                dialogText={imageSavedDialogText} />
        </div>
    )
}

export default ActionsPalette