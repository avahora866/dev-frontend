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
        <section className="productStyling">
            <div className="boxColumn">
                <label>{product.name}</label>
                <label>{product.description}</label>
                <label>£{product.price}</label>
            </div>
            <div>
                <input id="qty" type="number" min="0" onChange={event => setQuantity(event.target.value)} value={quantity} className="numStyling"></input>
                <button onClick={addToTrolly}>Add to Trolly</button>
            </div>
        </section>

        
    )
}

export default SingleProduct

