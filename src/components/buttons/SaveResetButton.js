const SaveResetButton = ({text, onClick, icon, color}) => {
    return (
        <button
            type="button"
            className={`btn btn-${color} w-75 m-2`}
            onClick={onClick}
        >{icon}{text}</button>
    )
}

export default SaveResetButton