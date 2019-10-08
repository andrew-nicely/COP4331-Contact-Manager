// Ran Xu
// COP 4331
// edit-password.component.js
// HW: contact project

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
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
        <h3>Edit Password</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>New Password: </label>
            <input type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit" className="bth btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
