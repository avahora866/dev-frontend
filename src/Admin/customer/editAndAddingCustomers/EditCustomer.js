import axios from 'axios';
import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../../Navigation';


function EditCustomer() {
    const location = useLocation()
    const [cstId] = useState(location.data[0])
    const [userName, setuserName] = useState(location.data[1])
    const [password, setPassword] = useState(location.data[2])
    const [email, setEmail] = useState(location.data[3])
    const [fName, setfName] = useState(location.data[4])
    const [lName, setlName] = useState(location.data[5])
    const [postcode, setPostcode] = useState(location.data[6])

    function handleUserNameChange(event) {
        setuserName(event.target.value)
      }

      function handlePassChange(event) {
        setPassword(event.target.value)
      }

      function handleEmailChange(event) {
        setEmail(event.target.value)
      }

      function handlefNameChange(event) {
        setfName(event.target.value)
      }

      function handlelNameChange(event) {
        setlName(event.target.value)
      }

      function handlePostCodeChange(event) {
        setPostcode(event.target.value)
      }



      function handleSubmit(event) {   
        const data = {
          id: cstId,
          userName: userName,
          password: password,
          email: email,
          fName: fName,
          lName: lName,
          postCode: postcode,
          area: null,
        }     
          axios.put('http://localhost:9090/milk4u/editUsers', data)
      }


    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Customer Id: {cstId}</label>
                <label >Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" value={userName} onChange={handleUserNameChange}/>
                <label >Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" value={password} onChange={handlePassChange}/>
                <label >Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                <label>First Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" value={fName} onChange={handlefNameChange}/>  
                <label>Last Name:</label>
                <input className="paddingBottom" type="text" id="name" name="name" value={lName} onChange={handlelNameChange}/>  
                <label >Postcode:</label>
                <input className="paddingBottom" type="text" id="email" name="postcode" value={postcode} onChange={handlePostCodeChange}/> 
                <Link to = '/CustomerList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditCustomer


