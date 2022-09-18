import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch.js";
import ItemDetail from "./ItemDetail.js";
// Obtenemos a nuestros producto
// const {products} =  require('../utils/Product.js'); 
import products from '../utils/Product.js'; 

const ItemDetailConteiner = () =>{
    const [dato, setDato] = useState({}); //Vamos a tener un estado de tipo objeto

    useEffect(() =>{
        //llamamos a nuestra promesa
        customFetch(2000, products[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail datos={dato}/>
    )
}

export default ItemDetailConteiner;