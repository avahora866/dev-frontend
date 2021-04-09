import React, { Component } from 'react'
import Orders from './Orders'
import Navigation from './Navigation'
import axios from 'axios';

class DropList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             orderList: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getDroplist', {
            params: {
              id: sessionStorage.getItem('UserId')
            }
          }).then(res => {
            this.setState({orderList : res.data});
          });    
    }
    
    render() {
        let droplist = this.state.orderList.map(order => <Orders key = {order.cstId} order = {order} />)
        return (
            <div><Navigation />
                <h2>Droplist for {sessionStorage.getItem('fName')} {sessionStorage.getItem('lName')}</h2>
                <div className="grid">{droplist}</div>
                <button>Print Droplist</button>
            </div>
        )
    }
    }



export default DropList
