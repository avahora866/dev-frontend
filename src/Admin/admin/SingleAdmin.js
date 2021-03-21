import React from 'react'
import {Link} from 'react-router-dom';


function SingleAdmin({admin}) {
    const adm = [admin.userId, admin.name, admin.email, admin.username, admin.password];

    return (
        <div>
            <p>
                ID: {admin.userId} &nbsp;
                Name: {admin.name} &nbsp;
                Email: {admin.email} &nbsp;
                Username: {admin.username} &nbsp;
                Password: {admin.password} &nbsp;
                <Link to={{pathname:"/EditAdmin", data:adm}}>
                    <p><button>Edit</button></p>
                </Link>
                <button>Remove</button>
            </p>
        </div>
    )
}

export default SingleAdmin
