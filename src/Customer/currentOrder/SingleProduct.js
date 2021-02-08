import React from 'react'
import './Order.css'

function decrease() {
    let num = parseInt(document.getElementById("numOfProd").textContent);
    if(num === 0){
        alert("cannot go under 0");
    }else{
        document.getElementById("numOfProd").textContent = parseInt(document.getElementById("numOfProd").textContent) - 1;
    }
}

function increase() {
    document.getElementById("numOfProd").textContent = parseInt(document.getElementById("numOfProd").textContent) + 1;
}

function SingleProduct({product}) {
    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;   
            <br /><button onClick={decrease}>- &nbsp;</button>&nbsp;<textbox className="textarea" id="numOfProd">0</textbox>&nbsp;<button onClick={increase}> &nbsp;+</button><br /><button>Update</button>         
            </p>    
        </div>
    )
}

export default SingleProduct