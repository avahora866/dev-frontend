import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles.css'
import axios from 'axios';



function SingleCustomer({customer}) {
        const cst = [customer.userId, customer.username, customer.password,  customer.email, customer.fName, customer.lName, customer.postcode];
        function removeCustomer() {
            axios.delete('http://localhost:9090/milk4u/delUser', {
                params: {
                    id: customer.userId
                }
            })
    
            window.location.reload()
        }
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
                    <button onClick={removeCustomer} className="btnSingle">Remove</button>
                </span>
        </section>
        
        

    )
}

export default SingleCustomer
