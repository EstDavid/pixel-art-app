import {tools} from '../parameters'

const ToolSelector = ({handleToolSelection, selectedTool}) => {
    return (
        <div className="btn-group-vertical w-50" role="group" aria-label="Tool Selection">
                {tools.map((tool, index) => {
                    const activeTool = tool.name === selectedTool.name
                    const {name, icon} = tool
                    return (
                        <button 
                            key={index} 
                            type="button" 
                            className={`btn btn-outline-dark ${activeTool? 'active' : null}`}
                            onClick={() => handleToolSelection(tool)}
                            ><i className={`fs-3 ${icon}`}></i>{name}</button>
                    )
                })}
        </div>
    )
}

export default ToolSelector