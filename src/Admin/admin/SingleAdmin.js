import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles.css'


function SingleAdmin({admin}) {
    const adm = [admin.userId, admin.fName, admin.lName, admin.email, admin.username, admin.password];

    return (
        <section className="boxColumnSingle">
                <label className="paddingBottom">ID: {admin.userId} </label>
                <label className="paddingBottom">First Name: {admin.fName} </label>
                <label className="paddingBottom">Last Name: {admin.lName} </label>
                <label className="paddingBottom">Email: {admin.email} </label>
                <label className="paddingBottom">Username: {admin.username} </label> 
                <label className="paddingBottom">Password: {admin.password} </label> 
                <span>
                    <Link to={{pathname:"/EditAdmin", data:adm}}>
                        <button className="margin">Edit</button>
                    </Link>
                    <button className="btnSingle">Remove</button>
                </span>
        </section>
    )
}

export default SingleAdmin
