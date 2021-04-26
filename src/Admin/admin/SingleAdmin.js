import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles.css'


function SingleAdmin({admin}) {
    const adm = [admin.userId, admin.fName, admin.lName, admin.email, admin.username, admin.password];
    function removeAdmin() {
        axios.delete('http://localhost:9090/milk4u/delUser', {
            params: {
                id: admin.userId
            }
        })

        window.location.reload()
    }
    return (
        <section className="admStylingItem">
            <label>ID: {admin.userId} </label>
            <label>First Name: {admin.fName} </label>
            <label>Last Name: {admin.lName} </label>
            <label>Email: {admin.email} </label>
            <label>Username: {admin.username} </label> 
            <label>Password: {admin.password} </label> 
            <div className="boxRow">
                <Link to={{pathname:"/EditAdmin", data:adm}}>
                    <button style={{margin: "0.2em"}}>Edit</button>
                </Link>
                <button onClick={removeAdmin}>Remove</button>
            </div>
        </section>
    )
}

export default SingleAdmin
