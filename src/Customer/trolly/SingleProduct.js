import React from 'react'
import './Trolly.css'

function SingleProduct({product}) {
    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;
            <div><button>- &nbsp;&nbsp;</button>&nbsp;<textbox className="textarea">0</textbox>&nbsp;<button> &nbsp;&nbsp;+</button><br /><button>Update</button></div>   
            </p>
        </div>
    )
}

export default SingleProduct
