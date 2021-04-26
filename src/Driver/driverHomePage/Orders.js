import React from 'react'

function Orders({order}) {
    return (
        <section className="cstStyling">
            <label style={{padding: "0.2em"}}>Customer Id: {order.cstId}</label>
            <label style={{padding: "0.2em"}}>Customer Name: {order.fName} {order.lName}</label>
            <label style={{padding: "0.2em"}}>Customer Email: {order.email}</label>
            <label style={{padding: "0.2em"}}>Post Code: {order.postcode}</label>
        </section>
    )
    }


export default Orders
