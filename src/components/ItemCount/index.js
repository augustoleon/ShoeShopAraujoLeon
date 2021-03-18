import React, {useEffect, useState} from 'react';

export const ItemCount = ({stock, initial, onAdd})=> {

    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial));
        return;
    }, [initial]);

    const addHandle = () => {
        setCount(count + 1);
    };

    const removeHandle = () => {
        setCount(count - 1);
    };

    return (<div>
        <div class="d-flex justify-content-center mx-auto" role="group" aria-label="Basic outlined example">
            
            <button type="button" class="btn btn-outline-primary " onClick={removeHandle} disabled={count <= 0}>-</button>
            <div class="btn btn-primary" disabled>
                <div> {count} </div>
            </div>      
            <button type="button" class="btn btn-outline-primary" onClick={addHandle} disabled= {count >= stock}>+</button>    
        </div>

        <div class="d-flex justify-content-center" >
            <button type="button" class="btn btn-primary w-40" onClick={_e => onAdd(count)}>Agregar al carrito</button>
         </div>
    </div>
    )
}
