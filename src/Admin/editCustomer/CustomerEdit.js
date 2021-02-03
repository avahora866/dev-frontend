import React from 'react'
import MyForm from './MyForm'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

function CustomerEdit() {
    return (
        <div><Navigation />
        <div >
            <form>
                <p><label>CustomerID</label></p>
                <p>
                <label>Name:
                    <input type="text" name="Name" />
                </label>
                </p>
                <p>
                <label>Email:
                    <input type="text" name="Email" />
                </label>
                </p>
                <p>
                <label>D.O.B:
                    <MyForm />
                </label>
                </p>
                <p>
                <label>Username:
                    <input type="text" name="Username" />
                </label>
                </p>
                <p>
                <label>Password:
                    <input type="text" name="Password" />
                </label>
                </p>
                <Link to = '/Customers'>
                    <p><input type="submit" value="Edit" /></p>
                </Link>
            </form>
        </div>
        </div>
    )
}

export default CustomerEdit
