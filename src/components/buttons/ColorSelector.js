// This is the building element of the ColorPalette component
// The onClick function is handled by the App component to change the 
// current selected color
const ColorSelector = ({ color, onClick }) => {
    return (
        <div
            className="p-1 m-2 border border-dark-subtle border-2 color-selector"
            style={{backgroundColor: `rgba(${color})`}}
            onClick={() => onClick(color)} >
        </div>
    )
}

export default ColorSelector