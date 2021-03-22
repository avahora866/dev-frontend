import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

function AddDriver() {
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="name">First Name:</label>
                <input className="paddingBottom" type="text" id="fName" name="fName" /> 
                <label for="name">Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="lName" /> 
                <label for="email">Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" />
                <label for="uName">Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" />
                <Link to = '/DriverList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default AddDriver
