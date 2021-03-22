import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import '../../Styles.css'


function AddProduct() {
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="name">Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" /> 
                <label  for="description">Description:</label>
                <input className="paddingBottom" type="text" id="description" name="description" /> 
                <label  for="price">Price:</label>
                <input className="paddingBottom" type="text" id="price" name="price" /> 
                <Link to = "/ProductList">
                    <input type="submit" value="Add" />
                </Link>
            </form>
        </div>
    )
}

export default AddProduct
