import { useState } from 'react'
import { imageFormatOptions, imageResetDialogText, imageSavedDialogText } from "../../parameters"
import SaveFileButton from '../buttons/SaveFileButton'
import ImageResetDialog from "../dialogs/ImageResetDialog"
import SaveFileDialog from "../dialogs/SaveFileDialog"

const ActionsPalette = ({ resetColorMatrix, saveImage }) => {
    const [showSaveFileDialog, setShowSaveFileDialog] = useState(false)

    const [fileFormat, setFileFormat] = useState(imageFormatOptions.options[0].value)
    const [fileName, setFileName] = useState('')
    const [showGrid, setShowGrid] = useState(false)

    const handleFormatChange = (format) => {
        setFileFormat(format)
    }

    const handleShowGridChange = (show) => {
        setShowGrid(show)
    } 

    const handleFilenameChange = (event) => {
        const name = event.target.value
        setFileName(name)
    }

    const toggleFileDialog = () => {
        setShowSaveFileDialog(!showSaveFileDialog)
    }

    const handleSaveImage = () => {
        saveImage(fileName, fileFormat, showGrid)
        setShowSaveFileDialog(false)
    }

    return (
        <div className="col-12 col-lg-3 p-1 justify-content-center">
            <div className="row justify-content-center">
                <SaveFileButton
                    name={'Save Image'}
                    onClick={toggleFileDialog}
                    icon={<i className="bi bi-download pe-2"></i>}
                    classOptions={'btn-outline-primary w-75'}
                />
                {showSaveFileDialog ? 
                    <SaveFileDialog 
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
            <SaveFileButton 
                name={'Reset Image'}
                target={`#imageResetModal-${imageResetDialogText.index}`}
                icon={<i className="bi bi-trash pe-2"></i>}
                classOptions={'btn-outline-secondary w-75'}
                />
            </div>
            <ImageResetDialog 
                onAccept={resetColorMatrix}
                dialogText={imageResetDialogText}
            />
            <ImageResetDialog
                dialogText={imageSavedDialogText} />
        </div>
    )
}

export default ActionsPalette