import React, {useState} from 'react';
import {ItemCount} from '../ItemCount';
import {Link} from 'react-router-dom';

const limitStock= 5;

export const ItemDetail= ({item}) =>{
    const [count, setCount] = useState(0);

    // const onAdd = (number) => number === 0 ? alert(`No puedes agregar ${number} unidades al carrito`) : alert(`Agregaste ${number} unidades al carrito`)
    const onAdd = (number) => setCount(number);

    return(
        <div>
            <img src={item.img} alt="" style={{width: '250px'}, {height: '250px'}}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>${item.price}</div>
            { count === 0 ? 
            <ItemCount stock={limitStock} initial={1} onAdd= {onAdd} />
            :
            <Link to='/cart'>
                <div class="d-flex justify-content-center" >
                    <button type="button" class="btn btn-primary w-40" >Terminar la compra</button>
                </div>          
            </Link>
            }

        </div>
    )
}