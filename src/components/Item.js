import { Link } from "react-router-dom";

const Item = ({id,name, imagen, des})=>{
    const comprar = () =>{
        alert(`Se añadio ${name} a tu carrito`);
    }
    let ruta = `/item/${id}`;
    return(
        <>
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <div>
                <button type="button" className="btn btn-success ms-xl-2" onClick={comprar}>Añadir</button>
                <Link to={ruta} className="btn btn-success ms-xl-2">Detalle</Link>
            </div>
        </>
    )
}


export default Item;