import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles.css'


function SingleCustomer({customer}) {
        const cst = [customer.userId, customer.fName, customer.lName, customer.email, customer.postcode, customer.username, customer.password];

    return (
        <section className="boxColumnSingle">
                <label className="paddingBottom">ID: {customer.userId}</label>
                <label className="paddingBottom">First Name: {customer.fName}</label>
                <label className="paddingBottom">Last Name: {customer.lName}</label>
                <label className="paddingBottom">Email: {customer.email}</label>
                <label className="paddingBottom">Postcode: {customer.postcode}</label>
                <label className="paddingBottom">Username: {customer.username}</label>
                <label className="paddingBottom">Password: {customer.password}</label>
                <label className="paddingBottom">Date Of Birth: {customer.dateOfBirth}</label>
                <span>
                    <Link to={{pathname:"/EditCustomer", data:cst}}>
                        <button className="margin">Edit</button>
                    </Link>
                    <button className="btnSingle">Remove</button>
                </span>
        </section>
        
        

    )
}

export default SingleCustomer
