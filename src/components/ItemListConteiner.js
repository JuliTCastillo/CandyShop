import ItemList from './ItemList.js';
import customFetch from '../utils/customFetch.js';
import products from '../utils/Product.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    //Si no hacemos un estado de nuestro array. Nos tira error
    const [dato, setDato] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            customFetch(2000, products.filter(item => item.category == id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
        }
        else{
            //el useEffect se realiza para la llamada de la BDD
            customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
        }
        
        //Mandamos nuestro array como estado
        setDato(dato);
    },[id]);

    const onAdd = (aux) =>{ //Crear el componente contador
        alert("you have selected " + aux + " items.");
    }

    return(
        <>
            <div className="container items">
                <div className="d-grid justify-content-center text-center grilla">     
                    {/*Pasamos la lista de datos por parametros en ItemList*/}
                    <ItemList items = {dato}/>
                </div>
            </div>
        </>
    )
}

export default ItemListConteiner;