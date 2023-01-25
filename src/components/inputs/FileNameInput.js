const FileNameInput = ({
    value,
    onChange,
    placeholder
}) => {
    return (
        <div className="form-floating input mt-2 mb-2">
            <input 
                type="text"
                id="file-name-input"
                aria-label="File Name"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
            <label htmlFor="file-name-input">File name</label>
        </div>
    )
}

export default FileNameInput