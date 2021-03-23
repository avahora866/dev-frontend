import React, { useState } from 'react';
import '../../Styles.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product[4]);
    return (
        <section className="secBorder">
            <span className="margin">
                <h4 className="margin">{product[1]} </h4>
                <h4 className="margin">£{product[3]} </h4>
            </span>
            <span className="margin">
                <p className="margin">
                    {product[2]}
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
