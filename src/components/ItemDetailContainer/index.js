import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail'  
import {useParams} from 'react-router-dom';


const getItems = (id) => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve( {title:'Nike JanoskiMax', price: 200, description: 'Diseñadas para ti, Item: '+ id, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4jx3pGt6hUoRK00AUtRwvtSz3OMvbcCHAw&usqp=CAU'})}
        ,2000)
    })
}

export const  ItemDetailContainer =() => {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

    return <ItemDetail item={item} />
}