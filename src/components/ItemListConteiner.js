import ItemList from './ItemList.js';
import customFetch from '../utils/customFetch.js';
import products from '../utils/Product.js';
import { useEffect, useState } from 'react';

const ItemListConteiner = () => {
    //Si no hacemos un estado de nuestro array. Nos tira error
    const [dato, setDato] = useState([]);
    useEffect(()=>{
        //el useEffect se realiza para la llamada de la BDD
        customFetch(2000, products)
        .then(result => setDato(result))
        .catch(err => console.log(err))
        //Mandamos nuestro array como estado
        setDato(dato);
    },[]);

    const onAdd = (aux) =>{ //Crear el componente contador
        alert("you have selected " + aux + " items.");
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center text-center m-3">     
                    {/*Pasamos la lista de datos por parametros en ItemList*/}
                    <ItemList items = {dato}/>
                </div>
            </div>
        </>
    )
}

export default ItemListConteiner;