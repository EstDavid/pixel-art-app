import {useState} from 'react'
import {canvasSizes, canvasSizeChangeDialogText} from '../../parameters'
import ModalDialog from '../dialogs/ModalDialog'

// This component allows the user to select the size of the image: (8 x 8), (12 x 12), (16 x 16), or (32 x 32) pixels
const CanvasSizeSelector = ({handleCanvasSize, canvasSize}) => {
    // The default canvas size is passed as prorps by the App component
    const [userCanvasSize, setUserCanvasSize] = useState(canvasSize)

    return (
        <div className="col-12 col-sm-6 col-lg-12 mb-2 text-sm-start">
            <div className="btn-group col-10 col-lg-12" role="group">
                <button type="button" className="btn btn-dark dropdown-toggle fs-5" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* Display of the current canvas size*/}
                    Image Size {`(${canvasSize.join(' x ')})`}
                </button>
                <ul className="dropdown-menu">
                    {canvasSizes.map((size, index) => {
                        return (
                            <li key={index} 
                                data-bs-toggle="modal" 
                                data-bs-target={`#modalDialog-${canvasSizeChangeDialogText.index}`}
                                // On click, the userCanvasSize state variable is change for this component
                                onClick={() => setUserCanvasSize(size)} >
                                <a className="dropdown-item" href="#!">{`${size.join(' x ')}`}</a>
                            </li>
                        )
                    })}
                </ul>
                <ModalDialog
                    // If the user clicks on 'Accept' on the modal dialog, the new canvas Size is passed
                    // to the App component via the handleCanvasSize callback function
                    onAccept={() => handleCanvasSize(userCanvasSize)}
                    dialogText={canvasSizeChangeDialogText}
                />
            </div>
        </div>
    )
}

export default CanvasSizeSelector