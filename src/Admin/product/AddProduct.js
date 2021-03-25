import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import '../../Styles.css'
import axios from 'axios';


function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    function handleNameChange(event) {
        setName(event.target.value)
      }
      
      function handleDescriptionChange(event) {
        setDescription(event.target.value)
      }

      function handlePriceChange(event) {
        setPrice(event.target.value)
      }

      function handleSubmit(){
      const data = {
        name: name,
        description: description,
        price: price
      }
        axios.post('http://localhost:9090/milk4u/addProduct', data);
    }

    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="name">Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" value={name} onChange={handleNameChange}/> 
                <label  for="description">Description:</label>
                <input className="paddingBottom" type="text" id="description" name="description" value={description} onChange={handleDescriptionChange}/> 
                <label  for="price">Price:</label>
                <input className="paddingBottom" type="number" id="price" name="price" value={price} onChange={handlePriceChange}/> 
                <Link to = "/ProductList" onClick={handleSubmit}>
                    <input type="submit" value="Add" />
                </Link>
            </form>
        </div>
    )


}

export default AddProduct
