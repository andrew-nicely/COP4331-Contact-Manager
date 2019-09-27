// Ran Xu
// COP 4331
// create-contact.component.js
// HW: contact project

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Card} from 'reactstrap';
import Navbar from "./navbar.component";
import axios from 'axios';

export default class CreateContact extends Component
{
  constructor(props)
  {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state =
    {
      userID: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }

  componentDidMount()
  {
    this.setState(
    {
      userID: 'test user'
    })
  }

  onChangeFirstName(input)
  {
    this.setState(
    {
      firstName: input.target.value
    });
  }

  onChangeLastName(input)
  {
    this.setState(
    {
      lastName: input.target.value
    });
  }

  onChangeEmail(input)
  {
    this.setState(
    {
      email: input.target.value
    });
  }

  onChangePhone(input)
  {
    this.setState(
    {
      phone: input.target.value
    });
  }

  onSubmit(input)
  {
    input.preventDefault();
    const contact =
    {
      userID: this.state.userID,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
    }
    console.log(contact)

    axios.post('http://localhost:5000/contact/add',contact)
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
        <h1>Create New Contact</h1>
        <Card style={{borderColor:'#333', width:"50%"}}>
          <form onSubmit={this.onSubmit}>
          <br/>
          <div className="form-group">
            <input type="text"
              required
              style={{width:'80%'}}
              placeholder='First Name'
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <input type="text"
              required
              style={{width:'80%'}}
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <input type="text"
              style={{width:'80%'}}
              placeholder='Phone Number'
              required
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <input type="text"
              style={{width:'80%'}}
              placeholder='Email'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add" className="bth btn-primary" />
          </div>
          </form>
        </Card>
      </center>
      </div>
    )
  }
}
