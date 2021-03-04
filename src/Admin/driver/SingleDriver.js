import React from 'react'
import {Link} from 'react-router-dom';


function SingleDriver({driver}) {
    const driv = [driver.id, driver.name, driver.email, driver.username, driver.password, driver.area];

    return (
        <div>
            <p>
                ID: {driver.id} &nbsp;
                Name: {driver.name} &nbsp;
                Email: {driver.email} &nbsp;
                Username: {driver.username} &nbsp;
                Password: {driver.password} &nbsp;
                Password: {driver.area} &nbsp;
                <Link to={{pathname:"/EditDriver", data:driv}}>
                    <p><button>Edit</button></p>
                </Link>
                <button>Remove</button>
            </p>
        </div>
    )
}

export default SingleDriver
