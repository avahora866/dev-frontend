import React from 'react'
import {Link} from 'react-router-dom';


function SingleProduct({product}) {
    const prod = [product.productId, product.name, product.description, product.price];

    return (
        <div>
            <p>
                ID: {product.productId} &nbsp;
                Name: {product.name} &nbsp;
                Description: {product.description} &nbsp;
                Price: {product.price} &nbsp;
                <Link to={{pathname:"/EditProduct", data:prod}}>
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
