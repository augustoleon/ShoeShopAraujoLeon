import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import {ItemList} from '../ItemList';
import { getCategoryId } from '../../utils/helpers';


export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        getCategoryId(categoryId).then((snapshot) => {
            if(snapshot.size > 0){
                setItems(snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} // agrego el ID a cada uno de los items de la base de datos
                }));
            }
        })
    }, [categoryId])

    return (
        <div>
            <div style={{fontFamily: 'Zen Dots', fontSize: '28px', margin: '10px 0px'}}>
                {props.greeting}

            </div>
            <div className="container-fluid">
                <ItemList items = {items}/>
            </div>
        </div>
    )

} 