import React from 'react'
import '../Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <h3> <img src="/images/milk.jpeg" alt="Brand" /> </h3>
                <ul className = "nav-links">
                    <Link className = "nav-link-style" to = '/Order'>
                        <li>Order</li>
                    </Link>
                    <Link className = "nav-link-style" to = 'Trolly'>
                        <li>Trolly</li>
                    </Link>
                    <Link className = "nav-link-style" to = 'Products'>
                        <li>Products</li>
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
