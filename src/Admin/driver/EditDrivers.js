import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';

function EditDrivers() {

    let location = useLocation();

    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom" >Driver Id:{location.data[0]}</label>
                <label>First Name:</label>
                <input className="paddingBottom" type="text" id="fNname" name="name" value={location.data[1]}/> 
                <label>Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="name" value={location.data[2]}/> 
                <label>Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" value={location.data[3]}/>
                <label>Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" value={location.data[4]}/>
                <label>Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" value={location.data[5]}/>
                <label>Area:</label>
                <input className="paddingBottom" type="text" id="area" name="area" value={location.data[6]}/>
                <Link to = '/DriverList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditDrivers
