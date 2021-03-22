import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';

function EditProduct() {

    let location = useLocation();

    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Product ID{location.data[0]}</label>
                <label>Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" value={location.data[1]}/> 
                <label>Description:</label>
                <input className="paddingBottom" type="text" id="description" name="description" value={location.data[2]}/> 
                <label>Price:</label>
                <input className="paddingBottom" type="text" id="price" name="price" value={location.data[3]}/> 
                <Link to = '/ProductList'>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditProduct
