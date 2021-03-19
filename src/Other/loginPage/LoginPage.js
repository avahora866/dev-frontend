import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import '../../Styles.css'
import React, { Component } from 'react'
import axios from 'axios';


class LoginPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {uName: '', passWord: ''};
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePassWordChange = this.handlePassWordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUnameChange(event) {
        this.setState({uName: event.target.value});
      }

      handlePassWordChange(event) {
        this.setState({passWord: event.target.value});
      }
    
      handleSubmit(event) {
        const user = (this.state.uName)
        const pass = (this.state.passWord)
        let type = "";
        let url = '/'

        axios.post('http://localhost:9090/milk4u/verifyLogin', {
            userName: user,
            password: pass
          })
          .then((response) => {
            console.log(response.data);
            let data = response.data;
            type = data.type;

            sessionStorage.setItem('UserId', data.userId);
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('fName', data.fName);
            sessionStorage.setItem('lName', data.lName);
            sessionStorage.setItem('dateOfBirth', data.dateOfBirth);
            sessionStorage.setItem('postcode', data.postcode);
            sessionStorage.setItem('area', data.area);
            sessionStorage.setItem('type', data.type);



            switch (type) {
              case 'Customer':
                  url = '/Products'
                  break;
              case 'Admin':
                  url = '/CustomerList'
                  break;
              case 'Driver':
                  url = '/Droplist'
                  break;
              default:
                  break;
            }
              this.props.history.push(url);
          }, (error) => {
            console.log(error);
          });
          event.preventDefault();

        }
    
    render() {
        return (
            <div><Navigation />
             <form onSubmit={this.handleSubmit} className="boxColumn">
                <span className="margin">
                    <label className="margin">Username:</label>    
                    <input type="text" value={this.state.uName} onChange={this.handleUnameChange}  />        
                </span>
                <span className="margin">
                    <label className="margin">Password:</label>    
                    <input type="password" value={this.state.passWord} onChange={this.handlePassWordChange}  />
                </span>
                <span className="margin">
                <input id="sub" type="submit" value="Submit" className="margin"/>  
                <Link to='/CustomerRegistration'>
                    <button>Register</button>
                </Link>
                </span>
            </form>
        </div>
        )
    }
}


export default LoginPage