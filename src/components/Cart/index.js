import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getFirestore, getFirebase } from '../../firebase';

export const Cart = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');    

    const {cart, removeItem, totalItems, totalPrecio} = useContext(CartContext);

    const gererarOrden = (e) => { 

        e.preventDefault();
        const comprador = { name, phone, email};
        console.log(comprador)

        const db = getFirestore();
        const ordersCollection = db.collection('orders');
        const date = getFirebase().firestore.Timestamp.fromDate(new Date());
        const items = cart.map(cartItem => {
            return {id: cartItem.id, title: cartItem.title, price: cartItem.price }
        });

        ordersCollection.add({buyer: comprador, items, date, total: totalPrecio})

        // let orden = {}

        // orden.buyer = {name: 'Cesar', phone: 'mi telefono', mail: 'mimail@mail.com.ar'} ;
        // orden.total = totalPrecio;
        // orden.items = cart.map(cartItem => {
        //     const id = cartItem.item.id;
        //     const title = cartItem.item.title;
        //     const price = cartItem.item.price * cartItem.quantity

        //     return {id, title, price}
        // })
        // console.log(orden)
    }

    const noItemComponent = <h2> No hay items en el carrito <Link to='/'> Ir al Home</Link></h2>;
    if(totalItems === 0 ) return noItemComponent;

    return(
        <div>

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

            <form onSubmit={gererarOrden}>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
                <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

                <button type='submit'> Generar Orden</button>

            </form>
        </div>
    )
}