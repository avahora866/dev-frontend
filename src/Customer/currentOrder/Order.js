import React, { Component } from 'react'
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';
import axios from 'axios';

class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            list : [],
            totalPrice : 0.00,
        }
        this.calTotalPrice = this.calTotalPrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);

    }

    calTotalPrice() {
        let result = 0.00;
        for (let index = 0; index < this.state.list.length; index++) {
            const temp = this.state.list[index]
            result += temp.price * temp.quantity;
        }
        //Rounding to two decimal places
        result = result * 100;
        result = Math.round(result);
        result = result / 100;
        this.setState({totalPrice: result})
    }

    cancelOrder() {
        axios.delete('http://localhost:9090/milk4u/delOrder', {
            params: {
                id: sessionStorage.getItem('UserId')
            }
        }).then(window.location.reload())
    }


    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getCurrentOrder', {
            params: {
                id: sessionStorage.getItem('UserId')
            }
        }).then(res => {
            this.setState({list : res.data});
            this.calTotalPrice()
          });     
    }

    render() {
        const prodList = this.state.list.map(product => <SingleProduct key = {product.productId} product = {product} />)

        return (
            <div><Navigation />
                    <div className="grid">{prodList}</div>
                    <p>
                        <button className="margin" onClick={this.cancelOrder}>Cancel Order</button>
                        <label className="margin">Total: £{this.state.totalPrice}</label>
                    </p>
            </div>
        )
    }
}


export default Order
