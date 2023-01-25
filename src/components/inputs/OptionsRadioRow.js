const OptionsRadio = ({index, rowName, option, selectedValue, onChange}) => {
    const {name, value} = option
    return (
        <>
            <input 
                className="btn-check"
                type="radio"
                name={`${rowName}`}
                id={`${rowName}-${index}`}
                autoComplete="off"
                checked={value === selectedValue ? true : false}
                onChange={() => onChange(value)} />
            <label className="btn btn-outline-secondary" htmlFor={`${rowName}-${index}`}>
                {name.toUpperCase()}
            </label>
        </>
    )}

const OptionsRadioRow = ({optionsObj, selectedValue, onChange}) => {
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