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
    }

    calTotalPrice() {
        let result = 0.00;
        for (let index = 0; index < this.state.list.length; index++) {
            const temp = this.state.list[index]
            result += temp[3] * temp[4];
        }
        this.setState({totalPrice: result})
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
        const prodList = this.state.list.map(product => <SingleProduct key = {product[0]} product = {product} />)

        return (
            <div><Navigation />
                <div >
                    <div >{prodList}</div>
                    <p>
                        <button className="margin">Cancel Order</button>
                        <label className="margin">Total: £{this.state.totalPrice}</label>
                    </p>
                </div>
            </div>
        )
    }
}


export default Order
