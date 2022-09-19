import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch.js";
import ItemDetail from "./ItemDetail.js";
import products from '../utils/Product.js'; 
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () =>{
    const [dato, setDato] = useState({}); //Vamos a tener un estado de tipo objeto
    const {id} = useParams();
    useEffect(() =>{
        //llamamos a nuestra promesa
        customFetch(2000, products.find(item => item.id == id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail datos={dato}/>
    )
}

export default ItemDetailConteiner;