import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './Type.css'

function Type() {
    return (
        <body><Navigation />
        <div className="bg">
            <h2>What type of user are you?</h2>
            <span>
                <Link to='/CustomerRegistration' >
                    <button className="mar">Customer</button>
                </Link>
                <Link to ='/EmployeeRegistration'>
                    <button className="mar">Employee</button> 
                </Link>
            </span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
            </p>
        </div>
        </body>
    )
}

export default Type
