import CanvasSizeSelector from "../buttons/CanvasSizeSelector"
import SelectedColor from "../buttons/SelectedColor"
import ToolSelector from "../buttons/ToolSelector"

// Palette of tools (canvas size selection, paint or fill option and display of the current selected color)
const ToolsPalette = ({
                                handleCanvasSize,
                                canvasSize,
                                selectedColor,
                                handleToolSelection,
                                selectedTool
                            }) => {
    return (
        <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-wrap p-1">
            <div className="col-12
                            col-lg-8
                            p-1
                            d-flex
                            flex-wrap
                            align-items-start
                            justify-content-center
                            justify-content-sm-start"
                >
                <CanvasSizeSelector
                    handleCanvasSize={handleCanvasSize}
                    canvasSize={canvasSize} />
                <ToolSelector
                    handleToolSelection={handleToolSelection}
                    selectedTool={selectedTool} />
                <SelectedColor selectedColor={selectedColor} />
            </div>
        </div>
    )
}

export default ToolsPalette