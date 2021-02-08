import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './LoginPage.css'

function loginPage() {
    return (
        <body><Navigation />
             <form>
                 <section>
                    <span>
                    <label>Username:    
                        <input type="text" name="name" />
                    </label>
                    </span>
                    <span>
                    <label>Password:     
                        <input type="text" name="password" />
                    </label>
                    </span>
                    <span>
                        <button>Submit</button>
                        <Link to='/CustomerRegistration'>
                            <button>Register</button>
                        </Link>
                    </span>
                </section>
            </form>
        </body>
    )
}

export default loginPage
