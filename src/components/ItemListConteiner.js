import ItemList from './ItemList.js';
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './loader.js';
import Banner from './Banner';
import {db} from "../utils/FirebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListConteiner = () => {
    //Si no hacemos un estado de nuestro array. Nos tira error
    const [dato, setDato] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        let q; //Query
        //Función promesa
        const firestoreFetch = async() => {
            setLoading(true)
            if(id){
                q = query(collection(db, "Product"), where('category', '==', parseInt(id)));
            }
            else{
                q = query(collection(db, "Product"));
            }
            //db => es la que tiene la conexión | Product => Es nuestra "Tabla producto"
            const querySnapshot = await getDocs(q);
            //dataFromFireStore => une nuestra id con los datos que ingresamos desde Firebase
            const dataFromFireStore = querySnapshot.docs.map(document =>({
                id : document.id, //Nuestra id están por fuera de los datos guardados 
                ...document.data() //Acá pedimos los datos que ingresamos 
            }))
            //Devolvemos el array de los datos
            return dataFromFireStore;
        }
        
        firestoreFetch()
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);

    return(
        <>   
            {/*Pasamos la lista de datos por parametros en ItemList*/}
            {loading 
            ? <Loader/> 
            : 
            <>
                <Banner/>
                <div className="container items">
                    <div className="d-grid justify-content-center text-center grilla"> 
                        <ItemList items = {dato}/>
                    </div>
                </div>
            </>                
            }
        </>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default ItemListConteiner;