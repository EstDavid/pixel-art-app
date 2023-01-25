import { imageFormatOptions, showGridOptions, imageSavedDialogText } from "../../parameters"
import SaveFileButton from "../buttons/SaveFileButton"
import FileNameInput from "../inputs/FileNameInput"
import OptionsRadioRow from "../inputs/OptionsRadioRow"

const SaveFileDialog = ({
    saveImage,
    cancel,
    handleFormatChange,
    handleShowGridChange,
    handleFilenameChange,
    fileFormat,
    showGrid,
    fileName
}) => {
    const handleSaveImage = (event) => {
        event.preventDefault()
        saveImage(fileName, fileFormat)
    }

    return (
        <form className="form-control w-75" aria-labelledby="btnGroupDrop1" >
            <OptionsRadioRow
                optionsObj={imageFormatOptions}
                selectedValue={fileFormat}
                onChange={handleFormatChange}
            />
            <OptionsRadioRow 
                optionsObj={showGridOptions}
                selectedValue={showGrid}
                onChange={handleShowGridChange}
            />
            <FileNameInput
                value={fileName}
                onChange={handleFilenameChange}
                placeholder='Image name'
            />
            <SaveFileButton 
                name="Save"
                // Only if the file name has been entered, the modal dilog of file save will appear
                target={fileName !== '' ? `#imageResetModal-${imageSavedDialogText.index}` : ''}
                classOptions="btn-primary px-3"
                onClick={handleSaveImage}
            />
            <SaveFileButton 
                name="Cancel"
                target=""
                classOptions="btn-secondary px-3"
                onClick={cancel}
            />
        </form>
    )
}

export default SaveFileDialog