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

      function handleSubmit(event){
        if(name.length === 0  || description.length === 0){
          alert("Please fill in all the fields")
          event.preventDefault();
        }else if(price === 0){
          alert("Price cannot be 0")
          event.preventDefault();
        }else{
          const data = {
            name: name,
            description: description,
            price: price
          }
            axios.post('http://localhost:9090/milk4u/addProduct', data);

        }
      
    }

    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label>Name:</label>
                <input className="paddingBottom" type="text" value={name} onChange={handleNameChange}/> 
                <label>Description:</label>
                <input className="paddingBottom" type="text" value={description} onChange={handleDescriptionChange}/> 
                <label>Price:</label>
                <input className="paddingBottom" min="0" type="number" value={price} onChange={handlePriceChange}/> 
                <Link to="/ProductList" onClick={handleSubmit}>
                    <input type="submit" value="Add" />
                </Link>
            </form>
        </div>
    )


}

export default AddProduct
