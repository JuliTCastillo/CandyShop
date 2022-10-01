import { Link } from "react-router-dom";

const Item = ({id,name, imagen, des, stock})=>{
    const comprar = () =>{
        alert(`Se añadio ${name} a tu carrito`);
    }
    let ruta = `/item/${id}`;
    return(
        <>
        <div>
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <div className="m-2">
                <Link to={ruta} className="btn btn-success ms-xl-2">Añadir</Link>
            </div>
            <div className="stock d-flex justify-content-center align-items-center">
                <p>{stock}</p>
            </div>
        </div>
        </>
    )
}


export default Item;