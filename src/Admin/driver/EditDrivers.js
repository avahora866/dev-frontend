import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';

function EditDrivers() {

    let location = useLocation();

    return (
        <div><Navigation />
            <form>
                <label>DriverID:{location.data[0]}</label>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={location.data[1]}/> 
                <label>Email:</label>
                <input type="text" id="email" name="email" value={location.data[2]}/>
                <label>Username:</label>
                <input type="text" id="uName" name="uName" value={location.data[3]}/>
                <label>Password:</label>
                <input type="text" id="pass" name="pass" value={location.data[4]}/>
                <label>Area:</label>
                <input type="text" id="area" name="area" value={location.data[5]}/>
                <Link to = '/DriverList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditDrivers
