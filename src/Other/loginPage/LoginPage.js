import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './LoginPage.css'
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
            let data = response.data.split("-");
            type = data[0];

            sessionStorage.setItem('id', data[1]);

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
             <form onSubmit={this.handleSubmit}>
                <span>
                    <label>Username:</label>    
                    <input type="text" value={this.state.uName} onChange={this.handleUnameChange}  />        
                </span>
                <span>
                    <label>Password:</label>    
                    <input type="text" value={this.state.passWord} onChange={this.handlePassWordChange}  />
                </span>
                <span>
                <input id="sub" type="submit" value="Submit" />  
                <Link to='/CustomerRegistration'>
                    <button id="reg">Register</button>
                </Link>
                </span>
            </form>
        </div>
        )
    }
}


export default LoginPage