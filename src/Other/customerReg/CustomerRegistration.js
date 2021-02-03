import React from 'react';
import MyForm from './MyForm';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './CustomerReg.css'

export default customerRegistration


function customerRegistration() {
    return (
        <div><Navigation />
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />  
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <MyForm />
                <label for="uName">Username:</label>
                <input type="text" id="uName" name="uName" />
                <label for="pass">Password:</label>
                <input type="text" id="pass" name="pass" />
                    <Link to ='/Products'>
                        <button>Register</button>
                    </Link>
            </form>
        </div>
    )
}
