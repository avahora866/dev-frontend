import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';



function SingleDriver({driver}) {
    const driv = [driver.userId, driver.username, driver.password, driver.email, driver.fName, driver.lName, driver.area];
    function removeDriver() {
        axios.delete('http://localhost:9090/milk4u/delUser', {
            params: {
                id: driver.userId
            }
        })

        window.location.reload()
    }
    return (
        <section className="admStylingItem">
            <label>ID: {driver.userId}</label>
            <label>First Name: {driver.fName}</label>
            <label>Last Name: {driver.lName}</label>
            <label>Email: {driver.email}</label>
            <label >Username: {driver.username}</label>
            <label>Password: {driver.password}</label>
            <label>Area: {driver.area}</label>
            <div className="boxRow">
                <Link to={{pathname:"/EditDriver", data:driv}}>
                   <button style={{margin: "0.2em"}}>Edit</button>
                </Link>
                <button onClick={removeDriver}>Remove</button>
            </div>
        </section>
    )
}

export default SingleDriver
