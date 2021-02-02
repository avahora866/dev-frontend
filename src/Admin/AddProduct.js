import React from 'react'
import {Link} from 'react-router-dom';
import '../Background.css'
import Navigation from './Navigation';


function AddProduct() {
    return (
        <div><Navigation />
        <div className = "background">
            <form>
                <p>
                    <label>Name
                        <input type="text" name="Name" />
                    </label>
                </p>
                <p>
                    <label>Description
                        <input type="text" name="Name" />
                    </label>
                </p>
                <p>
                    <label>Price
                        <input type="price" name="Name" />
                    </label>
                </p>
                <p>
                    <Link to = "/ProductList">
                    <input type="submit" value="Add" />
                    </Link>
                </p>
            </form>
        </div>
        </div>
    )
}

export default AddProduct
