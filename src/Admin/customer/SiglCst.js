import React from 'react'
import {Link} from 'react-router-dom';


function SiglCst({customer}) {
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
                <Link to = '/EditCustomer'>
                    <p><button>Edit</button></p>
                </Link>
            </p>
        </div>
    )
}

export default SiglCst
