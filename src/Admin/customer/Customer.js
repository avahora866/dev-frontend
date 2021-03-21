import SingleCustomer from './SingleCustomer'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

class Customer extends Component {    
    constructor(props) {
        super(props)
    
        this.state = {
             customerList : [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getUsers', {
            params: {
              type: "Customer"
            }
          }).then(res => {
            this.setState({customerList : res.data});
            console.log(this.state.customerList)
          });     
    }

    render() {
        let register = this.state.customerList.map(customer => <SingleCustomer key = {customer.userId} customer = {customer} />)
        return (
            <div><Navigation /> 
                <div>
                    <div >{register}</div>
                    <Link to='/AddCustomer'>
                        <button>Add Customer</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Customer

