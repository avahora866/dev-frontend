import React from 'react'
import {Link} from 'react-router-dom';
import '../Background.css'
import Navigation from './Navigation';
import '../Navigation.css'

function loginPage() {
    return (
        <div><Navigation />
        <div className = "background">
             <form >
                 <p>
                <label>Username:    
                    <input type="text" name="name" />
                </label>
                </p>
                <p>
                <label>Password:     
                    <input type="text" name="name" />
                </label>
                </p>
                <p>
                    <input type="submit" value="Submit" />
                    <Link to='/Type'>
                        <button>Register</button>
                    </Link>
                </p>
            </form>
        </div>
        </div>
    )
}

export default loginPage
