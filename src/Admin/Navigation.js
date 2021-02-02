import React from 'react'
import '../Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <h3> <img src="/images/milk.jpeg" alt="Brand" /> </h3>
                <ul className = "nav-links">
                    <Link className = "nav-link-style" to = '/Customers'>
                        <li>Customer</li>
                    </Link>
                    <Link className = "nav-link-style" to = '/ProductList'>
                        <li>Product</li>
                    </Link>
                    <Link className = "nav-link-style" to = '/'>
                        <li>Sign out</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
