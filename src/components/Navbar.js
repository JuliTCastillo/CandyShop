import CartWidget from './CartWidget.js';

const Navbar = () => {
    return (
        <>
            <header class="d-flex justify-content-around">
                <h1>CandyShop</h1>
                <nav class="d-flex justify-content-center align-items-center">
                    <ul class="nav d-flex justify-content-center align-items-center">
                        <li class="nav-item">
                            <a class="nav-link active text-light" href="#" aria-current="page">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Bebidas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Otros</a>
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