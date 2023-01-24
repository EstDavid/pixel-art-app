import { useState } from 'react'
import { imageFormats, imageResetDialogText } from "../parameters"
import ImageResetDialog from "./ImageResetDialog"
import SaveFileDialog from "./SaveFileDialog"

const SaveFileMenu = ({ resetColorMatrix, saveImage }) => {
    const [showSaveFileDialog, setShowSaveFileDialog] = useState(false)

    const [currentFormat, setCurrentFormat] = useState(imageFormats[0])
    const [fileName, setFileName] = useState('')

    const handleFormatChange = (format) => {
        setCurrentFormat(format)
    }

    const handleFilenameChange = (event) => {
        const name = event.target.value
        setFileName(name)
    }

    const toggleFileDialog = () => {
        setShowSaveFileDialog(!showSaveFileDialog)
    }

    return (
        <div className="col-4 p-1">
            <div className="row justify-content-center">
                <button
                    type="button"
                    className="btn btn-outline-primary w-75 m-2"
                    onClick={toggleFileDialog}
                ><i className="bi bi-download pe-2"></i>Save Image</button>
                {showSaveFileDialog ? 
                    <SaveFileDialog 
                        saveImage={saveImage}
                        cancel={toggleFileDialog}
                        handleFormatChange={handleFormatChange}
                        handleFilenameChange={handleFilenameChange}
                        currentFormat={currentFormat}
                        fileName={fileName}
                    /> 
                    : 
                    null
                }
            </div>
            <div className="row justify-content-center">
                <button
                    type="button"
                    className="btn btn-outline-secondary w-75 m-2"
                    data-bs-toggle="modal" 
                    data-bs-target={`#imageResetModal-${imageResetDialogText.index}`}
                ><i className="bi bi-trash pe-2"></i>Reset Image</button>
            </div>
            <ImageResetDialog 
                onAccept={resetColorMatrix}
                dialogText={imageResetDialogText}
            />
        </div>
    )
}

export default SaveFileMenu