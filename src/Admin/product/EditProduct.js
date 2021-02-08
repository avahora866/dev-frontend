import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

function EditProduct() {
    return (
        <div><Navigation />
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" /> 
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" /> 
                <label for="price">Price:</label>
                <input type="text" id="price" name="price" /> 
                <Link to = '/ProductList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditProduct
