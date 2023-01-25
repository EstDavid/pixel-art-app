import Logo from '../assets/logo.png'

// Title component using a bootstrap .navbar and .navbar-brand component
const Title = () => {
    return (
        <nav className="navbar ">
            <div className="container">
                <a className="navbar-brand fs-1 p-2 align-items-bottom" href="#">
                    <img 
                        src={Logo}
                        alt="Logo"
                        width="90"
                        height="auto"
                        className="d-inline-block align-text-bottom rounded" />
                        <span className="ms-2 px-3 bg-dark rounded">
                            <strong className="pixel">Pixel </strong>
                            <strong className="artifier">Artifier</strong>
                        </span>
                </a>
            </div>
        </nav>
    )
}

export default Title