import axios from 'axios';
import React, { useState } from 'react';
import '../../Styles.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product.quantity);

    function removeProduct() {
        axios.delete('http://localhost:9090/milk4u/delProductFromTrolly', {
            params: {
                cstId: sessionStorage.getItem('UserId'),
                prodId: product.productId
            }
        }).then(window.location.reload())

    }

    function updateProductQty() {
        const data = {
            cstId: sessionStorage.getItem('UserId'),
            prodId: product.productId,
            qty: quantity
        }

        axios.put('http://localhost:9090/milk4u/updateTrolly', data).then(window.location.reload())
        
    }

    return (
        <section className="productStyling">
            <div className="boxColumn">
                <label>{product.name}</label>
                <label>{product.description}</label>
                <label>£{product.price}</label>
            </div>
            <div className="boxRow">
                <label>Quantity:</label>
                <input id="qty" type="number" min="1" value={quantity} onChange={event => setQuantity(event.target.value)} className="numStyling"></input>
                <button style={{ margin: '0.5em' }} onClick={updateProductQty}>Update</button>
                <button onClick={removeProduct}>Remove</button>
            </div>
        </section>        
    )
}

export default SingleProduct
