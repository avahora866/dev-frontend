import React from 'react'
import {Link} from 'react-router-dom';


function SingleCustomer({customer}) {
        const cst = [customer.id, customer.name, customer.email, customer.postcode, customer.username, customer.password];

    return (
        <section>
            <span>
            <label>ID: {customer.id}</label>
            <label>Name: {customer.name}</label>
            <label>Email: {customer.email}</label>
            <label>Postcode: {customer.postcode}</label>
            </span>
            <span>
            <label>Username: {customer.username}</label>
            <label>Password: {customer.password}</label>
            <label>Date Of Birth: {customer.dateOfBirth}</label>
            </span>
            <span>
            <Link to={{pathname:"/EditCustomer", data:cst}}>
                 <button>Edit</button>
            </Link>
            <button>Remove</button>
            </span>
        </section>
        
        

    )
}

export default SingleCustomer
