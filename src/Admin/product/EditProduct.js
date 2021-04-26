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

        let number = parseInt(price);
        if(name.length === 0  || description.length === 0){
          alert("Please fill in all the fields")
          event.preventDefault();
        }else if(number === 0.00){
          alert("Price cannot be 0")
          event.preventDefault();
        }else{
            const data = {
              id: productId,
              name: name,
              description: description,
              price: price,
            }     
            axios.put('http://localhost:9090/milk4u/editProducts', data)            
        }
      }

    return (
        <div><Navigation />
        <section className="sectionAdm">
            <form className="boxColumn">
                <label style={{margin: "0.2em"}}>Product Id: {productId}</label>
                <label style={{margin: "0.2em"}}>Name:</label>
                <input type="text" value={name} onChange={handleNameChange}/> 
                <label style={{margin: "0.2em"}}>Description:</label>
                <input type="text" value={description} onChange={handleDescriptionChange}/> 
                <label style={{margin: "0.2em"}}>Price:</label>
                <input type="number" min="0" value={price} onChange={handlePriceChange}/> 
                <Link to='/ProductList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" className="loginBtns"/>
                </Link>
            </form>
            <p>
              Please edit any of the fields you wish to modify.
            </p>            
          </section>               
        </div>
    )
}

export default EditProduct
