import { useState } from "react";

const ItemCount = ({initial, stock}) => {
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
            alert("Lo siento, ese es todo el stock del producto");
        }
    }
    return(
        <>
            <div className="d-flex justify-content-start aling-items-center m-3">
                <button className="w-25 border-light" onClick={disminuir}>-</button>
                <input type="text" value={cant} className="w-25 text-center"></input>
                <button className="w-25 border-light" onClick={incrementar}>+</button>
            </div>
            <div className="d-flex justify-content-end aling-items-center">
                <button className="btn btn-success w-25" type="submit" id="btnActivar">Añadir</button>
            </div>
        </>
    )
}
export default ItemCount;