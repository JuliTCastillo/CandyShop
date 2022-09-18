
const Item = ({key,name, imagen, des})=>{
    const comprar = () =>{
        alert(`Se añadio ${name} a tu carrito`);
    }

    return(
        <>
            <img src={imagen} alt={des} width="150"/>
            <h5 className="mb-0">{name}</h5>
            <div>
                <button type="button" className="btn btn-success" onClick={comprar}>Añadir al carrito</button>
            </div>
        </>
    )
}


export default Item;