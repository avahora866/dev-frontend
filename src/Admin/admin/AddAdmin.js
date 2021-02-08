import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

function AddAdmin() {
    return (
        <div><Navigation />
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" /> 
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="uName">Username:</label>
                <input type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input type="text" id="pass" name="pass" />
                <Link to = '/AdminList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default AddAdmin
