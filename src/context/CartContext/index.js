import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {
        let totItems = 0;
        let precio = 0;
        for(let cartItem of cart){
            totItems += cartItem.cant;
            precio += cartItem.cant * cartItem.item.price;
        }

        setTotalItems(totItems);
        setTotalPrecio(precio)
    },[cart])
    

    const cartLength = () => {
        return cart.reduce((accumulator, currentValue)=> {return accumulator + currentValue.cant}, 0);
    }

    const addItem = (newItem, quantity) => {
        console.log("cant", quantity)
        let prodIndex = cart.findIndex(e => e.item.id === newItem.id);
        if (prodIndex === -1) {
            setCart(cart => [...cart, {item: newItem, cant: quantity} ])
            // setCart([...cart, {item: newItem, cant: quantity} ])
        } else {
            let modifiedCart = [...cart];
            modifiedCart[prodIndex].cant += quantity;
            setCart(modifiedCart)
        }        

    }// agregar cierta cantidad de un ítem al carrito


    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.item.id !== itemId)
        // Si no es igual, me lo quedo, si es igual, lo descarto

        setCart(newCart)

    } // Remover un item del cart por usando su id

    const clear = () =>{
        setCart([]);
    } // Remover todos los items

    const isInCart = (id) => {
        const currentItem = cart.find(e => e.item.id === id);

        return currentItem ? true : false;
    } //true|false


    return (
        //<CartContext.Provider value = {{cart, addItem, removeItem, clear, isInCart}}>
        <CartContext.Provider value = {{ cart, addItem, removeItem, clear,isInCart, totalItems, totalPrecio }}>
            {children}
        </CartContext.Provider>
    )
}