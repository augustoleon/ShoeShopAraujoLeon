import React, { useEffect, useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd })=> {

    const [count, setCount] = useState(parseInt(initial));

    // useEffect(() => {
    //     setCount(parseInt(initial));
    //     return setCount(initial);
    // }, []);

    const addHandle = () => setCount(count + 1)

    const removeHandle = () => setCount(count - 1)

    return (
        <div>
            <div className="d-flex justify-content-center mx-auto" role="group" aria-label="Basic outlined example">
                
                <button type="button" className="btn btn-outline-primary " onClick={removeHandle} disabled={count <= 0}>-</button>
                <div className="btn btn-primary" disabled>
                    <div> {count} </div>
                </div>      
                <button type="button" className="btn btn-outline-primary" onClick={addHandle} disabled= {count >= stock}>+</button>    
            </div>

            <div className="d-flex justify-content-center" >
                <button type="button" className="btn btn-primary w-40" onClick={_ => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
