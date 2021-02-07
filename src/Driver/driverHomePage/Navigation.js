import React from 'react'
import '../../Navigation.css'
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <nav >
            <span > 
                <img src="/images/milk.jpeg" alt="Brand" /> 
                <h3>Milk4U</h3>
            </span>
            <ul>
                <Link to = '/'>
                    <li>Sign out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
