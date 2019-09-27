// Ran Xu
// COP 4331
// edit-password.component.js
// HW: contact project

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Card} from 'reactstrap';
import Navbar from "./navbar.component";
import axios from 'axios';

export default class EditPassword extends Component
{
  constructor(props)
  {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state =
    {
      userId: '',
      password: ''
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000/home/user/'+this.props.match.params.id)
      .then( response=>
      {
        this.setState(
        {
          userID: response.data.userID,
          password: response.data.password
        })
      })
      .catch(function(error)
      {
        console.log(error);
      })
  }

  onChangePassword(input)
  {
    this.setState(
    {
      password: input.target.value
    });
  }

  onSubmit(input)
  {
    input.preventDefault();
    const contact =
    {
      password: this.state.password,
    }
    console.log(contact)

    axios.post('http://localhost:5000/user/update/'+this.props.match.params.id,this.state.userID)
      .then(res => console.log(res.data));

    window.location = '/home';
  }

  render()
  {
    return(
      <div>
        <Navbar />
        <br />
        <center>
          <h1>
            Change Password
          </h1>
          <Card style={{borderColor:'#333', width:"50%"}}>
            <form onSubmit={this.onSubmit}>
              <br/>
              <div className="form-group">
                <input type="text"
                  required
                  style={{width:'80%'}}
                  placeholder='Enter New Password'
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Edit" className="bth btn-primary" />
              </div>
            </form>
          </Card>
        </center>
      </div>
    )
  }
}
