import React from 'react'
import {Link} from 'react-router-dom';


function SingleDriver({driver}) {
    const driv = [driver.userId, driver.fName, driver.fName, driver.email, driver.username, driver.password, driver.area];

    return (
        <section className="boxColumnSingle">
            <label className="paddingBottom">ID: {driver.userId}</label>
            <label className="paddingBottom">First Name: {driver.fName}</label>
            <label className="paddingBottom">Last Name: {driver.lName}</label>
            <label className="paddingBottom">Email: {driver.email}</label>
            <label className="paddingBottom">Username: {driver.username}</label>
            <label className="paddingBottom">Password: {driver.password}</label>
            <label className="paddingBottom">Password: {driver.area}</label>
            <span>
                <Link to={{pathname:"/EditDriver", data:driv}}>
                   <button className="margin">Edit</button>
                </Link>
                <button className="btnSingle">Remove</button>
            </span>
        </section>
    )
}

export default SingleDriver
