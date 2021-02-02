import React from 'react'

function Orders({order}) {
    return (
        <div>
            <p>
                ID: {order.id} &nbsp;
                Customer Name: {order.customerName} &nbsp;
                PostCode: {order.postcode} &nbsp;
            </p>
        </div>
    )
}

export default Orders
