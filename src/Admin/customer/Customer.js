import React from 'react'
import SingleCustomer from './SingleCustomer'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';


function Customer() {
    const cst = [
        {
            id: 1,
            name: 'Jhon Green',
            email: 'JG@hotmail.com',
            postcode: 'LE5 47G',
            username: 'Jgreen11',
            password: 'Jgreen22',
            dateofbirth: '12/5/87',
        }, 
        {
            id: 2,
            name: 'Steve Green',
            email: 'SG@hotmail.com',
            postcode: 'LE5 29j',
            username: 'SGreen11',
            password: 'SGreen22',
            dateofbirth: '4/8/99',
        }, 
        {
            id: 3,
            name: 'David Brown',
            email: 'DB@hotmail.com',
            postcode: 'LE5 38k',
            username: 'DBrown11',
            password: 'DBrown22',
            dateofbirth: '6/2/01',
        }
        ];
        const register = cst.map(customer => <SingleCustomer key = {customer.id} customer = {customer} />)
    return (
        <div><Navigation />
        <div>
            <div >{register}</div>
            <Link to='/AddCustomer'>
                <button>Add Customer</button>
            </Link>
        </div>
        </div>
    )
}

export default Customer

