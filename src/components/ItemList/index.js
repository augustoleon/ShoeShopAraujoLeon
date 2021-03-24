import React from 'react';
import {Item} from '../Item';
import style from './style.css';


export const ItemList = ({items= []})=> {
    return(
    <div className = 'grid'>
        {items.map(item => <Item item={item}/>)}

    </div>

    )
}