import React, { useState } from 'react';
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';

function Trolly() {
    const prod = [
        {
            id: 1,
            name: 'Milk',
            description: 'To drinkddddddddddddddddddd',
            price: 5.47,
            quaty: 4
        }, 
        {
            id: 2,
            name: 'Eggs',
            description: 'Can make omelates withdddddddddddddddddddddd',
            price: 2.99,
            quaty: 6
        }, 
        {
            id: 3,
            name: 'Cheese',
            description: 'I dont knowdddddddddddddddddddd',
            price: 4.56,
            quaty: 9
        }
        ];
        const prodList = prod.map(product => <SingleProduct key = {product.id} product = {product} />)

        function calTotalPrice() {
            let result = 0.00;
            for (let index = 0; index < prod.length; index++) {
                result += prod[index].price * prod[index].quaty;
            }
            return result; 
        }

        const [totalPrice, setTotalPrice] = useState(calTotalPrice);
    return (
        <div><Navigation />
        <div >
            <div>{prodList}</div>
            <p>
                <button className="margin">Cancel</button>
                <button className="margin">Create order</button>
                <button className="margin">Add to order</button>
                <label className="margin">{totalPrice}</label>
            </p>
        </div>
        </div>
    )
}


export default Trolly
