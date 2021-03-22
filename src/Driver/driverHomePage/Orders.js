import React from 'react'

function Orders({order}) {
    return (
        <section className="boxColumnSingle">
            <label className="paddingBottom">ID: {order.id}</label>
            <label className="paddingBottom">Customer Name: {order.customerName}</label>
            <label className="paddingBottom">PostCode: {order.postcode}</label>
        </section>
    )
}

export default Orders
