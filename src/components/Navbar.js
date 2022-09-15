import CartWidget from './CartWidget.js';

const Navbar = () => {
    return (
        <>
            <header className="d-flex justify-content-around">
                <h1>CandyShop</h1>
                <nav className="d-flex justify-content-center align-items-center">
                    <ul className="nav d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="#" aria-current="page">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Bebidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Otros</a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;