import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


function SingleProduct({product}) {
    const prod = [product.productId, product.name, product.description, product.price];

    function removeProduct() {
        axios.delete('http://localhost:9090/milk4u/delProduct', {
            params: {
                pId: product.productId
            }
        })

        window.location.reload()
    }
    return (
        <section className="boxColumnSingle">
            <label className="paddingBottom">ID: {product.productId}</label>
            <label className="paddingBottom">Name: {product.name}</label>
            <label className="paddingBottom">Description: {product.description}</label>
            <label className="paddingBottom">Price: £{product.price}</label>
            <span>
                <Link to={{pathname:"/EditProduct", data:prod}}>
                    <button className="margin">Edit</button>
                </Link>
                <button onClick={removeProduct} className="margin">Remove</button>
            </span>
        </section>
    )
}

export default SingleProduct
