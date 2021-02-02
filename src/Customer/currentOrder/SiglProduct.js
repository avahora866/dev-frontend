import React from 'react'
import './Order.css'

function SiglProduct({product}) {
    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;   
            <br /><button>- &nbsp;</button><textarea className="textarea">0</textarea><button> &nbsp;+</button><br /><button>Update</button>         
            </p>    
        </div>
    )
}

export default SiglProduct
