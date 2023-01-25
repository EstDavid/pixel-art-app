const ImageResetDialog = ({onAccept, dialogText}) => {
    const {index, title, message, action} = dialogText
    return (
        <div className="modal fade" id={`imageResetModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                        {onAccept !== undefined ? 
                            <button type="button" onClick={onAccept} data-bs-dismiss="modal" className="btn btn-dark">{action}</button>
                        :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImageResetDialog