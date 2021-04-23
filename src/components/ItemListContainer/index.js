import React, { useEffect, useState } from 'react';
import {ItemList} from '../ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase'


export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    
    const { categoryId } = useParams();
    
    useEffect(() => {
        const db = getFirestore(); // conexión a la base de datos
        const itemsCollection = db.collection('items'); // conectame con la siguiente colección
        
        // Si existe categoryId seteamos 
        let filter = categoryId ? itemsCollection.where('category', '==', categoryId) : itemsCollection

        const prom = filter.get(); // Traeme todo lo que exista en esa colección

        prom.then((snapshot) => {
            console.log('se consultaron los datos');
            console.log(snapshot);

            if(snapshot.size > 0){
                console.log(snapshot.docs.map(doc => doc.data()))
                setItems(snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} // agrego el ID a cada uno de los items de la base de datos
                }));
            }
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