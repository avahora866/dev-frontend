import React from 'react'
import {Link} from 'react-router-dom';


function SingleCustomer({customer}) {
        const cst = [customer.id, customer.name, customer.email, customer.postcode, customer.username, customer.password];

    return (
        <div>
            <p>
                ID: {customer.id} &nbsp;
                Name: {customer.name} &nbsp;
                Email: {customer.email} &nbsp;
                Postcode: {customer.postcode} &nbsp;
                Username: {customer.username} &nbsp;
                Password: {customer.password} &nbsp;
                Date of birth: {customer.dateofbirth} &nbsp;
                <Link to={{pathname:"/EditCustomer", data:cst}}>
                    <button>Edit</button>
                </Link>
                <button>Remove</button>
            </p>
        </div>
    )
}

export default SingleCustomer
