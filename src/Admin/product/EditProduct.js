import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';
import axios from 'axios';

function EditProduct() {
    const location = useLocation()
    const [productId] = useState(location.data[0])
    const [name, setName] = useState(location.data[1])
    const [description, setDescription] = useState(location.data[2])
    const [price, setPrice] = useState(location.data[3])

    function handleNameChange(event) {
        setName(event.target.value)
      }
      
      function handleDescriptionChange(event) {
        setDescription(event.target.value)
      }

      function handlePriceChange(event) {
        setPrice(event.target.value)
      }

      function handleSubmit(event) {   
        const data = {
          id: productId,
          name: name,
          description: description,
          price: price,
        }     
          axios.put('http://localhost:9090/milk4u/editProducts', data)
      }

    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Product ID {productId}</label>
                <label>Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" value={name} onChange={handleNameChange}/> 
                <label>Description:</label>
                <input className="paddingBottom" type="text" id="description" name="description" value={description} onChange={handleDescriptionChange}/> 
                <label>Price:</label>
                <input className="paddingBottom" type="number" id="price" name="price" value={price} onChange={handlePriceChange}/> 
                <Link to = '/ProductList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditProduct
