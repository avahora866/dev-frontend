import React, { Component } from 'react'
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';
import axios from 'axios';

class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            list : [],
            totalPrice : 0,
        }
        // this.calTotalPrice = this.calTotalPrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    // calTotalPrice() {
    //     let result = 0.00;
    //     for (let index = 0; index < this.state.list.length; index++) {
    //         result += this.state.list[index].price * this.state.list[index].quaty;
    //     }
    //     this.setState({totalPrice: result})
    // }

    splitLists() {
        let temp = [];
        for(let index = 0; index < this.state.length/2; index++){
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getCurrentOrder', {
            params: {
                id: sessionStorage.getItem('UserId')
            }
        }).then(res => {
            this.setState({list : res.data});
          });    
          
        //   this.calTotalPrice();
    }
    
    render() {
        const prodList = this.state.list.map(product => <SingleProduct key = {product.id} product = {product} />)

        return (
            <div><Navigation />
                <div >
                    <div >{prodList}</div>
                    <p>
                        <button className="margin">Cancel Order</button>
                        <label className="margin">{this.state.totalPrice}</label>
                    </p>
                </div>
            </div>
        )
    }
}


export default Order
