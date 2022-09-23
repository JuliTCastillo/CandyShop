import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import {CartContext} from "./CartContext.js";


const ItemDetail = ({datos}) => {
    const [itemCount, setItemCount] = useState(0);
    //le pedimos que nos traiga la función ¿
    const { addItem } = useContext(CartContext);

    const onAdd = (qty) =>{ //Crear el componente contador
        alert("you have selected " + qty + " items.");
        setItemCount(qty);
        addItem(datos);
    }

    return(
        <>
            <div className="bg-white rounded shadow-sm py-5 px-4 m-5">
                <div className="d-flex justify-content-center align-items-center itemDetail">
                    <div className="col d-flex justify-content-center align-items-center flex-column">
                        <h2 className="text-center w-3">{datos.name}</h2>
                        <img className="m-0 imgProduct" src={datos.img} alt={datos.des} width="400"/>
                    </div>
                    <div className="col">
                        <h3>Descripción</h3>
                        <p>{datos.detail}</p>
                        <br/>
                        <p>Precio del Producto : ${datos.precio}</p>
                        <div className="mt-md-5">
                            {
                                itemCount == 0
                                ? <ItemCount initial="0" stock = {datos.stock} onAdd={onAdd}/>
                                : <Link to="/cart"><button className="btn btn-danger">Checkout</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
