import './Products.css'
import React, { useState } from 'react';

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
                <button onClick={handleDecrement}>-</button>&nbsp;
                <textbox>{numOfProd}</textbox>&nbsp;
                <button onClick={() => setNumOfProd(numOfProd + 1)}>+</button>
                <button>Add To Trolly</button>
            </p>
        </div>
    )
}

export default SingleProduct

