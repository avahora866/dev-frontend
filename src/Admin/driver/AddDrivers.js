import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import axios from 'axios';


function AddDriver() {
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [area, setArea] = useState("")

      
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

      function handleAreaChange(event) {
        setArea(event.target.value)
      }


      function handleSubmit(event) {
        if(fName.length === 0  || lName.length === 0 || email.length === 0 || userName.length === 0 || password === 0 || area === 0){
          alert("Please fill in all the fields")
          event.preventDefault();
        }else{
          const data = {
            userName: userName,
            password: password,
            email: email,
            fName:  fName,
            lName: lName,
            area: area,
            type: "Driver"
          }
            axios.post('http://localhost:9090/milk4u/addUser', data);
        }
     
    }
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label>Username:</label>
                <input className="paddingBottom" type="text" value={userName} onChange={handleUserNameChange}/>
                <label>Password:</label>
                <input className="paddingBottom" type="text"  value={password} onChange={handlePassChange}/>
                <label>Email:</label>
                <input className="paddingBottom" type="text" value={email} onChange={handleEmailChange}/>
                <label>First Name:</label>
                <input className="paddingBottom" type="text" value={fName} onChange={handlefNameChange}/> 
                <label>Last Name:</label>
                <input className="paddingBottom" type="text" value={lName} onChange={handlelNameChange}/> 
                <label>Area:</label>
                <input className="paddingBottom" type="text" value={area} onChange={handleAreaChange}/>
                <Link to = '/DriverList' onClick={handleSubmit}>
                    <input type="submit" value="Add Driver" />
                </Link>
            </form>
        </div>
    )
}

export default AddDriver
