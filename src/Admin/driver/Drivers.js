import React from 'react'
import SingleDriver from './SingleDriver'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';

function Drivers() {
    const driverList = [
        {
            id: 1,
            name: 'Jhon Green',
            email: 'JG@hotmail.com',
            username: 'Jgreen11',
            password: 'Jgreen22',
            area: 'LE',
        }, 
        {
            id: 2,
            name: 'Steve Green',
            email: 'SG@hotmail.com',
            username: 'SGreen11',
            password: 'SGreen22',
            area: 'LF',
        }, 
        {
            id: 3,
            name: 'David Brown',
            email: 'DB@hotmail.com',
            username: 'DBrown11',
            password: 'DBrown22',
            area: 'LJ',
        }
        ];
        const register = driverList.map(driver => <SingleDriver key = {driver.id} driver = {driver} />)
    return (
        <div><Navigation />
        <div>
            <div >{register}</div>
            <Link to='/AddDriver'>
                <button>Add Driver</button>
            </Link>
        </div>
        </div>
    )
}

export default Drivers

