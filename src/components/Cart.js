import { useContext } from "react";
import { CartContext } from "./CartContext";
import {ItemCount} from "./ItemCount";

const Cart = () =>{
    //Hacemos una constante - utilizamos un hook - indicamos que contexto queremos usar
    //Ahora mi CartContext es un objeto - le indico que elemento quiero(lista)
    const {cartList, clear, removeItem, totalPrice} = useContext(CartContext); // * Hook 
    let descuento = 0;
    if(cartList.length == 0) return (
        <div className="text-center m-3">
            <p>No hay producto :(</p>
            <img src="https://pbs.twimg.com/media/E4XjFtmWQAM4L4T.jpg" width={500}/>
        </div>
    )
    return(
        <>
        <div className="cartGrilla">
            <div>
                <div className="d-flex justify-content-end align-items-center m-3">
                    <button className="bg-black btn text-light" onClick={clear}>Borrar todo</button>
                </div>
                {
                cartList.map(item => 
                    <div className="bg-white rounded shadow-sm py-3 px-4 m-5">
                        <div className="d-flex justify-content-around align-items-center">
                            <div>
                                <h4>{item.name}</h4> 
                                <img src={item.img} alt={item.des} width="150"/>
                            </div>
                            <div className="w-50">
                                <h4>Detalle</h4>
                                <p>Precio : ${item.precio}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Cantidad : {item.count}</p> 
                                    <p>Total : ${item.count * item.precio}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar de la lista</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-white rounded shadow-sm py-3 px-4 m-3 price">
                <h3 className="text-center">Cuenta</h3>
                <div className="my-lg-5">
                    <div className="d-flex justify-content-around text-left">
                        <p className="w-50"><b>Precio Total:</b></p>
                        <p>${totalPrice()}</p>
                    </div>
                    <div className="d-flex justify-content-around text-left">
                        <p className="w-50"><b>Descuento</b>(%10) : </p>
                        <p>${descuento = totalPrice() * 0.10}</p>
                    </div>
                    <div className="d-flex justify-content-around text-left">
                        <p className="w-50"><b>A Pagar: </b></p>
                        <p>${totalPrice() - descuento}</p>
                    </div>
                    
                </div>
                <div className="w-100 my-lg-5">
                    <button className="btn btn-success w-100">Pagar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;