import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import './LoginPage.css'
import React, { Component } from 'react'
import axios from 'axios';


class LoginPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {uName: '', passWord: '' };
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
        console.log(this.state.uName)
        console.log(this.state.passWord)

        const userName = (this.state.uName)
        const password = (this.state.passWord)

        axios.post('http://localhost:9090/milk4u/verifyLogin', {},  { params: { userName, password }})
        .then(response => console.log(response))
        .catch(error => {console.log(error.response)})

        event.preventDefault();

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:9090/milk4u/verifyLogin',
        //     })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         //handle error
        //         console.log(error);
        //     });
        //     event.preventDefault();
      }
    
    render() {
        return (
            <div><Navigation />
             <form onSubmit={this.handleSubmit}>
                 <section>
                    <span>
                    <label>Username:    
                        <input type="text" value={this.state.uName} onChange={this.handleUnameChange}  />
                    </label>
                    </span>
                    <span>
                    <label>Password:     
                        <input type="text" value={this.state.passWord} onChange={this.handlePassWordChange}  />
                    </label>
                    </span>
                    <span>
                    <input type="submit" value="Submit" />
                        <Link to='/CustomerRegistration'>
                            <button>Register</button>
                        </Link>
                    </span>
                </section>
            </form>
        </div>
        )
    }
}


export default LoginPage