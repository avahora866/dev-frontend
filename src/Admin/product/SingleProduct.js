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
        <section className="admStylingItem">
            <label>ID: {product.productId}</label>
            <label>Name: {product.name}</label>
            <label>Description: {product.description}</label>
            <label>Price: £{product.price}</label>
            <div className="boxRow">
                <Link to={{pathname:"/EditProduct", data:prod}}>
                    <button style={{margin: "0.2em"}}>Edit</button>
                </Link>
                <button onClick={removeProduct}>Remove</button>
            </div>
        </section>
    )
}

export default SingleProduct
