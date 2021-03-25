import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

class ProductList extends Component {    
    constructor(props) {
        super(props)
    
        this.state = {
             productList : [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getProducts').then(res => {
            this.setState({productList : res.data});
          });     
    }

    render() {
        let register = this.state.productList.map(product => <SingleProduct key = {product.productId} product = {product} />)
        return (
            <div><Navigation /> 
                <div>
                <h2>Product List</h2>
                    <div >{register}</div>
                    <Link to='/AddProduct'>
                        <button>Add Product</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default ProductList



