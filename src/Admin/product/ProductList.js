// import React from 'react'
// import SingleProduct from './SingleProduct'
// import {Link} from 'react-router-dom';
// import Navigation from '../Navigation';

// function ProductList() {
//     const prod = [
//         {
//             id: 1,
//             name: 'Milk',
//             description: 'To drink',
//             price: 5.47
//         }, 
//         {
//             id: 2,
//             name: 'Eggs',
//             description: 'Can make omelates with',
//             price: 2.99
//         }, 
//         {
//             id: 3,
//             name: 'Cheese',
//             description: 'I dont know',
//             price: 4.56
//         }
//         ];
//         const prodList = prod.map(product => <SingleProduct key = {product.id} product = {product} />)
//     return (
//         <div><Navigation />
//         <div >
//             <div>{prodList}</div>
//             <Link to = '/AddProduct'>
//                 <p><button>Add Product</button></p>
//             </Link>
//         </div>
//         </div>
//     )
// }

// export default ProductList

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
            console.log(this.state.productList)
          });     
    }

    render() {
        let register = this.state.productList.map(product => <SingleProduct key = {product.productId} product = {product} />)
        return (
            <div><Navigation /> 
                <div>
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



