import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import CartCounter from '../CartCounter/CartCounter';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#">
                TaDa
                </h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active fs-5" aria-current="page" href="#">
                            Cervezas
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link fs-5" href="#">
                            Destilados
                            </span>
                        </li>
                        <li className="nav-item fs-5">
                            <span className="nav-link" href="#">
                            Vinos
                            </span>
                        </li>
                    </ul>
                    <div> 
                        <CartWidget/>
                        <CartCounter/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
