import carrito from '../imagen/carro.png';
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
                            <a class="nav-link text-light" href="#">
                                <img  src={carrito} alt="carrito" width="35"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;