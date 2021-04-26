import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import '../.././Styles.css'
import axios from 'axios';


class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
             userName: '',
             password: '',
             email: '',
             fName: '',
             lName: '',
             postcode: '',
             selectedDay: undefined
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
            alert("Please fill in all the fields")
            event.preventDefault();
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
              this.props.history.push("/CustomerList");
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
              <section className="sectionAdm">
                <form className="boxColumn">
                    <label style={{margin: "0.2em"}}>Username:</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
                    <label style={{margin: "0.2em"}}>Password:</label>
                    <input type="text" id="pass" name="pass" value={this.state.password} onChange={this.handlePassChange}/>
                    <label style={{margin: "0.2em"}}>Email:</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <label style={{margin: "0.2em"}}>First Name:</label>
                    <input type="text" id="fName" name="fName" value={this.state.fName} onChange={this.handlefNameChange}/>
                    <label style={{margin: "0.2em"}}>Last Name:</label>
                    <input type="text" id="lName" name="lName" value={this.state.lName} onChange={this.handlelNameChange}/>
                    <label style={{margin: "0.2em"}}>Postcode:</label>
                    <input type="text" id="postcode" name="postcode" value={this.state.postcode} onChange={this.handlePostcodeChange}/>
                    <label style={{margin: "0.2em"}}>D.O.B:</label>
                    <input style={{margin: "0.2em"}} type="date" id="start" name="trip-start" onChange={this.handleDayClick}></input>
                    <Link to = '/CustomerList' onClick={this.handleSubmit}>
                        <input type="submit" value="Add Customer" className="loginBtns"/>
                    </Link>
                  </form>
                  <p>
                    Please fill in all of the fields to create a new customer.
                    NOTE: the customer added must be of 18 years of age.
                  </p>
                </section>
            </div>
        )
    }
}


export default AddCustomer
