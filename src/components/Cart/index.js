import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


import './cartStyle.css';

export const Cart = () => {

    const {cart, removeItem, totalItems, totalPrecio} = useContext(CartContext);

    const noItemComponent = <h2 style={{fontFamily: 'Zen Dots'}}> ¡Ups! El carrito está vacio, <Link to='/'> Ir al Home</Link></h2>;
    if(totalItems === 0 ) return noItemComponent;

    return(

        <div>
            <div style={{fontFamily: 'Zen Dots', fontSize: '28px'}}> ¡Estamos a punto de terminar!</div>
            <div>
                { cart.map((cartItem) => (                        
                    <div key= {cartItem.item.id} className='cartInside'>
                        <img src={cartItem.item.img} alt=""/>
                        <div className='titleCant'>
                            <div>{cartItem.item.title} </div>
                            <div> ${cartItem.item.price}</div>
                            <div>Cantidad: {cartItem.cant}</div>
                        </div>
                        <button type="button" className="btn btn-danger" onClick= {() => removeItem(cartItem.item.id)}> Borrar </button>
                    </div>)
                        )}          
                <div>Monto Total: ${totalPrecio}</div>
                <Link to='/form'>
                    <div className="d-flex justify-content-center" >
                        <button type="button" className="btn btn-primary w-40"  >Finalizar</button>
                    </div> 
                
                </Link>
            </div>
        </div>
    )
}