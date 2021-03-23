import React, { Component } from 'react'
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation';
import axios from 'axios';


class Trolly extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list: [],
             totalPrice: 0.00,
        }
        this.calTotalPrice = this.calTotalPrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    calTotalPrice() {
        let result = 0.00;
        for (let index = 0; index < this.state.list.length; index++) {
            const temp = this.state.list[index]
            result += temp[3] * temp[4];
        }
        this.setState({totalPrice: result})
    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getTrolly', {
            params: {
                id: sessionStorage.getItem('UserId')
            }
        }).then(res => {
            this.setState({list : res.data});
            this.calTotalPrice()
          });     
    }
    
    render() {
        const prodList = this.state.list.map(product => <SingleProduct key = {product[0]} product = {product} />)

        return (
            <div><Navigation />
            <div >
                <div>{prodList}</div>
                    <p>
                        <button className="margin">Cancel</button>
                        <button className="margin">Create order</button>
                        <button className="margin">Add to order</button>
                        <label className="margin">{this.state.totalPrice}</label>
                    </p>
                </div>
            </div>
                )
    }
}


// function Trolly() {
//     const prod = [
//         {
//             id: 1,
//             name: 'Milk',
//             description: 'To drinkddddddddddddddddddd',
//             price: 5.47,
//             quaty: 4
//         }, 
//         {
//             id: 2,
//             name: 'Eggs',
//             description: 'Can make omelates withdddddddddddddddddddddd',
//             price: 2.99,
//             quaty: 6
//         }, 
//         {
//             id: 3,
//             name: 'Cheese',
//             description: 'I dont knowdddddddddddddddddddd',
//             price: 4.56,
//             quaty: 9
//         }
//         ];
//         const prodList = prod.map(product => <SingleProduct key = {product.id} product = {product} />)

//         function calTotalPrice() {
//             let result = 0.00;
//             for (let index = 0; index < prod.length; index++) {
//                 result += prod[index].price * prod[index].quaty;
//             }
//             return result; 
//         }

//         const [totalPrice, setTotalPrice] = useState(calTotalPrice);
//     return (
//         <div><Navigation />
//         <div >
//             <div>{prodList}</div>
//             <p>
//                 <button className="margin">Cancel</button>
//                 <button className="margin">Create order</button>
//                 <button className="margin">Add to order</button>
//                 <label className="margin">{totalPrice}</label>
//             </p>
//         </div>
//         </div>
//     )
// }


export default Trolly
