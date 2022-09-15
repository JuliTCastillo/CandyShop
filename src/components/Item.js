import { useState } from "react";

const Item = ({name, imagen, des, stock})=>{
    const [cant, setCant] = useState(0); //estado - hook
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
    const comprar = () =>{
        alert(`Se añadio ${cant} de ${name} a tu carrito`);
    }

    return(
        <>
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <div>
                <div className="d-flex justify-content-center aling-items-center m-3">
                    <button className="w-25 border-light" onClick={disminuir}>-</button>
                    <input type="text" value={cant} className="w-25 text-center"></input>
                    <button className="w-25 border-light" onClick={incrementar}>+</button>
                </div>
                <button type="button" className="btn btn-success" onClick={comprar}>Añadir al carrito</button>
            </div>
        </>
    )
}


export default Item;