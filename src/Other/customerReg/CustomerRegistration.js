import React from 'react';
import MyForm from './MyForm';
import {Link} from 'react-router-dom';
import '../../Background.css'
import Navigation from '../Navigation';


export default customerRegistration


function customerRegistration() {
    return (
        <div><Navigation />
        <div className = "background">
            <form>
                <label>Name:
                    <br /><input type="text" name="Name" />
                </label>
                    <br />
                <label>Email:
                    <br /><input type="text" name="Email" />
                </label>
                    <br /><MyForm />
                <label>Username:
                    <br /><input type="text" name="Username" />
                </label>
                    <br />
                <label>Password:
                    <br /><input type="text" name="Password" />
                </label>
                    <br />
                    <Link to ='/Products'>
                        <button>Register</button>
                    </Link>
            </form>
        </div>
        </div>
    )
}
