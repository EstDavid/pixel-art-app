// This is a generic component used to display to the user different dialogs during interaction:
// - Confirm image being erased
// - Inform that an image file was saved
const ModalDialog = ({onAccept, dialogText}) => {
    const {index, title, message, action} = dialogText
    return (
        <div className="modal fade" id={`modalDialog-${index}`} tabIndex="-1" aria-labelledby={`${title}`} aria-hidden="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* Title of the dialog*/}
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Msin maessage*/}
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                        {/* If an onAccept function is passed, then the accept button is displayed*/}
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

export default ModalDialog