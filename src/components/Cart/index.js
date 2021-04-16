import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

    const {cart, removeItem, totalItems, totalPrecio} = useContext(CartContext);

    const gererarOrden = () => { 
        let orden = {}

        orden.buyer = {name: 'Cesar', phone: 'mi telefono', mail: 'mimail@mail.com.ar'} ;
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity

            return {id, title, price}
        })
        console.log(orden)
    }
    console.log('CART', cart)

    return(
        <div>
            {
                !cart.length ?
                <h2> No hay items en el carrito <Link to='/'> Ir al Home</Link></h2>:
                (<>
                    { cart.map((cartItem) => 
                            
                        <div key= {cartItem.item.id}>
                            <div>Titulo: {cartItem.item.title} </div>
                            <div>Cantidad: {cartItem.cant}</div>
                            <button onClick= {() => removeItem(cartItem.item.id)}> Borrar</button>
                            <div>Total: {totalItems} y {totalPrecio}</div>
                            <button onClick={gererarOrden}> Terminar la compra </button>
                        </div>

                    )}
         

                    </>
                )
            }


        </div>
    )
}