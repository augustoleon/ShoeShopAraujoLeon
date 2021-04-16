import React from 'react';
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
    return (
        <div className="card" style={{width: '18rem'}} >
            <img src={item.img}  className="card-img-top" alt="img" style={{height: '100%'}}/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/item/${item.id}`}> Link al Item</Link>
            </div>
        </div>        

    );
} 