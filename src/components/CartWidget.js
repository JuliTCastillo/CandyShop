import carrito from '../imagen/carro.png';
const CartWidget = () =>{
    return(
        <>
            <a class="nav-link text-light" href="#">
                <img  src={carrito} alt="carrito" width="35"/>
            </a>
        </>
    )
}

export default CartWidget;