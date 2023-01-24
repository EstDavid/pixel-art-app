const SelectedColor = ({ selectedColor }) => {
    return (
        <div className='w-50 p-1 m-2'>
            <h3>Selected Color</h3>
            <div
                className='p-1 m-2 border border-dark-subtle border-2'
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