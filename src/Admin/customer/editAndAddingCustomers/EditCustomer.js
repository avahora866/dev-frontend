import {Link, useLocation} from 'react-router-dom';
import Navigation from '../../Navigation';
import React from 'react'


function EditCustomer() {

    let location = useLocation();

    return (
        <div><Navigation />
            <form>
                <label>Customer ID: {location.data[0]}</label>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={location.data[1]}/>  
                <label >Email:</label>
                <input type="text" id="email" name="email" value={location.data[2]}/>
                <label >Postcode:</label>
                <input type="text" id="email" name="postcode" value={location.data[3]}/>
                <label >Username:</label>
                <input type="text" id="uName" name="uName" value={location.data[4]}/>
                <label >Password:</label>
                <input type="text" id="pass" name="pass" value={location.data[5]}/>
                <Link to = '/CustomerList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditCustomer


