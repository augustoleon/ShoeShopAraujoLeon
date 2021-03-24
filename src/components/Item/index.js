import React from 'react';

export const Item = ({item}) => {
    return (
    <div class="card" style={{width: '18rem'}}>
        <img src={item.url}  class="card-img-top" alt="img"/>
        <div class="card-body">
            <h5 class="card-title">{item.tittle}</h5>
            <p class="card-text">${item.price}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    );
} 