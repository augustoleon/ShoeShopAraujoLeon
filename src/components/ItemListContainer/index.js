import React, { useEffect, useState } from 'react';
import {ItemCount} from '../ItemCount';
import {ItemList} from '../ItemList';


const limitStock= 5;

export const ItemListContainer= (props) =>{
    const [items, setItems] = useState([]);
    const products = [
        {id:'1', title: 'Nike SB Janoski', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2QMTv4U7-SkYPoVZ5gdvAY8fKsSIXwKGIuiybbo9BzU7FCF75WY_ii7X5dkqiKQ2DKtTwD0&usqp=CAc'},
        {id:'2', title: 'Adidas Yeezy', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jDkZutYb3ABMyJAhEBdih0jgxuZDA0hSKg&usqp=CAU'},
        {id:'3', title: 'Nike Jordan', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZRh4nm7AIB88JloJgvwHoHG-Il0K3rDFZQ&usqp=CAU'}
    ]

    useEffect(()=>{

        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 3000);
        })

        prom.then((res)=>{
            setItems(res)
        })
    },[])

    const onAdd = (number) => number === 0 ? alert(`No puedes agregar ${number} unidades al carrito`) : alert(`Agregaste ${number} unidades al carrito`)

    return <div>{props.greeting}
        <div class="container-fluid">
        {/* <ItemCount stock={limitStock} initial={1} onAdd= {onAdd} /> */}
        <ItemList items = {items}/>
        </div>
    </div>

} 