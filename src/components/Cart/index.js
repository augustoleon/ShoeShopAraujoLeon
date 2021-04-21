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

    return(
        <div>
            
            {
            !cart.length ?
            <h2> No hay items en el carrito <Link to='/'> Ir al Home</Link></h2>
            :(<>
                { cart.map((cartItem) => (                        
                    <div key= {cartItem.item.id}>
                        <div>Titulo: {cartItem.item.title} </div>
                        <div>Cantidad: {cartItem.cant}</div>
                        <button type="button" className="btn btn-danger" onClick= {() => removeItem(cartItem.item.id)}> Borrar </button>
                    </div>)
                )}          
                        <div>Monto Total: ${totalPrecio}</div>
                        <div className="d-flex justify-content-center" >
                        <button type="button" className="btn btn-primary w-40" onClick={gererarOrden}>Finalizar</button>
                        </div> 
                        

                </>

            )
            }


        </div>
    )
}