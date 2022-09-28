//Agrupador
import Item from './Item.js';
import producto  from '../utils/Product.js';

const ItemList = ({items}) => {

    return(
        <>
            {
            items.length > 0 
            ? items.map(item => (
                <div>
                    <div className="bg-white rounded shadow-sm py-5 px-4 m-2">
                        <Item id={item.id} name={item.name} imagen = {item.img} des={item.des} stock = {item.stock}/>
                    </div>
                </div>
            ))
            : <p>cargando...</p>
            }
        </>
    )
}

export default ItemList;