const SaveFileButton = ({name, target, classOptions, icon, onClick}) => {
    return (
        <button
            type="button"
            className={`btn m-2 ${classOptions}`}
            data-bs-toggle="modal"
            data-bs-target={target}
            onClick={onClick}
        >{icon}{name}</button>
    )
}

export default SaveFileButton