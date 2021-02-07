import React from 'react'
import {Link} from 'react-router-dom';


function SingleDriver({driver}) {
    return (
        <div>
            <p>
                ID: {driver.id} &nbsp;
                Name: {driver.name} &nbsp;
                Email: {driver.email} &nbsp;
                Username: {driver.username} &nbsp;
                Password: {driver.password} &nbsp;
                {/* <Link to = '/EditCustomer'>
                    <p><button>Edit</button></p>
                </Link> */}
            </p>
        </div>
    )
}

export default SingleDriver
