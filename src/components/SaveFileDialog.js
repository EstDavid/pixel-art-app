import { imageFormats } from "../parameters"

const FileFormatRadio = ({
    index,
    format,
    currentFormat,
    onChange
}) => {
    return (
        <div className="form-check form-check-inline mb-3">
            <input 
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={`formatRadio-${index}`}
                checked={currentFormat === format ? true : false}
                onChange={() => onChange(format)} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                {format.toUpperCase()}
            </label>
        </div>
    )
}

const FileNameInput = ({
    value,
    onChange,
    placeholder
}) => {
    return (
        <div className="input-group input mb-3">
            <span className="input-group-text">File name</span>
            <input 
                type="text"
                aria-label="First name"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    )
}


const SaveFileDialog = ({
    saveImage,
    cancel,
    handleFormatChange,
    handleFilenameChange,
    currentFormat,
    fileName
}) => {
    return (
        <div>
            <form className="form-control" aria-labelledby="btnGroupDrop1" onSubmit={(event) => saveImage(event, fileName, currentFormat)}>
                {imageFormats.map((format, index) => 
                    <FileFormatRadio 
                        key={index}
                        index={index}
                        format={format}
                        currentFormat={currentFormat}
                        onChange={handleFormatChange} 
                    />
                )}
                <FileNameInput
                    value={fileName}
                    onChange={handleFilenameChange}
                    placeholder='Image name'
                /> 
                <button type="submit" className="btn btn-primary mb-1">Save</button>
                <button type="button" className="btn btn-secondary ms-4 mb-1" onClick={cancel} >Cancel</button>
            </form>
        </div>
    )
}

export default SaveFileDialog