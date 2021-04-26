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
        <section className="sectionAdm">
            <form className="boxColumn">
                <label style={{margin: "0.2em"}}>Username:</label>
                <input type="text" value={userName} onChange={handleUserNameChange}/>
                <label style={{margin: "0.2em"}}>Password:</label>
                <input type="text"  value={password} onChange={handlePassChange}/>
                <label style={{margin: "0.2em"}}>Email:</label>
                <input type="text" value={email} onChange={handleEmailChange}/>
                <label style={{margin: "0.2em"}}>First Name:</label>
                <input type="text" value={fName} onChange={handlefNameChange}/> 
                <label style={{margin: "0.2em"}}>Last Name:</label>
                <input type="text" value={lName} onChange={handlelNameChange}/> 
                <label style={{margin: "0.2em"}}>Area:</label>
                <input type="text" value={area} onChange={handleAreaChange}/>
                <Link to='/DriverList' onClick={handleSubmit}>
                    <input type="submit" value="Add Driver" className="loginBtns"/>
                </Link>
            </form>
            <p>
              Please fill in all of the fields to create a new driver.
            </p>
          </section>
        </div>
    )
}

export default AddDriver
