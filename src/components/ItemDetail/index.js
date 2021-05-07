import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import './itemDetailStyle.css';

const limitStock= 300;

export const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);

    const { addItem } = useContext(CartContext);

    const onAdd = (cantidadAgregada) => {
        const cant  = parseInt(cantidadAgregada);
        addItem(item, cant);
        setCount(cant);
    };

    return(
        <div className='itemDetail' style={{fontFamily: 'Zen Dots', fontSize: '24px'}}>
            <img src={item.img} alt="" />
            <div className='titlePrice'>
                <div>{item.title}</div>
                <div style={{fontSize: '20px', marginBottom: '20px'}}>${item.price}</div>


                { count === 0 ? 
                    <ItemCount stock={limitStock} initial={1} onAdd= {onAdd} />
                :
                    <Link to='/cart'>
                        <div className="d-flex justify-content-center" >
                            <button type="button" className="btn btn-primary w-40" >Terminar la compra</button>
                        </div>          
                    </Link>
                }
            </div>

        </div>
    )
}