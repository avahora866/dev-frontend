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
    return (
        <div><Navigation />
            <form className="boxColumnSingle">
                <label for="uName">Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" value={userName} onChange={handleUserNameChange}/>
                <label for="pass">Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" value={password} onChange={handlePassChange}/>
                <label for="email">Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                <label for="name">First Name:</label>
                <input className="paddingBottom" type="text" id="fName" name="fName" value={fName} onChange={handlefNameChange}/> 
                <label for="name">Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="lName" value={lName} onChange={handlelNameChange}/> 
                <label for="area">Area:</label>
                <input className="paddingBottom" type="text" id="area" name="area" value={area} onChange={handleAreaChange}/>
                <Link to = '/DriverList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default AddDriver
