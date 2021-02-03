import React from 'react'
import Martian from './Martian'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';



function EmployeeRegistration() {
    return (
        <div><Navigation />
        <div >
             <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />  
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="uName">Username:</label>
                <input type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input type="text" id="pass" name="pass" />
                <label for="type">Type:</label>
                <Martian />
                <label for="area">Area: Only for Drivers</label>
                <input type="text" id="area" name="area" />
                <Link to = '/Customers'>
                    <input type="submit" value="Create Account" />
                </Link>
            </form>
        </div>
        </div>
    )
}

export default EmployeeRegistration
