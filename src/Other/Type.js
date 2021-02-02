import React from 'react'
import {Link} from 'react-router-dom';
import '../Background.css'
import Navigation from './Navigation';

function Type() {
    return (
        <body><Navigation />
        <div className = "background">
            <Link to='/CustomerRegistration'>
                <button>Customer</button>
            </Link>
            <Link to ='/EmployeeRegistration'>
                <button>Employee</button> 
            </Link>
        </div>
        </body>
    )
}

export default Type
