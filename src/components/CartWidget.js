import { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito from '../imagen/carro.png';
import { CartContext } from "./CartContext";

const CartWidget = () =>{

    const {totalProduct} = useContext(CartContext);

    return(
        <>
            <Link to="/cart">
                <img  src={carrito} alt="carrito" width="40"/>
                {
                    (totalProduct() != 0) 
                    && <span className='cartwidget'>{totalProduct()}</span>
                }
            </Link>
        </>
    )
}

export default CartWidget;