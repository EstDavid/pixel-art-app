import OptionsRadio from "./OptionsRadio"

// This is a generic component that generates a row of different values to choose from,
// such as image format or show/no show grid lines
const OptionsRadioRow = ({optionsObj, selectedValue, onChange}) => {
    // The optionsObj is an object created in the parameters.js file and passed by the parent SaveFieForm component
    const {rowName, title, options} = optionsObj

    return (
        <div className="col-12 mb-2 form-group">
            <div className="d-flex flex-column">
                <label htmlFor={rowName} className="form-label">{title}</label>
                <div className="btn-group btn-group-md" role="group" aria-label={title} id={rowName}>
                    {options.map((option, index) =>
                        <OptionsRadio
                            key={index}
                            index={index}
                            rowName={rowName}
                            option={option}
                            selectedValue={selectedValue}
                            onChange={onChange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default OptionsRadioRow