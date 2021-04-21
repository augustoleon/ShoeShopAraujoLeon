import React, { useEffect, useState } from 'react';
import {ItemList} from '../ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase'


const products = [
    {id:'1', title: 'Nike SB Janoski', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2QMTv4U7-SkYPoVZ5gdvAY8fKsSIXwKGIuiybbo9BzU7FCF75WY_ii7X5dkqiKQ2DKtTwD0&usqp=CAc', category: 'nike'},
    {id:'2', title: 'Adidas Yeezy', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jDkZutYb3ABMyJAhEBdih0jgxuZDA0hSKg&usqp=CAU', category: 'adidas'},
    {id:'3', title: 'Nike Jordan', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZRh4nm7AIB88JloJgvwHoHG-Il0K3rDFZQ&usqp=CAU', category: 'nike'}
]




export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    const { categoryId } = useParams();
    
    
    useEffect(() => {
        const db = getFirestore();  
        const itemsCollection = db.collection('items');
        const prom = itemsCollection.get();

        prom.then((res) => {
            console.log('se consultaron los datos /n')
            // if(categoryId === undefined) {
            //     setItems(res);
            // } else {
            //     setItems(res.filter((product) => product.category === categoryId));
            // }
        })
    }, [categoryId])

    return (
        <div>
            {props.greeting}
            <div className="container-fluid">
                <ItemList items = {items}/>
            </div>
        </div>
    )

} 