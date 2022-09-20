import ItemCount from "./ItemCount";

const ItemDetail = ({datos}) => {
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
                            <ItemCount initial="0" stock = {datos.stock}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
