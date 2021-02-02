import React from 'react'
import '../../Navigation.css'
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <div>
            <nav>
                <h3 className="postion"> <img src="/images/milk.jpeg" alt="Brand" /> </h3>
                <Link className = "nav-link-style" to = '/'>
                        <li>Sign out</li>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation
