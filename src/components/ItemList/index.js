import React from 'react';
import {Item} from '../Item';

export const ItemList = ({items= []})=> {
    return(
    <div>
        {items.map(item => <Item item={item}/>)}

    </div>

    )
}