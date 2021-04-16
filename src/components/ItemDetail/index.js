import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const limitStock= 5;

export const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);

    const { addItem } = useContext(CartContext);

    const onAdd = number => setCount(number);

    return(
        <div>
            <img src={item.img} alt="" style={{width: '250px', height: '250px'}}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>${item.price}</div>
            { count === 0 ? 
                <ItemCount stock={limitStock} initial={1} onAdd= {onAdd} />
            :
                <Link to='/cart'>
                    <div className="d-flex justify-content-center" >
                        <button type="button" className="btn btn-primary w-40" onClick={e => addItem(item, count)}>Terminar la compra</button>
                    </div>          
                </Link>
            }

        </div>
    )
}