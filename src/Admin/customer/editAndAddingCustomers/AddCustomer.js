import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../../Navigation';
import MyForm from './MyForm'
import '../../../Styles.css'


function AddCustomer() {
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="name">First Name:</label>
                <input className="paddingBottom" type="text" id="fName" name="fName" />
                <label for="name">Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="lName" />
                <label for="email">Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" />
                <label for="D.O.B">D.O.B:</label>
                    <MyForm />
                <label for="uName">Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" />
                <Link to = '/CustomerList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default AddCustomer
