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
        <section className="admStylingItem">
                <label>ID: {customer.userId}</label>
                <label>First Name: {customer.fName}</label>
                <label>Last Name: {customer.lName}</label>
                <label>Email: {customer.email}</label>
                <label>Postcode: {customer.postcode}</label>
                <label>Username: {customer.username}</label>
                <label>Password: {customer.password}</label>
                <label>Date Of Birth: {customer.dateOfBirth}</label>
                <div className="boxRow">
                    <Link to={{pathname:"/EditCustomer", data:cst}}>
                        <button style={{margin: "0.2em"}}>Edit</button>
                    </Link>
                    <button onClick={removeCustomer} >Remove</button>
                </div>
        </section>
        
        

    )
}

export default SingleCustomer
