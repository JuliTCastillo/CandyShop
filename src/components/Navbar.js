import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header className="d-flex justify-content-around">
                <div class="container d-flex justify-content-around">
                    <nav class="nav_checkbox">
                        <Link to="/" className='text-light text-decoration-none'>
                            <h1>Candy-Shop</h1>
                        </Link>
                        <input type="checkbox" id="tab-nav" class="tab-nav"/>
                        <label for="tab-nav" class="label">
                            <div class="burger"></div>
                            <div class="burger"></div>
                            <div class="burger"></div>
                        </label>
                        <ul class="content_nav">
                            <li className="nav-item ms-xl-2">
                                <Link className='text-light text-decoration-none' to="/category/2">Helados</Link>
                            </li>
                            <li className="nav-item ms-xl-2">
                                <Link className='text-light text-decoration-none' to="/category/3">Bebidas</Link>
                            </li>
                            <li className="nav-item ms-xl-2">
                                <Link className='text-light text-decoration-none' to="/category/1">Chocolates</Link>
                            </li>
                            <li>
                                <CartWidget/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;