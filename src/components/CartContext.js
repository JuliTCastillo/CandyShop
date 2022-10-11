import {createContext, useState } from "react";
import Item from "./Item";

//Lo exportamos para que cualquier componente lo puede usar
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, count) => {
        // cartList.push(product); ===> No se puede hacer de esta forma
        //Si el producto existe en la lista del carrito
        if(isInCart(product.id)){
            setCartList(cartList.map(ele =>{
                return ele.id === product.id ? {...ele, count: ele .count + count} : ele
            }));
        }
        else{
            product.count = count;
            //si no se encuentra en nuestra lista, añadimos el producto 
            setCartList([
                //Los datos de antes - añadimos el product nuevo
                ...cartList, product
            ])
        }
        
    }
    const clear = () =>{
        setCartList([]);
    }
    const removeItem = (indice) =>{
        setCartList(cartList.filter(product => product.id != indice));
    }

    const isInCart = (id) =>{
        return cartList.some(element => element.id == id);
    } 

    const totalProduct= () => {
        return cartList.reduce((val, newVal) => val + newVal.count, 0);
    }

    const totalPrice = () =>{
        return cartList.reduce((val, itemCart) => val + (itemCart.price * itemCart.count), 0);
    }
    return(
        // Usamos nuestro componente y le pasamos los datos
        //Un componente no puede renderizar dos elemento, por eso usamos un fragment
        <CartContext.Provider value = {{cartList, addItem, clear, removeItem, totalProduct, totalPrice, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default CartContextProvider;

