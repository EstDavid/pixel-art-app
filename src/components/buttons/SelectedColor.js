// This component is a square displaying the currently selected color on the ToolsPalette component
const SelectedColor = ({ selectedColor }) => {
    return (
        <div className='col-12 m-2 d-flex align-items-center justify-content-center'>
            <h3 className="col-6 text-start" >Selected Color</h3>
            <div
                className='col-2 border border-dark-subtle border-2'
                style={{
                    backgroundColor: `rgba(${selectedColor})`,
                    minWidth: 60, aspectRatio: '1',
                }}
            >
            </div>
    </div>
    )
}

export default SelectedColor