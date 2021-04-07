import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './CustomerRegistration.css'
import axios from 'axios';


class CustomerRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            email: '',
            fName: '',
            lName: '',
            postcode: '',
            selectedDay: new Date()
        }

        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlefNameChange = this.handlefNameChange.bind(this);
        this.handlelNameChange = this.handlelNameChange.bind(this);
        this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDayClick(day) {
        this.setState({ selectedDay: day.target.value });
      }

      handleUserNameChange(event) {
        this.setState({ userName: event.target.value })
      }

      handlePassChange(event) {
        this.setState({ password: event.target.value })
      }

      handleEmailChange(event) {
        this.setState({ email: event.target.value })
      }

      handlefNameChange(event) {
        this.setState({ fName: event.target.value })
      }

      handlelNameChange(event) {
        this.setState({ lName: event.target.value })
      }

      handlePostcodeChange(event) {
        this.setState({ postcode: event.target.value })
      }

      handleSubmit(event) {
        if(this.state.userName.length === 0  || this.state.password.length === 0 || this.state.fName.length === 0 || this.state.lName.length === 0 || this.state.email.length === 0
          || this.state.postcode.length === 0 || this.state.selectedDay === null){
          alert("Please fill in all fields")
        }else{
          const data = {
            userName: (this.state.userName),
            password: (this.state.password),
            email: (this.state.email),
            fName:  (this.state.fName),
            lName: (this.state.lName),
            dateOfBirth: (this.state.selectedDay),
            postcode: (this.state.postcode),
            area: null,
            type: "Customer"
          }
            axios.post('http://localhost:9090/milk4u/addUser', data).then((response) => {
              this.props.history.push("/");
            }, (error) => {
              console.log(error)
              alert("Date of birth invalid")
            });
            event.preventDefault();

          }
      }
    
    render() {
        return (
            <div><Navigation />
                <form className="boxColumn" onSubmit={this.handleSubmit}>
                <label htmlFor="uName">Username:</label>
                    <input type="text" id="uName" name="uName" value={this.state.userName} onChange={this.handleUserNameChange}/>
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id="pass" name="pass" value={this.state.password} onChange={this.handlePassChange}/>
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" id="fName" name="name" value={this.state.fName} onChange={this.handlefNameChange}/>  
                    <label htmlFor="lName">Last Name:</label>
                    <input type="text" id="lName" name="name" value={this.state.lName} onChange={this.handlelNameChange}/>  
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <label htmlFor="postcode">Post Code:</label>
                    <input type="text" id="postcode" name="postcode" value={this.state.postcode} onChange={this.handlePostcodeChange}/>
                    <label htmlFor="dateOfBirth">D.O.B:</label>
                    <input type="date" id="start" name="trip-start" value={this.state.selectedDay} onChange={this.handleDayClick}></input>
                        {/* <Link to ='/Products' > */}
                        <input type="submit" value="Register" />
                        {/* </Link> */}
                </form>
            </div>
        )
    }
}


export default CustomerRegistration
