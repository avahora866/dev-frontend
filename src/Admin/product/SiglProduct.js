import React from 'react'
import {Link} from 'react-router-dom';


function SiglProduct({product}) {
    return (
        <div>
            <p>
                ID: {product.id} &nbsp;
                Name: {product.name} &nbsp;
                Description: {product.description} &nbsp;
                Price: {product.price} &nbsp;
                <Link to = "/EditProducts">
                    <p><button>Edit</button></p>
                </Link>
                <Link to = "/ProductList">
                <p><button>Remove</button></p>
                </Link>
            </p>
        </div>
    )
}

export default SiglProduct
