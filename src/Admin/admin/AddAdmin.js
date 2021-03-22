import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

function AddAdmin() {
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="fName">First Name:</label>
                <input className="paddingBottom" type="text" id="fName" name="fName" /> 
                <label for="lName">Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="lName" /> 
                <label for="email">Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" />
                <label for="uName">Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" />
                <Link to = '/AdminList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default AddAdmin
