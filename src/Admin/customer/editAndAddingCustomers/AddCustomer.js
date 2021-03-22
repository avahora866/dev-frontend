import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../../Navigation';
import MyForm from './MyForm'


function AddCustomer() {
    return (
        <div><Navigation />
            <form>
                <span>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </span>
                <span>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" />
                </span>
                <span>
                    <label for="D.O.B">D.O.B:</label>
                        <MyForm />
                </span>
                <span>
                    <label for="uName">Username:</label>
                    <input type="text" id="uName" name="uName" />
                </span>
                <span>
                    <label for="pass">Password:</label>
                    <input type="text" id="pass" name="pass" />
                </span>
                <span>
                    <Link to = '/CustomerList'>
                        <input type="submit" value="Edit" />
                    </Link>
                </span>
            </form>
        </div>
    )
}

export default AddCustomer
