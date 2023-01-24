import {useState} from 'react'
import {canvasSizes, canvasSizeChangeDialogText} from '../parameters'
import ImageResetDialog from './ImageResetDialog'

const CanvasSizeSelector = ({handleCanvasSize, canvasSize}) => {
    const [userCanvasSize, setUserCanvasSize] = useState(canvasSize)

    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Image Size {`(${canvasSize.join(' x ')})`}
            </button>
            <ul className="dropdown-menu">
                {canvasSizes.map((size, index) => {
                    return (
                        <li key={index} 
                            data-bs-toggle="modal" 
                            data-bs-target={`#imageResetModal-${canvasSizeChangeDialogText.index}`}
                            onClick={() => setUserCanvasSize(size)} >
                            <a className="dropdown-item" href="#">{`${size.join(' x ')}`}</a>
                        </li>
                    )
                })}
            </ul>
            <ImageResetDialog
                onAccept={() => handleCanvasSize(userCanvasSize)}
                dialogText={canvasSizeChangeDialogText}
            />
        </div>

    )
}

export default CanvasSizeSelector