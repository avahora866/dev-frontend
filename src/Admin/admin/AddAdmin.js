import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import axios from 'axios';


function AddAdmin() {
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")

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
        axios.post('http://localhost:9090/milk4u/addUser', {
            userName: userName,
            password: password,
            email: email,
            fName: fName,
            lName: lName,
            type: "Admin"
        }).then(this.props.history.goBack())
    }
    return (
        <div><Navigation />
            <form onSubmit={handleSubmit}className="boxColumnSingle">
                <label>First Name:</label>
                <input className="paddingBottom" type="text" id="fName" name="fName" value={fName} onChange={handlefNameChange}/> 
                <label>Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="lName" value={lName} onChange={handlelNameChange}/> 
                <label>Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                <label>Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" value={userName} onChange={handleUserNameChange}/>
                <label>Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" value={password} onChange={handlePassChange}/>
                    <input type="submit" value="Add Admin" />
            </form>
        </div>
    )
}

export default AddAdmin
