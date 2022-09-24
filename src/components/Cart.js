import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
    //Hacemos una constante - utilizamos un hook - indicamos que contexto queremos usar
    //Ahora mi CartContext es un objeto - le indico que elemento quiero(lista)
    const {cartList, clear, isInCart} = useContext(CartContext); // * Hook 

    const obtenerId = (id) =>{
        console.log(id);
        isInCart(id);
    }
    return(
        <>
            <div className="d-flex justify-content-end align-items-center m-3">
                <button className="bg-black btn text-light" onClick={clear}>Borrar todo</button>
            </div>
            {
                cartList.map(item => 
                    <div className="bg-white rounded shadow-sm py-3 px-4 m-5">
                        <div className="d-flex">
                            <img src={item.img} alt={item.des} width="150"/>
                            <div>
                                <h4>Producto : {item.name}</h4> 
                                <p>Precio : ${item.precio}</p>                           
                                <button className="btn btn-danger" onClick={() => obtenerId(item.id)}>Eliminar de la lista</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Cart;