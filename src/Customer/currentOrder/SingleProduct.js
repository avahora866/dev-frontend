import React, { useState } from 'react';
import './Order.css'

function SingleProduct({product}) {
    const [numOfProd, setNumOfProd] = useState(0);

    function handleDecrement() {
        if(numOfProd === 0){
            alert("Product quantity cannot go under 0");
        }else{
            setNumOfProd(numOfProd - 1);
        }
    }

    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;   
            <br /><button onClick={handleDecrement}>- &nbsp;</button>&nbsp;
            <textbox className="textarea" id="numOfProd">{numOfProd}</textbox>&nbsp;
            <button onClick={() => setNumOfProd(numOfProd + 1)}> &nbsp;+</button><br />
            <button>Update</button>         
            </p>    
        </div>
    )
}

export default SingleProduct
