import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail'  
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase';

// {title:'Nike JanoskiMax', price: 200, description: 'Diseñadas para ti, Item: '+ id, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4jx3pGt6hUoRK00AUtRwvtSz3OMvbcCHAw&usqp=CAU'}

const getItems = (id) => { 
    
    const db = getFirestore();
    const itemsCollection = db.collection('items'); 
    const item = itemsCollection.doc(id)
    return item.get();
}

export const  ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    
    const { itemId } = useParams()

    useEffect(() => {
        getItems(itemId)
            .then((res) => {
                if(res.exists){

                    setItem({id: res.id, ...res.data()})
                }
            })
        return setItem([]);
    }, [itemId])
    
    return (
        <>
            {
                item.title ? 
                <ItemDetail item={item} /> : <div>loading...</div>
            }
        </>
    )
}