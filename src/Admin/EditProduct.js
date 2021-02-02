import React from 'react'
import {Link} from 'react-router-dom';
import '../Background.css'
import Navigation from './Navigation';

function EditProduct() {
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
                <Link to = '/ProductList'>
                    <p>
                        <input type="submit" value="Edit" />
                    </p>
                </Link>
            </form>
        </div>
        </div>
    )
}

export default EditProduct
