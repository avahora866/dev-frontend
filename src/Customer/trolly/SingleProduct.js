import React, { useState } from 'react';
import './Trolly.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product.quaty);
    return (
        <section>
            <span>
                <h4>{product.name} </h4>
                <h5>£{product.price} </h5>
            </span>
            <span>
                <p>{product.description}</p>
                <div>
                    <label>Quantity:</label>
                    <input id="qty" type="number" min="0" value={quantity} onChange={event => setQuantity(event.target.value)}></input>
                    <button>Update</button>
                    <button>Remove</button>
                </div>
            </span>
        </section>
    )
}

export default SingleProduct
