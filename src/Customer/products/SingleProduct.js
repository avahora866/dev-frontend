import './Products.css'
import React, { useState } from 'react';

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(0);

    return (
        <section>
            <span>
                <h4>{product.name} </h4>
                <h5>£{product.price} </h5>
            </span>
            <span>
                <p>{product.description}</p>
                <div>
                    <input id="qty" type="number" min="0" onChange={event => setQuantity(event.target.value)}></input>
                    <button>Add to Trolly</button>
                </div>
            </span>
        </section>
    )
}

export default SingleProduct

