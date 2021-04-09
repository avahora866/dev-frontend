import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';
import React, { Component } from 'react'
import axios from 'axios';


class Products extends Component {
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
            const prodList = this.state.productList.map(product => <SingleProduct key = {product.productId} product = {product} />)
        return (
            <div><Navigation />
                 <div className="grid">{prodList}</div>
             </div>
        )
    }
}


export default Products
