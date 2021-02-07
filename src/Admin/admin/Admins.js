import React from 'react'
import SingleAdmin from './SingleAdmin'
import Navigation from '../Navigation';

function Admins() {
    const adminList = [
        {
            id: 1,
            name: 'Jhon Green',
            email: 'JG@hotmail.com',
            username: 'Jgreen11',
            password: 'Jgreen22',
        }, 
        {
            id: 2,
            name: 'Steve Green',
            email: 'SG@hotmail.com',
            username: 'SGreen11',
            password: 'SGreen22',
        }, 
        {
            id: 3,
            name: 'David Brown',
            email: 'DB@hotmail.com',
            username: 'DBrown11',
            password: 'DBrown22',
        }
        ];
        const register = adminList.map(admin => <SingleAdmin key = {admin.id} admin = {admin} />)
    return (
        <div><Navigation />
        <div>
            <div >{register}</div>
        </div>
        </div>
    )
}

export default Admins

