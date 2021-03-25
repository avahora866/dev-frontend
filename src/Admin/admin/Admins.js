import SingleAdmin from './SingleAdmin'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

class Admin extends Component {    
    constructor(props) {
        super(props)
        this.state = {
             adminList : [],
        }


    }

    componentDidMount() {
        axios.get('http://localhost:9090/milk4u/getUsers', {
            params: {
              type: "Admin"
            }
          }).then(res => {
            this.setState({adminList : res.data});
          });    

    }

    render() {
        let register = this.state.adminList.map(admin => <SingleAdmin key = {admin.userId} admin = {admin} />)
        return (
            <div><Navigation /> 
                <div>
                    <h2>Admin List</h2>
                    <div >{register}</div>
                    <Link to='/AddAdmin'>
                        <button>Add Admin</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Admin



