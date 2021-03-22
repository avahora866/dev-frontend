import React, { useState } from 'react';
import '../../Styles.css'


function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product.quaty);

    return (
    <section className="secBorder">
        <span className="margin"> 
            <h4 className="margin">{product.name}</h4>   
            <h4 className="margin">£{product.price}</h4>
        </span>
        <span className="margin">
            <p className="margin">
                {product.description}
                <span className="margin">
                <label className="margin">Quantity:</label>
                <input id="qty" type="number" min="1" value={quantity} onChange={event => setQuantity(event.target.value)} className="numStyling"></input>
                <button className="margin">Update</button>
                <button className="margin">Remove</button>
                </span>
            </p>
        </span>
    </section>
        
    )
}

export default SingleProduct
