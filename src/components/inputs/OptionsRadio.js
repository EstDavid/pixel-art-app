// This component displays each individual option on a OptionsRadioRow component
const OptionsRadio = ({ index, rowName, option, selectedValue, onChange }) => {
    const { name, value } = option
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
    )
}

export default OptionsRadio