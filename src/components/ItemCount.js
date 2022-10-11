/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
import { useState } from "react";
const ItemCount = ({initial, stock, onAdd}) => {
    const Swal = require('sweetalert2'); //Libreria Swal
    const [cant, setCant] = useState(parseInt(initial)); //estado - hook
    const disminuir = () =>{ 
        if(cant > 0){ //Validamos que el producto no sea menor a 0
            setCant(cant-1);
        }
    }
    const incrementar= () => { 
        if(cant < stock){ //Incrementamos segun el stock que tengamos del producto
            setCant(cant+1);
        }
        if(cant === parseInt(stock)){ //Si nos pasamos del stock, se lo informamos
            console.log("Lo siento, ese es todo el stock del producto");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo siento, ese es todo el stock que tenemos',
            })
        }
    }

    return(
        <>
            <div className="d-flex aling-items-center m-3 contador">
                <button className="w-25 btn btn-outline-secondary" onClick={disminuir}>-</button>
                <input type="text" value={cant} className="w-25 text-center"></input>
                <button className="w-25 btn btn-outline-secondary" onClick={incrementar}>+</button>
            </div>
            <div className="d-flex aling-items-center agregar">
                <button className="btn btn-success" type="submit" onClick={() => onAdd(cant)}>Añadir</button>
            </div>
        </>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default ItemCount;