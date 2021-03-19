import React from 'react'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <span>
                <img src="/images/milk.jpeg" alt="Brand"/> 
                <h3>Milk4U</h3>
            </span>
            <ul>
            <li>{sessionStorage.getItem('username')}</li>
                <Link to = '/CustomerList'>
                    <li>Customers</li>
                </Link>
                <Link to = '/AdminList'>
                    <li>Admins</li>
                </Link>
                <Link to = '/DriverList'>
                    <li>Drivers</li>
                </Link>
                <Link to = '/ProductList'>
                    <li>Products</li>
                </Link>
                <Link to = '/'>
                    <li>Sign out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
