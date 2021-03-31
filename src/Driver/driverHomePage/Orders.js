import React from 'react'

function Orders({order}) {
    return (
        <section className="boxColumnSingle">
            <label className="paddingBottom">Customer Id: {order.cstId}</label>
            <label className="paddingBottom">Customer Name: {order.fName} {order.lName}</label>
            <label className="paddingBottom">Customer Email: {order.email}</label>
            <label className="paddingBottom">Post Code: {order.postcode}</label>
        </section>
    )
    }


export default Orders
