import CanvasSizeSelector from "./CanvasSizeSelector"
import SelectedColor from "./SelectedColor"
import ToolSelector from "./ToolSelector"

export const ToolsPalette = ({
                                handleCanvasSize,
                                canvasSize,
                                selectedColor,
                                handleToolSelection,
                                selectedTool
                            }) => {
    return (
        <div className="col-4 p-1 border border-dark">
            <div className="d-flex flex-column flex-wrap align-items-center">
                <CanvasSizeSelector 
                    handleCanvasSize={handleCanvasSize}
                    canvasSize={canvasSize} />
                <SelectedColor selectedColor={selectedColor} />
                <ToolSelector 
                    handleToolSelection={handleToolSelection}
                    selectedTool={selectedTool} />
            </div>
        </div>
    )
}