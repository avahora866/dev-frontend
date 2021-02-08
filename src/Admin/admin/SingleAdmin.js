import React from 'react'
import {Link} from 'react-router-dom';


function SingleAdmin({admin}) {
    return (
        <div>
            <p>
                ID: {admin.id} &nbsp;
                Name: {admin.name} &nbsp;
                Email: {admin.email} &nbsp;
                Username: {admin.username} &nbsp;
                Password: {admin.password} &nbsp;
                <Link to = '/EditAdmins'>
                    <p><button>Edit</button></p>
                </Link>
                <button>Remove</button>
            </p>
        </div>
    )
}

export default SingleAdmin
