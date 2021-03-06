import SingleDriver from './SingleDriver'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

class Driver extends Component {    
    constructor(props) {
        super(props)
    
        this.state = {
             driverList : [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getUsers', {
            params: {
              type: "Driver"
            }
          }).then(res => {
            this.setState({driverList : res.data});
          });     
    }

    render() {
        let register = this.state.driverList.map(driver => <SingleDriver key = {driver.userId} driver = {driver} />)
        return (
            <div><Navigation /> 
                <div>
                <h2 style={{color: "#2d68e3"}}>Driver List</h2>
                    <div className="grid">{register}</div>
                    <Link to='/AddDriver'>
                        <button className="margin2">Add Driver</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Driver


