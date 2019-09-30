// Ran Xu
// COP 4331
// contact-list.component.js
// HW: contact project

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Card} from 'reactstrap';
import Navbar from "./navbar.component";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Contact = props =>
(
  <tr>
    <td>{props.contact.firstName}</td>
    <td>{props.contact.lastName}</td>
    <td>{props.contact.phone}</td>
    <td>{props.contact.email}</td>
    <td>
      <Link to={"/home/edit/"+props.contact._id}>edit</Link> | <a href="#" onClick={() => {props.deleteContact(props.contact._id)}}>delete</a>
    </td>
  </tr>
)

export default class ContactList extends Component
{
  constructor(props)
  {
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
    this.state =
    {
      contact:[]
    };
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000/contact/')
      .then(response =>
      {
        this.setState(
        {
          contact: response.data
        })
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }

  deleteContact(id)
  {
    axios.delete('http://localhost:5000/contact/'+id)
      .then(res => console.log(res.data));
    this.setState(
    {
      contact: this.state.contact.filter(el => el._id !== id)
    })
  }

  contactList()
  {
    return this.state.contact.map(currentcontact =>
    {
      return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
    })
  }

  render()
  {
    return (
      <div>
        <Navbar />
        <br />
        <center>
          <h1>
            Contacts
          </h1>
          <Card style={{borderColor:'#333', width:"80%"}}>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                this.contactList()
              }
              </tbody>
            </table>
          </Card>
        </center>
      </div>
    )
  }
}
