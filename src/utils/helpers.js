import {getFirestore} from '../firebase';

export const getItems = (id) => { 
    const db = getFirestore();
    const itemsCollection = db.collection('items'); 
    const item = itemsCollection.doc(id)
    return item.get();
}; 

export const getCategoryId = (categoryId) => {
    const db = getFirestore(); // conexión a la base de datos
    const itemsCollection = db.collection('items'); // accedemos a la collección de items
    
    // Si existe categoryId seteamos 
    let filter = categoryId ? itemsCollection.where('category', '==', categoryId) : itemsCollection

    return filter.get(); // Traeme todo lo que exista en esa colección
}
