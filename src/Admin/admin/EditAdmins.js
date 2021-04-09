import axios from 'axios';
import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';
import '../../Styles.css'

function EditAdmins() {
    const location = useLocation()
    const [adminId] = useState(location.data[0])
    const [fName, setfName] = useState(location.data[1])
    const [lName, setlName] = useState(location.data[2])
    const [email, setEmail] = useState(location.data[3])
    const [userName, setuserName] = useState(location.data[4])
    const [password, setPassword] = useState(location.data[5])

    function handlefNameChange(event) {
        setfName(event.target.value)
      }

      function handlelNameChange(event) {
        setlName(event.target.value)
      }

      function handleEmailChange(event) {
        setEmail(event.target.value)
      }

      function handleUserNameChange(event) {
        setuserName(event.target.value)
      }

      function handlePassChange(event) {
        setPassword(event.target.value)
      }



    function handleSubmit(event) {   
      if(fName.length === 0  || lName.length === 0 || email.length === 0 || userName.length === 0 || password === 0){
        alert("Please fill in all the fields")
        event.preventDefault();
      }else{
        const data = {
          id: adminId,
          userName: userName,
          password: password,
          email: email,
          fName: fName,
          lName: lName,
          postCode: null,
          area: null
        }     
          axios.put('http://localhost:9090/milk4u/editUsers', data).then((response) => {
          }, (error) => {
            console.log(error)
            alert("UserID not found")
            event.preventDefault();
          });
      }
      
    }
    return (
        <div><Navigation />
            <form className="boxColumn">
                <label className="paddingBottom">Admin Id: {adminId}</label>
                <label>First Name: </label>
                <input  className="paddingBottom" type="text" name="name" value={fName} onChange={handlefNameChange} /> 
                <label >Last Name: </label>
                <input  className="paddingBottom" type="text" name="name" value={lName} onChange={handlelNameChange} /> 
                <label >Email:</label>
                <input  className="paddingBottom" type="text" name="email" value={email} onChange={handleEmailChange} />
                <label >Username:</label>
                <input  className="paddingBottom" type="text" name="uName" value={userName} onChange={handleUserNameChange} />
                <label >Password:</label>
                <input  className="paddingBottom" type="text" name="pass" value={password} onChange={handlePassChange} />
                <Link to="/AdminList" onClick={handleSubmit}> 
                    <input type="submit" value="Edit" className="margin2"/>
                </Link>
            </form>
        </div>
    )
}

export default EditAdmins
