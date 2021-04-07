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
        if(name.length === 0  || description.length === 0){
          alert("Please fill in all the fields")
          event.preventDefault();
        }else if(price === 0){
          alert("Price cannot be 0")
          event.preventDefault();
        }else{
          if(price === 1){
            console.log("Passed")
          }
        const data = {
          id: productId,
          name: name,
          description: description,
          price: price,
        }     
          axios.put('http://localhost:9090/milk4u/editProducts', data).then((response) => {
          }, (error) => {
            console.log(error)
            alert("ProductID not found")
            event.preventDefault();
          });
          event.preventDefault();

        }
      }

    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Product ID {productId}</label>
                <label>Name:</label>
                <input className="paddingBottom" type="text" value={name} onChange={handleNameChange}/> 
                <label>Description:</label>
                <input className="paddingBottom" type="text" value={description} onChange={handleDescriptionChange}/> 
                <label>Price:</label>
                <input className="paddingBottom" type="number" min="0" value={price} onChange={handlePriceChange}/> 
                <Link to = '/ProductList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditProduct
