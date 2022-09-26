import ItemList from './ItemList.js';
import customFetch from '../utils/customFetch.js';
import products from '../utils/Product.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './loader.js';

const ItemListConteiner = () => {
    //Si no hacemos un estado de nuestro array. Nos tira error
    const [dato, setDato] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        if(id){
            customFetch(2000, products.filter(item => item.category == id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        else{
            //el useEffect se realiza para la llamada de la BDD
            customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        
        //Mandamos nuestro array como estado
        setDato(dato);
    },[id]);
    
    return(
        <>   
            {/*Pasamos la lista de datos por parametros en ItemList*/}
            {loading 
            ? <Loader/> 
            : 
                <div className="container items">
                    <div className="d-grid justify-content-center text-center grilla"> 
                        <ItemList items = {dato}/>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemListConteiner;