//Agrupador
import { useEffect, useState } from 'react';
import Item from './Item.js';
import customFetch from '../utils/customFetch.js'
import producto  from './Product.js';

const ItemList = () => {
    //Si no hacemos un estado de nuestro array. Nos tira error
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        //el useEffect se realiza para la llamada de la BDD
        customFetch(2000, product)
        .then(result => setProduct(result))
        .catch(err => console.log(err))
        //Mandamos nuestro array como estado
        setProduct(product);
    },[])
    

    return(
        <>
            {
            producto.map(items => (
                <div className="col-3">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                        <Item name={items.name} imagen = {items.img} des={items.des} stock = {items.stock}/>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default ItemList;