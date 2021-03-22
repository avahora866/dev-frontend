import axios from 'axios';
import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';
import '../../Styles.css'

function EditAdmins() {

    const location = useLocation()
    
    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Admin Id: {location.data[0]}</label>
                <label>First Name: </label>
                <input  className="paddingBottom" type="text" id="name" name="name" value={location.data[1]}/> 
                <label >Last Name: </label>
                <input  className="paddingBottom" type="text" id="name" name="name" value={location.data[2]}/> 
                <label >Email:</label>
                <input  className="paddingBottom" type="text" id="email" name="email" value={location.data[3]}/>
                <label >Username:</label>
                <input  className="paddingBottom" type="text" id="uName" name="uName" value={location.data[4]}/>
                <label >Password:</label>
                <input  className="paddingBottom" type="text" id="pass" name="pass" value={location.data[5]}/>
                <Link to='/AdminList'>
                    <input type="submit" value="Edit"/>
                </Link>
            </form>
        </div>
    )
}

export default EditAdmins
