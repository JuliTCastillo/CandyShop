import { Link } from "react-router-dom";

const Item = ({id,name, imagen, des, stock})=>{
    const comprar = () =>{
        alert(`Se añadio ${name} a tu carrito`);
    }
    let ruta = `/item/${id}`;
    return(
        <>
        <div className="position-relative">
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <div className="m-2">
                {
                    stock == 0 
                    ?   <div className="d-flex justify-content-center align-items-center borde"> 
                            <p className="sinStock">No hay stock</p> 
                        </div>
                    : <Link to={ruta} className="btn btn-success ms-xl-2">Comprar</Link>
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


export default Item;