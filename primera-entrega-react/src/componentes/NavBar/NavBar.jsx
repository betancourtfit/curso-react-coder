import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import CartCounter from '../CartCounter/CartCounter';
const NavBar = () => {
    return (
        <header>
            <h3>TaDa</h3>

            <nav>
                <ul>
                    <li>Cervezas</li>
                    <li>Vinos</li>
                    <li>Destilados</li>
                </ul>
            </nav>

            <CartWidget/>
            <CartCounter/>
        </header>
    );
};

export default NavBar;
