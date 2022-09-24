import {createContext, useState } from "react";
import Item from "./Item";

//Lo exportamos para que cualquier componente lo puede usar
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product) => {
        // cartList.push(product); ===> No se puede hacer de esta forma
        setCartList([
            //Los datos de antes - añadimos el product nuevo
            ...cartList, product
        ])
    }
    const clear = () =>{
        setCartList([]);
    }
    const removeItem = (indice) =>{
        setCartList(cartList.filter(product => product.id != indice));
    }

    const isInCart = (id) =>{
        cartList.forEach((item, i) => {
            if(item.id == parseInt(id)){
                console.log("el elemento esta en el indice " + i);
                removeItem(item.id);
            }
        })
    } 
    return(
        // Usamos nuestro componente y le pasamos los datos
        //Un componente no puede renderizar dos elemento, por eso usamos un fragment
        <CartContext.Provider value = {{cartList, addItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

