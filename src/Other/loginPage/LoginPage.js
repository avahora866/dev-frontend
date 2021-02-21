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
        // axios.get('http://localhost:9090/milk4u/verifyLogin')
        //     .then(response =>  {const persons = response.data; this.setState({admins:  persons }); console.log(response.data)})
        axios.get('http://localhost:9090/milk4u/verifyLogin').then(response => console.log(response))
        event.preventDefault();
        
      }
    
    render() {
        return (
            <body><Navigation />
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
        </body>
        )
    }
}


export default LoginPage

// function loginPage() {

//     function verify() {
//         console.log("asas")
//     }


//     return (
//         <body><Navigation />
//              <form>
//                  <section>
//                     <span>
//                     <label>Username:    
//                         <input type="text" name="name" />
//                     </label>
//                     </span>
//                     <span>
//                     <label>Password:     
//                         <input type="text" name="password" />
//                     </label>
//                     </span>
//                     <span>
//                     <input type="submit" value="Submit" />
//                         <Link to='/CustomerRegistration'>
//                             <button>Register</button>
//                         </Link>
//                     </span>
//                 </section>
//             </form>
//         </body>
//     )
// }