import React from 'react'
import './Products.css'

function decrease() {

}

function increase() {
    console.log("Hello");
}

function SingleProduct({product}) {
    return (
        <div>
            <p>
                Name: {product.name} &nbsp;
                Description: {product.description} &nbsp;
                Price: {product.price} &nbsp;
                <br /><button onClick={decrease}>-</button>&nbsp;<textbox id="numOfProd">0</textbox>&nbsp;<button onClick={increase}>+</button>
                <br /><button>Add To Trolly</button>
            </p>
        </div>
    )
}



export default SingleProduct
