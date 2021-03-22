import React from 'react'
import '../Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {

    function sessionClearAll() {
        sessionStorage.removeItem('UserId')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('fName')
        sessionStorage.removeItem('lName')
        sessionStorage.removeItem('dateOfBirth')
        sessionStorage.removeItem('postcode')
        sessionStorage.removeItem('area')
        sessionStorage.removeItem('type')
    }


    return (
        <nav >
            <span >
                <img src="/images/milk.jpeg" alt="Brand" /> 
                <h3>Milk4U</h3>
            </span>
            <ul>
            <li>Hello {sessionStorage.getItem('username')}!</li>
                <Link to = '/Order'>
                    <li>Order</li>
                </Link>
                <Link to = 'Trolly'>
                    <li>Trolly</li>
                </Link>
                <Link to = 'Products'>
                    <li>Products</li>
                </Link>
                <Link to = '/'>
                    <li onClick={sessionClearAll}>Sign out</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Navigation
