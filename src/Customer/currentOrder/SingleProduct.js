import axios from 'axios';
import React, { useState } from 'react';
import '../../Styles.css'


function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product.quantity);

    function updateProductQty() {
        const data = {
            cstId: sessionStorage.getItem('UserId'),
            prodId: product.productId,
            qty: quantity
        }
        axios.put('http://localhost:9090/milk4u/updateOrder', data).then(window.location.reload())
    }

    function removeProduct() {
        axios.delete('http://localhost:9090/milk4u/delProductFromOrder', {
            params: {
                cstId: sessionStorage.getItem('UserId'),
                prodId: product.productId
            }
        }).then(window.location.reload())

    }

    return (
    <section className="boxColumn">
        <span className="margin"> 
            <p className="margin">{product.name}  £{product.price}</p>
        </span>
        <span className="margin">
            <p className="margin">
                {product.description}
                <span className="margin">
                <label className="margin">Quantity:</label>
                <input id="qty" type="number" min="1" value={quantity} onChange={event => setQuantity(event.target.value)} className="numStyling"></input>
                <button className="margin" onClick={updateProductQty}>Update</button>
                <button className="margin" onClick={removeProduct}>Remove</button>
                </span>
            </p>
        </span>
    </section>
        
    )
}

export default SingleProduct
