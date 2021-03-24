import React from 'react';

export const ItemDetail= ({item}) =>{
    return(
        <div>
            <img src={item.img} alt="" style={{width: '250px'}, {height: '250px'}}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>${item.price}</div>
        </div>
    )
}