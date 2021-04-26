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
          });     
    }

    render() {
        let register = this.state.customerList.map(customer => <SingleCustomer key = {customer.userId} customer = {customer} />)
        return (
            <div><Navigation /> 
                <div>
                <h2 style={{color: "#2d68e3"}}>Customer List</h2>
                    <div className="grid">{register}</div>
                    <Link to='/AddCustomer'>
                        <button className="margin2">Add Customer</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Customer

