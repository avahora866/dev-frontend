import React from 'react'
import Orders from './Orders'
import '../../Background.css'
import Navigation from './Navigation'

function DropList() {
    const orders = [
        {
            id: 1,
            customerName: 'Jhon Green',
            postcode: 'LE5 47G',
        }, 
        {
            id: 2,
            customerName: 'Steve Jhon',
            postcode: 'LE5 23M',
        }, 
        {
            id: 3,
            customerName: 'David Granger',
            postcode: 'LE5 90D',
        }
        ];
        const orderList = orders.map(order => <Orders key = {order.id} order = {order} />)
    return (
        <div><Navigation />
        <div className="background">
            <div >{orderList}</div>
            <p><button>Print Droplist</button></p>
        </div>
        </div>
    )
}

export default DropList
