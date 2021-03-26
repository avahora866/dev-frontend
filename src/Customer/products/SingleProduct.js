import axios from 'axios';
import React, { useState } from 'react';
import '../../Styles.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(0);

    function addToTrolly() {
        if(quantity === 0){
            alert('Cannot add a product with 0 quantity')
        }else{
        const data = {
            cstId: sessionStorage.getItem('UserId'),
            prodId: product.productId,
            qty: quantity
        }
        axios.put('http://localhost:9090/milk4u/addToTrolly', data).then(window.location.reload())
    }
    }

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
                        <button onClick={addToTrolly}>Add to Trolly</button>
                    </span>
                </p>
            </span>
        </section>
    )
}

export default SingleProduct

