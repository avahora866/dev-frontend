import React from 'react'
import '../Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <span>
                <img src="/images/milk.jpeg" alt="Brand"/> 
                <h3>Milk4U</h3>
            </span>
            <ul>
                <Link to = '/Customers'>
                    <li>Customer</li>
                </Link>
                <Link to = '/ProductList'>
                    <li>Product</li>
                </Link>
                <Link to = '/'>
                    <li>Sign out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
