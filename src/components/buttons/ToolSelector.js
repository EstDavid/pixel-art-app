import {tools} from '../../parameters'

// This component allows the user to choose between the tools contained
// in the 'tools' array from the parameters.js file
const ToolSelector = ({handleToolSelection, selectedTool}) => {
    // The handleToolSelection changes the selected tool on App component level
    // The App component passes the 'selectedTool' in the props to show the user which tool is currently active
    return (
        <div className="col-12 col-sm-6 col-lg-12 text-sm-end text-lg-center">
            <div className="btn-group col-10 col-lg-12" role="group" aria-label="Tool Selection">
                    {tools.map((tool, index) => {
                        const activeTool = tool.name === selectedTool.name
                        const {name, icon} = tool
                        return (
                            <button 
                                key={index} 
                                type="button" 
                                className={`btn btn-outline-dark fs-5 px-3 ${activeTool? 'active' : null}`}
                                onClick={() => handleToolSelection(tool)}
                                ><i className={`fs-5 me-2 ${icon}`}></i>{name}</button>
                        )
                    })}
            </div>
        </div>
    )
}

export default ToolSelector