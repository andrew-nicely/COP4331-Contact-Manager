// Ran Xu
// COP 4331
// edit-contact.component.js
// HW: contact project

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar.component";
import axios from 'axios';

export default class EditContact extends Component
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
    axios.get('http://localhost:5000/home/contact/'+this.props.match.params.id)
      .then( response=>
      {
        this.setState(
        {
          userID: response.data.userID,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phone: response.data.phone,
          email: response.data.email
        })
      })
      .catch(function(error)
      {
        console.log(error);
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

    axios.post('http://localhost:5000/contact/update/'+this.props.match.params.id,contact)
      .then(res => console.log(res.data));

    window.location = '/home';
  }

  render()
  {
    return(
      <div>
        <Navbar />
        <br />
        <h3>Edit Contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
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
