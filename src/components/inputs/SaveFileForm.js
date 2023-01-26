import { imageFormatOptions, showGridOptions, imageSavedDialogText } from "../../parameters"
import SaveFileButton from "../buttons/SaveFileButton"
import FileNameInput from "../inputs/FileNameInput"
import OptionsRadioRow from "../inputs/OptionsRadioRow"

// The SaveFileForm component is displayed when the user clicks on the 'Save Image' button in the ActionsPalette
// The props passed to this component are handled in the ActionsPalette component
const SaveFileForm = ({
    saveImage, // Function from the App component which triggers saving the file
    cancel, // Function from the ActionsPalette component which closes the form
    handleFormatChange, // Function to handle change of file format option
    handleShowGridChange, // Function to handle change of show/no show grid lines option
    handleFilenameChange, // Function to handle user entering the file name
    fileFormat, // Current selected file format
    showGrid, // Current selected show/no show grid lines state
    fileName // Current file name
}) => {
    const handleSaveImage = (event) => {
        event.preventDefault()
        saveImage(fileName, fileFormat)
    }

    return (
        <form className="form-control w-75" aria-labelledby="btnGroupDrop1" >
            {/* Image format radio row*/}
            <OptionsRadioRow
                optionsObj={imageFormatOptions}
                selectedValue={fileFormat}
                onChange={handleFormatChange}
            />
            {/* Show/no show grid lines radio row*/}
            <OptionsRadioRow 
                optionsObj={showGridOptions}
                selectedValue={showGrid}
                onChange={handleShowGridChange}
            />
            {/* File name input field*/}
            <FileNameInput
                value={fileName}
                onChange={handleFilenameChange}
                placeholder='Image name'
            />
            {/* Save (download) file button*/}
            <SaveFileButton 
                name='Save'
                // Only if the file name has been entered, the modal dialog of file save will appear
                target={fileName !== '' ? `#modalDialog-${imageSavedDialogText.index}` : ''}
                classOptions='btn-primary px-3'
                onClick={handleSaveImage}
            />
            {/* Cancel save file form button*/}
            <SaveFileButton 
                name="Cancel"
                classOptions="btn-secondary px-3"
                onClick={cancel}
            />
        </form>
    )
}

export default SaveFileForm