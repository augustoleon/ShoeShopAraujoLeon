import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail'  
import {useParams} from 'react-router-dom';

const products = [
    {id:'1', title: 'Nike SB Janoski', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2QMTv4U7-SkYPoVZ5gdvAY8fKsSIXwKGIuiybbo9BzU7FCF75WY_ii7X5dkqiKQ2DKtTwD0&usqp=CAc', category: 'nike'},
    {id:'2', title: 'Adidas Yeezy', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jDkZutYb3ABMyJAhEBdih0jgxuZDA0hSKg&usqp=CAU', category: 'adidas'},
    {id:'3', title: 'Nike Jordan', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZRh4nm7AIB88JloJgvwHoHG-Il0K3rDFZQ&usqp=CAU', category: 'nike'}
]

// {title:'Nike JanoskiMax', price: 200, description: 'Diseñadas para ti, Item: '+ id, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4jx3pGt6hUoRK00AUtRwvtSz3OMvbcCHAw&usqp=CAU'}

const getItems = (id) => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)}
        ,2000)
    })
}

export const  ItemDetailContainer =() => {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
        getItems()
        .then((res)=> setItem(res.find((elemento)=> elemento.id === itemId)))
        return;
    }, [itemId])

    return <ItemDetail item={item} />
}