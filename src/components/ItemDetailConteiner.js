import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch.js";
import ItemDetail from "./ItemDetail.js";
import products from '../utils/Product.js'; 
import { useParams } from "react-router-dom";
import Loader from "./loader.js";

const ItemDetailConteiner = () =>{
    const [dato, setDato] = useState({}); //Vamos a tener un estado de tipo objeto
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
        //llamamos a nuestra promesa
        customFetch(2000, products.find(item => item.id == id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return(
        // <ItemDetail datos={dato}/>
        <div>
            {loading ? <Loader/> : <ItemDetail datos={dato}/>}
        </div>
    )
}

export default ItemDetailConteiner;