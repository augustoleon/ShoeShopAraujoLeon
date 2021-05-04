import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

import { getFirestore, getFirebase } from '../../firebase';
import firebase from 'firebase/app';

import './formStyle.css';
import { Link } from 'react-router-dom';
 
export const Form = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');    

    const [idOrder, setIdOrder] = useState('');
    
    const {cart, totalItems, totalPrecio, clear} = useContext(CartContext);

    const gererarOrden = (e) => { 

        e.preventDefault();
        const comprador = { name, phone, email};
        console.log(comprador) 

        const db = getFirestore();
        const ordersCollection = db.collection('orders');
        const date = firebase.firestore.Timestamp.fromDate(new Date());
        const items = cart.map(cartItem => {
            return {id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.price }
        });

        ordersCollection
        .add({buyer: comprador, items, date, total: totalPrecio}) // Me devuelve una promesa
        .then( doc => { // traer el ID del componente y guardarlo en un estado
            setIdOrder(doc.id)
        })

        //Descontar del stock
        const itemsCollection = db.collection('items')
        .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id));

        itemsCollection.get()
        .then(res => {
            console.log('itemsCollection.get().then( ', res)

            const batch = db.batch();
            if(res.exist){

                for( let doc of res) {
    
                    const stockActual = doc.data().stock;
                    const itemDelCart = cart.find( item => item.item.id === doc.id);
                    const cantidadComprada = itemDelCart.quantity;
                    const nuevoStock = stockActual - cantidadComprada;
                    // hacemos un update
                    batch.update(doc.ref,
                        {stock: nuevoStock}
                    )
    
                }
            }         

            // Hacemos un commit 
            batch.commit()
        })

    }

    return (
        <div>
            
            {idOrder?
                <>
                <div className='check' style={{marginLeft: '650px', marginTop: '70px', marginBottom:'30px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                </div>
                <h1>Orden Completada</h1>
                <Link to='/' onClick= {() => clear()}> 
                    <div>Limpiar el carrito e ir al home</div>
                </Link>
                </>
                :            
                totalItems?
                
                <form className="row g-3 formStyle" onSubmit={gererarOrden}>                    
                    <h2> ¡Ya casí!</h2>
                    <h5> Completar Formulario </h5>
                    <div className='nombreTel'>
                        <div className="mb-3">
                            <label className="form-label"> Nombre y Apellido</label>
                            <input type="text" className="form-control"  value={name} onChange={(e)=> setName(e.target.value)} placeholder="Example input placeholder"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label"> Telefono</label>
                            <input type="text" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Another input placeholder"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Correo electronico</label>
                        <input type="text" className="form-control"value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Another input placeholder"/>
                    </div>
                    <div className="col-12">
                        {name && phone && email ?
                                <button type="submit" className="btn btn-primary" >Sign in</button>
                                :
                                <button disabled type="submit" className="btn btn-primary" style={{background: 'grey'}}>Sign in</button>
 
                         }
                    </div>
                </form>

                :

                <h5> No hay nada en el carrito <Link to='/'> Ir al home</Link></h5>
            
            
            }

        </div>
        

    )

}