import React from 'react'
import './Order.css'

function SingleProduct({product}) {
    return (
        <div>
            <p>
            Name: {product.name} &nbsp;
            Description: {product.description} &nbsp;
            Price: {product.price} &nbsp;   
            <br /><button>- &nbsp;</button>&nbsp;<textbox className="textarea">0</textbox>&nbsp;<button> &nbsp;+</button><br /><button>Update</button>         
            </p>    
        </div>
    )
}

export default SingleProduct
