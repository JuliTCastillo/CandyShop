import { useEffect, useState } from "react";
import {db} from "../utils/FirebaseConfig"
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import Loader from "./loader.js";

const ItemDetailConteiner = () =>{
    const [dato, setDato] = useState({}); //Vamos a tener un estado de tipo objeto
    const {id} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
            setLoading(true)
            const docRef = doc(db, "Product", id);
            getDoc(docRef)
                .then(result => setDato({id: result.id, ...result.data()}))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
    }, [])

    return(
        // <ItemDetail datos={dato}/>
        <div>
            {loading ? <Loader/> : <ItemDetail datos={dato}/>}
        </div>
    )
}

/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default ItemDetailConteiner;