import React from 'react';
import MyForm from './MyForm';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './CustomerRegistration.css'

function customerRegistration() {
    return (
        <div><Navigation />
            <form className="boxColumn">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />  
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
                <MyForm />
                <label htmlFor="uName">Username:</label>
                <input type="text" id="uName" name="uName" />
                <label htmlFor="pass">Password:</label>
                <input type="text" id="pass" name="pass" />
                    <Link to ='/Products'>
                        <button>Register</button>
                    </Link>
            </form>
        </div>
    )
}

export default customerRegistration
