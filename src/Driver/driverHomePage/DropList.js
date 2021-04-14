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

        this.printDroplist = this.printDroplist.bind(this);

    }

    printDroplist() {
        if(this.state.orderList.length === 0){
            alert("There is no drop list to print")
        }else{
            axios.get('http://localhost:9090/milk4u/printDroplist')
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
                <button onClick={this.printDroplist}>Print Droplist</button>
            </div>
        )
    }
    }



export default DropList
