import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation';
import axios from 'axios';


function EditDrivers() {
    const location = useLocation()
    const [driverId] = useState(location.data[0])
    const [userName, setuserName] = useState(location.data[1])
    const [password, setPassword] = useState(location.data[2])
    const [email, setEmail] = useState(location.data[3])
    const [fName, setfName] = useState(location.data[4])
    const [lName, setlName] = useState(location.data[5])
    const [area, setArea] = useState(location.data[6])


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
        } else{
          const data = {
            id: driverId,
            userName: userName,
            password: password,
            email: email,
            fName: fName,
            lName: lName,
            postCode: null,
            area: area
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
                <label className="paddingBottom" >Driver Id:{driverId}</label>
                <label>Username:</label>
                <input className="paddingBottom" type="text" id="uName" name="uName" value={userName} onChange={handleUserNameChange}/>
                <label>Password:</label>
                <input className="paddingBottom" type="text" id="pass" name="pass" value={password} onChange={handlePassChange}/>
                <label>Email:</label>
                <input className="paddingBottom" type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                <label>First Name:</label>
                <input className="paddingBottom" type="text" id="fNname" name="name" value={fName} onChange={handlefNameChange}/> 
                <label>Last Name:</label>
                <input className="paddingBottom" type="text" id="lName" name="name" value={lName} onChange={handlelNameChange}/>       
                <label>Area:</label>
                <input className="paddingBottom" type="text" id="area" name="area" value={area} onChange={handleAreaChange}/>
                <Link to = '/DriverList' onClick={handleSubmit}>
                    <input type="submit" value="Edit" />
                </Link>
            </form>
        </div>
    )
}

export default EditDrivers
