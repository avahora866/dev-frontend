import React from 'react'
import {Link} from 'react-router-dom';


function SingleProduct({product}) {
    return (
        <div>
            <p>
                ID: {product.id} &nbsp;
                Name: {product.name} &nbsp;
                Description: {product.description} &nbsp;
                Price: {product.price} &nbsp;
                <Link to = "/EditProduct">
                    <p><button>Edit</button></p>
                </Link>
                <Link to = "/ProductList">
                <p><button>Remove</button></p>
                </Link>
            </p>
        </div>
    )
}

export default SingleProduct
