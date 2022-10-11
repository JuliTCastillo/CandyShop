import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';
import logo from '../imagen/CS.png';
const Navbar = () => {
    return (
        <>
            <header className="d-flex justify-content-around">
                <div className="container d-flex justify-content-between">
                    <nav className="nav_checkbox">
                        <Link to="/" className='text-light text-decoration-none d-flex justify-content-center align-items-center'>
                            <img className='logo' src={logo} alt="Logo de la pagina" width={90}/>
                            <h1>CandyShop</h1>
                        </Link>
                        <input type="checkbox" id="tab-nav" className="tab-nav"/>
                        <label htmlFor="tab-nav" className="label">
                            <div className="burger"></div>
                            <div className="burger"></div>
                            <div className="burger"></div>
                        </label>
                        <ul className="content_nav">
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
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default Navbar;