import React, { useState } from 'react';
import './Order.css'

function SingleProduct({product}) {
    const [quantity, setQuantity] = useState(product.quaty);

    return (
        // <div>
        //     <p>
        //     Name: {product.name} &nbsp;
        //     Description: {product.description} &nbsp;
        //     Price: {product.price} &nbsp;   
        //     <br /><button onClick={handleDecrement}>- &nbsp;</button>&nbsp;
        //     <textbox className="textarea" id="numOfProd">{numOfProd}</textbox>&nbsp;
        //     <button onClick={() => setNumOfProd(numOfProd + 1)}> &nbsp;+</button><br />
        //     <button>Update</button>  
        //     <button>Delete</button>       
        //     </p>    
        // </div>
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
