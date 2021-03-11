import React, { useState } from 'react';
import '../../Styles.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(0);

    return (
        <section className="secBorder">
            <span className="margin">
                <h4 className="margin">{product.name} </h4>
                <h4 className="margin">£{product.price} </h4>
            </span>
            <span className="margin">
                <p className="margin">
                        {product.description}
                        <span className="margin">
                        <input id="qty" type="number" min="0" onChange={event => setQuantity(event.target.value)} value={quantity} className="numStyling"></input>
                        <button>Add to Trolly</button>
                    </span>
                </p>
            </span>
        </section>
    )
}

export default SingleProduct

