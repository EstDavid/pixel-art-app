// This is a generic button that is used in the SaveFileForm component to
// trigger the file download or close (cancel) the form
const SaveFileButton = ({name, target, classOptions, icon, onClick}) => {
    return (
        <button
            type="button"
            className={`btn m-2 ${classOptions}`}
            // If a target is passed, the click of the button will also trigger a modal dialog
            data-bs-toggle={`${target !== undefined ? 'modal': ''}`}
            data-bs-target={target}
            onClick={onClick}
            // This Button component accepts also an icon to be displayed in front of the Button's text
        >{icon}{name}</button>
    )
}

export default SaveFileButton