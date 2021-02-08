import React from 'react'
import MyForm from './MyForm'
import {Link} from 'react-router-dom';
import Navigation from '../../Navigation';

function CustomerEdit() {
    return (
        <div><Navigation />
            <form>
                <label for="id">CustomerID</label>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />  
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="D.O.B">D.O.B:</label>
                    <MyForm />
                <label for="uName">Username:</label>
                <input type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input type="text" id="pass" name="pass" />
                <Link to = '/Customers'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default CustomerEdit
