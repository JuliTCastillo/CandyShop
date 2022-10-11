import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./CartContext";

const Item = ({id,name, imagen, des, stock})=>{
    const {isInCart} = useContext(CartContext);

    const comprar = () =>{
        alert(`Se añadio ${name} a tu carrito`);
    }

    let ruta = `/item/${id}`;
    
    return(
        <>
        <div className="position-relative">
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <p>{des}</p>
            <div className="d-flex justify-content-center align-items-center">
                {
                    stock === 0
                    ?   <div className="d-flex justify-content-center align-items-center borde"> 
                            <button class="btn-sinStock">
                                <span class="btn-gradient d-flex justify-content-center align-items-center borde">
                                    <i class='bx bxs-x-circle'/>
                                </span>
                                <span class="btn-text-stock">No hay stock</span>
                            </button>
                        </div>
                    : 
                    isInCart(id) 
                    ? 
                        <div className="mensajeInfo">
                            <p className="textoChiquito">Este producto ya se encuentra en su carrito</p>
                            <Link to="/cart" className="text-light text-decoration-none">👉Ver carrito👈</Link>
                        </div>
                    : <Link to={ruta} className="ms-xl-2 text-decoration-none d-flex justify-content-center align-items-center">
                        <button class="btn-pink">
                            <span class="btn-gradient">
                                <i class='bx bx-cart-add'/>
                            </span>
                            <span class="btn-text">Comprar</span>
                        </button>
                    </Link>
                }
            </div>
                {
                    stock == 0 ?
                        <div className="bg-white rounded shadow-sm stock d-flex justify-content-center align-items-center flex-column">
                            <p className="m-0">Stock<br/>{stock}</p>
                        </div>
                    : <div className=" bg-white rounded shadow-sm stock d-flex justify-content-center align-items-center flex-column">
                        <p className="m-0">Stock<br/>{stock}</p>
                    </div>
                }
            
        </div>
        </>
    )
}

/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/

export default Item;