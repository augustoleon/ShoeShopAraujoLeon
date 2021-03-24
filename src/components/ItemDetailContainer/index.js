import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail'            

const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve( {title:'Nike JanoskiMax', price: 200, description: 'Diseñadas para ti', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4jx3pGt6hUoRK00AUtRwvtSz3OMvbcCHAw&usqp=CAU'})}
        ,2000)
    })
}

export const  ItemDetailContainer =() => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

    return <ItemDetail item={item} />
}