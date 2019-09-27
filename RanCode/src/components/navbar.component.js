// Ran Xu
// COP 4331
// navbar.component.js
// HW: contact project

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
  render()
  {
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Contacts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home/create" className="nav-link">Add Contact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home/editpassword" className="nav-link">Change Password</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Sign Out</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
