import React from 'react'
import Martian from './Martian'
import {Link} from 'react-router-dom';
import '../../Background.css'
import Navigation from '../Navigation';



function EmployeeRegistration() {
    return (
        <div><Navigation />
        <div className = "background">
             <form>
                <label>Name:
                    <br /><input type="text" name="Name" />
                </label>
                <br />
                <label>Email:
                    <br /><input type="text" name="Email" />
                </label>
                <br />
                <label>Username:
                    <br /><input type="text" name="Username" />
                </label>
                <br />
                <label>Password:
                    <br /><input type="text" name="Password" />
                </label>
                <br />
                <label>Type:
                    <br /><Martian />
                </label>
                <label>Area:
                    <br /><input type="text" name="Area" />
                </label>
                <br />
                <Link to = '/Customers'>
                    <input type="submit" value="Create Account" />
                </Link>
            </form>
        </div>
        </div>
    )
}

export default EmployeeRegistration
