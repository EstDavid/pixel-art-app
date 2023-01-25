import {useState} from 'react'
import {canvasSizes, canvasSizeChangeDialogText} from '../../parameters'
import ImageResetDialog from '../dialogs/ImageResetDialog'

const CanvasSizeSelector = ({handleCanvasSize, canvasSize}) => {
    const [userCanvasSize, setUserCanvasSize] = useState(canvasSize)

    return (
        <div className="col-12 col-sm-6 col-lg-12 mb-2 text-sm-start">
            <div className="btn-group col-10 col-lg-12" role="group">
                <button type="button" className="btn btn-dark dropdown-toggle fs-5" data-bs-toggle="dropdown" aria-expanded="false">
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
        </div>
    )
}

export default CanvasSizeSelector