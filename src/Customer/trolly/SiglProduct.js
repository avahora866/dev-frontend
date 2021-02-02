import React from 'react'
import './Trolly.css'

function SiglProduct({product}) {
    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;
            <div><button>- &nbsp;&nbsp;</button><textarea className="textarea">0</textarea><button> &nbsp;&nbsp;+</button><br /><button>Update</button></div>   
            </p>
        </div>
    )
}

export default SiglProduct
