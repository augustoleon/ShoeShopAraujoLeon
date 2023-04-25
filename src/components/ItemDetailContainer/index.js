import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import {ItemDetail} from '../ItemDetail'  
import { getItems } from '../../utils/helpers'

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
        <div>
            {
            item.title ? 
                <ItemDetail item={item}     />
                :        
                <div style={{fontFamily: 'Zen Dots', fontSize: '30px', marginTop: '200px'}}>loading...</div>
            }
        </div>
    )
}