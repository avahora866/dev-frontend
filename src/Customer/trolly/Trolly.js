import React from 'react'
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';

function Trolly() {
    const prod = [
        {
            id: 1,
            name: 'Milk',
            description: 'To drink',
            price: 5.47
        }, 
        {
            id: 2,
            name: 'Eggs',
            description: 'Can make omelates with',
            price: 2.99
        }, 
        {
            id: 3,
            name: 'Cheese',
            description: 'I dont know',
            price: 4.56
        }
        ];
        const prodList = prod.map(product => <SingleProduct key = {product.id} product = {product} />)
    return (
        <div><Navigation />
        <div >
            <div>{prodList}</div>
            <p><button>Cancel</button><button>Create order</button><button>Add to order</button>&nbsp;&nbsp;<br /><label>Total Price</label></p>
        </div>
        </div>
    )
}


export default Trolly
